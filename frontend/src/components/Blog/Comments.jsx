import { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import axios from '../../assets/axiosconfig'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

function Comments() {

    const user = useSelector(state => state.user.token)

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [postcomments, setPostComment] = useState({})

    const [rating, setRateing] = useState("")
    const [comment, setComment] = useState("")
    const [refresh, setRefresh] = useState(false)

    const handelComment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/comments', {
                rating: rating,
                comment: comment,
                postid: path
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            setRefresh(true)
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if (error.response.status === 401) {
                    localStorage.removeItem("token");
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                window.location = "/login";
            }

        };
        setRefresh(false)
        e.target.reset();
    }


    useEffect(() => {
        const getComment = async () => {
            const res = await axios("/comments/?postid=" + path);
            setPostComment(res.data);
        };
        getComment()
    }, [path, refresh]);



    return (
        <div>
            <Card className="border-light">
                <Card.Body>
                    <Card.Title>Comments</Card.Title>
                </Card.Body>


                {Object.keys(postcomments).map((keyName) => (
                    <Card className="border-light mb-2" key={postcomments[keyName]._id}>
                        <Card.Header>{postcomments[keyName].author.username}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {new Date(postcomments[keyName].updatedAt).toDateString()}
                                </footer>
                                <Card.Text>{postcomments[keyName].comment}</Card.Text>
                            </blockquote>
                        </Card.Body>
                    </Card>
                ))}
            </Card>
            <Card className="border-light">

                <Form className="border-light" onSubmit={handelComment}>
                    <Form.Group className="mt-5 mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={e => setRateing(e.target.value)}>
                            <option>Open this select menu</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select >
                        <Form.Control as="textarea" rows={3} onChange={e => setComment(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>




        </div>
    )
}

export default Comments