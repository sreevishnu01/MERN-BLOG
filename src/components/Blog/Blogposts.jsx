import { Container, Row, Col, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Layout/Sidebar/Sidebar";
import Test from "../Layout/Nav/Test";
import frameimg from '../../assets/707653.jpeg'
import { useGetAllBlogQuery } from '../../redux/blogApi';



function Blogposts() {

    const { data, error, isLoading } = useGetAllBlogQuery('/post')
    return (
        <Container className="pt-5 pb-5 mb-5">
            <Row className="mb-5">
                <Col lg={9}>
                    <div className="mb-4">
                        <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>Today's top highlights</h2>
                        <p>Latest breaking news, pictures, videos, and special reports</p>
                    </div>
                    {isLoading ? (
                        <><h1>Oh no, there was an error</h1></>
                    ) : error ? (
                        <>Loading...</>
                    ) : (
                        <Row xs={1} md={2} className="g-4">
                            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                            {/* limited number of loop iterms */}
                            {data.slice(0, 4).map((p) => (
                                <Col className="mt-5" key={p._id}>
                                    <Card className="border-light col-sm-12 card-shadow">
                                        <Card.Img variant="top" src={frameimg} className="card-ct" />
                                        <Card.Body>
                                            <Card.Title >
                                                <Card.Link href={`#/blog/${p._id}`} className="btn-link text-reset stretched-link" >{p.title}</Card.Link>
                                            </Card.Title>
                                            <footer className="mt-2 blockquote-footer">
                                                Author: <cite title="Source">{p.author.firstname} {p.author.lastname}</cite>
                                            </footer>
                                            <Card.Subtitle className="text-muted">{p.categories}</Card.Subtitle>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: p.description.length > 250 ? `${p.description.substring(0, 250)}...` : p.description }}>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                    {/* Learn more last section */}
                    <Row>
                        <Col className="col-12 text-center mt-5">
                            <Button href="#/blog" variant="primery" className="text-secondary">
                                Learn more</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Row>
            <Test />
        </Container>
    )
}

export default Blogposts
