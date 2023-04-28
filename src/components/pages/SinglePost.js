import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../redux/postRedux";
import { Button, Modal } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { dateToStr } from "../../utils/dateToStr";

const SinglePost = props => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

    
  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(removePost(id));
    handleClose();
  };

  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h2>{postData.title}</h2>
          <div>
            <Link key={props.id} to={"/post/edit/" + id}>
              <Button variant="outline-info m-1">Edit post</Button>
            </Link>
            <Button onClick={handleShow} variant="outline-danger m-1">Delete</Button>
          </div>
        </div>
        <p/><b>Author: </b>{postData.author}
        <br/><b>Published: </b>{dateToStr(postData.publishedDate)}
        <br/><b>Category: </b>{postData.category}
        <p/>{postData.shortDescription}
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This operation will completely remove this post from the app. 
              <br/>Are you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Cancel</Button>
            <Button onClick={deletePost} variant="danger">Remove</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
};

export default SinglePost;