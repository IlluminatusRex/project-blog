import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postRedux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor ] = useState('');
  const [publishedDate, setPublishedDate ] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    navigate("/");
    dispatch(addPost({ title, author, publishedDate, shortDescription, content  }));
    setTitle('');
    setShortDescription('');
    setAuthor('');
    setPublishedDate('');
    setContent('');
  };

  return (
    <div style={{ width: '70%' }}>
      <Form className="" >
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <Form.Control value={content} onChange={e => setContent(e.target.value)} />
        </Form.Group>
        <Button onClick={handleAdd} variant="primary" type="submit">
          Add post
        </Button>
      </Form>
    </div>

  );
};

export default PostFormAdd;