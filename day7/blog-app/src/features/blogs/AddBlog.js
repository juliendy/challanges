import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addBlog } from "./BlogSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: "",
        content: "",
    });

    const handleAddBlog = () => {
        setValues({ title: "", content: "" });
        dispatch(
            addBlog({
                id: uuidv4(),
                title: values.title,
                content: values.content,
                date: new Date().toISOString(),
            })
        );
        navigate("/");
    };

    return (
        <Card className="m-auto w-50">
            <Card.Header>Add a Blog</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title goes here"
                            value={values.title}
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    title: e.target.value,
                                })
                            }
                            inputProps={{
                                type: "text",
                                placeholder: "Programmers Day",
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
                <Button onClick={handleAddBlog}>Submit</Button>
            </Card.Body>
        </Card>
    );
};

export default AddBlog;
