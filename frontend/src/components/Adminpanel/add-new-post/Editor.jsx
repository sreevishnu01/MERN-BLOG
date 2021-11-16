import React from 'react'
import { Container, Form, Button, Card, Modal, Row, Col } from 'react-bootstrap'
import axios from '../../../assets/axiosconfig'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {

    const [smShow, setSmShow] = useState(false);
    const [title, setTitle] = useState("")
    const [label, setLabel] = useState("")
    const [categories, setcategories] = useState("")
    const [description, setDisc] = useState("")
    const [checked, setChecked] = useState(false)
    const user = useSelector(state => state.user.token);

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/post', {
                title: title,
                label: label,
                categorys: categories,
                description: description,
                fetured: checked
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            console.log(res)
            setSmShow(true)

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
        e.target.reset();
    }
    return (
        <Card className="card-shadow">
            <Card.Body>
                <Container>
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Success
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>

                    <Form onSubmit={handelSubmit}>
                        <Form.Group controlId="formBasicTitle ">
                            <Form.Control type="title" placeholder="Your Post Title" onChange={e => setTitle(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Row className="mb-3 mt-3">
                            <Form.Group as={Col} controlId="formBasicLabel">
                                <Form.Control placeholder="label" onChange={e => setLabel(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicategories">
                                <Form.Control placeholder="categories" onChange={e => setcategories(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicategories">
                                <Form.Check type="checkbox" checked={checked} label="Fetured" onChange={e => setChecked(e.target.checked)} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formBasicDiscription" className="mt-3">
                            <CKEditor editor={ClassicEditor}
                                onChange={(event, editor) =>
                                    setDisc(editor.getData())
                                } />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Publish
                        </Button>
                    </Form>


                </Container>
            </Card.Body>
        </Card>
    )
}

export default Editor
