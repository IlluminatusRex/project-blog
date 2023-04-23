import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postRedux";

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

    return (
      <div>
        <h2>{postData.title}</h2>
        <p><b>Author: </b>{postData.author}
        <br/><b>Published: </b>{postData.publishedDate}</p>
        <p>{postData.shortDescription}</p>
      </div>
    );
  };

  export default SinglePost;