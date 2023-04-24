import Posts from "../features/Posts";
import AddPost from "./AddPost";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = props => {
    return (
      <div>
         <div className="d-flex justify-content-between">
          <h1>All posts</h1>
          <Link key={props.id} to={"/post/add"}>
            <Button variant="outline-info">Add Post</Button>
          </Link>
        </div>
        <Posts />
      </div>
    );
  };

  export default Home;