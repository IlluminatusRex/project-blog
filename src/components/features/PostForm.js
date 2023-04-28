import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [author, setAuthor ] = useState(props.author || '');
    const [publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const categories = useSelector(getAllCategories);

  const handleSubmit = e => {
    setContentError(!content || content == "<p><br></p>")
    setDateError(!publishedDate)
    if(content && publishedDate && content != "<p><br></p>"){
      action({ title, author, publishedDate, shortDescription, content, category });
      console.log("Content",content);
    }
  };

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  return (
    <div style={{ width: '70%' }}>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
              {...register("title", { required: true, minLength: 3 })}
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" placeholder="Enter title"
            />
            {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control
              {...register("author", { required: true, minLength: 3 })}
              value={author}
              onChange={e => setAuthor(e.target.value)}
              type="text" placeholder="Enter Author"
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Published date can't be empty</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => setCategory(e.target.value)} >
            <option>Select category...</option>
            <option>{categories[0]}</option>
            <option>{categories[1]}</option>
            <option>{categories[2]}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control
              {...register("shortDescription", { required: true, minLength: 20 })}
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)}
              type="text" placeholder="Enter short description"
            />
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <ReactQuill as="textarea" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-1">Content can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>
  );

};


export default PostForm;