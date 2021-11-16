import React from 'react'
import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import BlogNewpost from './add-new-post/BlogNewpost'
import { useSelector } from 'react-redux';
import Login from '../Authentication/Login';



function Admin() {
    const user = useSelector(state => state.user.token)
    return (
        <div>
            {user ? (
                <Container fluid>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col md={3} lg={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Add Ner Post</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Blog Posts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <BlogNewpost />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {/* <Sonnet /> */}
                                    </Tab.Pane>
                                </Tab.Content>

                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            ) : (
                <Login />
            )}

        </div>
    )
}

export default Admin




