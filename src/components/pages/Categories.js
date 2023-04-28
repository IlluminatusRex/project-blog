import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { strToLowerCase } from "../../utils/strToLowerCase";

const Categories = props => {

	const categories = useSelector(getAllCategories);


	return (
		<div style={{ width: '70%' }} className="m-auto">
			<h1>Categories</h1>
			<ListGroup>
				<ListGroup.Item><Link key={props.id} to={"/categories/" + strToLowerCase(categories[0])}>{categories[0]}</Link></ListGroup.Item>
				<ListGroup.Item><Link to={"/categories/" + strToLowerCase(categories[1])}>{categories[1]}</Link></ListGroup.Item>
				<ListGroup.Item><Link to={"/categories/" + strToLowerCase(categories[2])}>{categories[2]}</Link></ListGroup.Item>
			</ListGroup>
		</div>
	);
};

export default Categories;