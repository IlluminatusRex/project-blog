import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postRedux";
import Post from "../pages/Post";
import { Row } from "react-bootstrap";



const Posts = props => {

  const posts = useSelector(getAllPosts);

	return (
        <Row className="justify-content-between">
        {posts.map(post => <Post key={post.id} {...post} />)}  
        </Row>  
	);
};

export default Posts;