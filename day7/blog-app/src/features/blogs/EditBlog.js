import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { editBlog } from "./BlogSlice";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const EditBlog = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const Blogs = useSelector((store) => store.Blogs);
    const navigate = useNavigate();
    const existingBlog = Blogs.filter((Blog) => Blog.id === params.id);
    const { title, content } = existingBlog[0];
    const [values, setValues] = useState({
        title,
        content,
    });

    const handleEditBlog = () => {
        setValues({ title: "", content: "" });
        dispatch(
            editBlog({
                id: params.id,
                title: values.title,
                content: values.content,
            })
        );
        navigate("/");
    };

    return (
        <div classtitle="mt-10 max-w-xl mx-auto">
            <Card className="m-auto w-50">
                <Card.Header>Update a Blog</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={values.title}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        title: e.target.value,
                                    })
                                }
                                inputProps={{
                                    type: "text",
                                }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={values.content}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="warning" onClick={handleEditBlog}>
                        Update Blog
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EditBlog;
