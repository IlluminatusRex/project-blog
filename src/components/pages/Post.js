import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {dateToStr} from "../../utils/dateToStr";
//import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { getPostById } from "../../redux/postsRedux";

const Post = props => {

  //const { postId } = useParams();
  //const postData = useSelector(state => getPostById(state, postId));

  return (
    <Col className="py-4 col-12 col-md-4 ">
      <Card>
        <Card.Body >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p><b>Author: </b>{props.author}
            <br/><b>Published: </b>{dateToStr(props.publishedDate)}<br/>
            <b>Category: </b>{props.category}</p>
            <p>{props.shortDescription}</p>
          </Card.Text>
          <Link key={props.id} to={"/post/" + props.id}>
            <Button variant="primary">Read more</Button>
          </Link> 
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;