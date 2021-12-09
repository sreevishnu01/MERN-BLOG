import { Container, Row, Col, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import Comments from '../Blog/Comments';
import Sidebar from "../Layout/Sidebar/Sidebar";
import Test from "../Layout/Nav/Test";




function Blogpost({ post }) {


    return (
        <>
            <Test />
            <Container className="mb-5">
                <Row>
                    <Col lg={9}>

                        <Row>
                            <Col lg={12}>

                                <Card className="mb-5">
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text  >{post.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={12} className="mt-5">
                                <Comments />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Sidebar />
                    </Col>

                </Row>
            </Container>
            <footer />
        </>
    )
}


export default Blogpost
