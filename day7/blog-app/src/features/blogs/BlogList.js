import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { deleteBlog } from "./BlogSlice";
import TimeAgo from "./TimeAgo";
import Card from "react-bootstrap/Card";
const BlogList = () => {
    const dispatch = useDispatch();
    const Blogs = useSelector((store) => store.Blogs);

    const handleRemoveBlog = (id) => {
        dispatch(deleteBlog({ id }));
    };

    const renderCard = () =>
        Blogs.map((Blog) => (
            <div key={Blog.id}>
                <Card
                    style={{ width: "15rem", margin: "2rem" }}
                    className="d-flex d-inline-block"
                >
                    <Card.Body>
                        <Card.Title>{Blog.title}</Card.Title>
                        <Card.Text>{Blog.content}</Card.Text>
                        <div className="alert alert-primary" role="alert">
                            <TimeAgo timestamp={Blog.date} />
                        </div>
                        <Button variant="info" className="mx-2">
                            <Link
                                to={`edit-Blog/${Blog.id}`}
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Edit
                            </Link>
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => handleRemoveBlog(Blog.id)}
                        >
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        ));

    return (
        <div className="blogs" style={{ display: "flex", flexWrap: "wrap" }}>
            {Blogs.length ? (
                renderCard()
            ) : (
                <Alert variant="danger">
                    <Alert.Heading>
                        Oh snap!You don 't have any blog!
                    </Alert.Heading>
                    <p>
                        You can easily add one, by clicking on the "Add Blog"
                        button on the top right.
                    </p>
                </Alert>
            )}
        </div>
    );
};

export default BlogList;
