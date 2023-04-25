import { useParams, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../redux/postRedux";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

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
        <div className="d-sm-flex justify-content-between d-grid gap-2 col-12">
          <h2>{postData.title}</h2>
          <div className="">
            <Link key={props.id} to={"/post/edit/" + id}>
              <Button variant="outline-info m-1">Edit</Button>
            </Link>
            <Button onClick={handleShow} variant="outline-danger m-1">Delete</Button>
          </div>
        </div>
        <p><b>Author: </b>{postData.author}
        <br/><b>Published: </b>{postData.publishedDate}</p>
        <p>{postData.shortDescription}</p>

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