import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilteredCategories } from "../../redux/categoriesRedux";
import { Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Post from "./Post";

const SingleCategory = () => {
	
  const { category } = useParams();
  const categoriesData = useSelector(state => getFilteredCategories(state, category));
	console.log(categoriesData);

	if(!categoriesData) return <Navigate to="/categories/" />
		return (
			<Row className="justify-content-between">
        {categoriesData.map(post => <Post key={post.id} {...post} />)}  
    	</Row>
		);
};

export default SingleCategory;