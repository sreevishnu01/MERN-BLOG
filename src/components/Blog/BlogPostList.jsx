import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import frameimg from '../../assets/707653.jpeg'
import Sidebar from '../Layout/Sidebar/Sidebar'

const randomImg = {
    imagel: 'https://picsum.photos/1000/750',
    images: 'https://picsum.photos/100',

}

function BlogPostList() {
    const blog = useSelector(state => state.blog.data)
    console.log(blog)
    return (

        <>
            <Container>
                <Row className="mt-5">
                    <Col md={9} sm={12}>
                        {blog.map(p => (
                            <Card className="border-light card-shadow mb-4">
                                <Row >

                                    <Col lg={4} md={4}>
                                        <Card className="border-light">
                                            <Card.Img src={randomImg.imagel} />
                                        </Card>

                                    </Col>
                                    <Col>
                                        <Card className="border-light">
                                            <Card.Body>
                                                <Card.Title >
                                                    <Card.Link href={`/blog/${p._id}`} className="btn-link text-reset stretched-link" >{p.title}</Card.Link>
                                                </Card.Title>
                                                <Card.Subtitle className="text-muted">{p.author.firstname} {p.author.lastname}</Card.Subtitle>
                                                <Card.Text>
                                                    {p.description.length > 250 ? `${p.description.substring(0, 250)}...` : p.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                </Row>
                            </Card>
                        ))}



                    </Col>
                    <Col>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default BlogPostList
