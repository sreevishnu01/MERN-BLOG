import React from 'react'
import { Col, Container, Row, Nav, Image } from 'react-bootstrap'
import {
    FaYoutube,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaFacebookF,
    FaHeadset,
    FaApple,
    FaGooglePlay
} from "react-icons/fa"

function Footer() {
    return (
        <Container fluid className="bg-color-gry ">
            <div className="pt-5 pb-5">
                <Container>
                    <Row className="footer">
                        <Col lg={3} className="f-col-1">
                            <Image src="/images/logo61.png" rounded />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            <div className="d-flex mt-4">
                                <div className="social-box me-2 position-relative"><FaYoutube size="1.5rem" className="position-absolute top-50 start-50 translate-middle social-bg" /></div>
                                <div className="social-box me-2 position-relative"><FaLinkedin size="1.5rem" className="position-absolute top-50 start-50 translate-middle social-bg" /></div>
                                <div className="social-box me-2 position-relative"><FaTwitter size="1.5rem" className="position-absolute top-50 start-50 translate-middle social-bg" /></div>
                                <div className="social-box me-2 position-relative"><FaFacebookF size="1.5rem" className="position-absolute top-50 start-50 translate-middle social-bg" /></div>
                                <div className="social-box me-2 position-relative"><FaInstagram size="1.5rem" className="position-absolute top-50 start-50 translate-middle social-bg" /></div>
                            </div>
                        </Col>
                        <Col className="f-col-2">
                            <h4>Quick Links</h4>
                            <Nav className="flex-column">
                                <Nav.Link href="/home">Products</Nav.Link>
                                <Nav.Link eventKey="link-1">Classifieds</Nav.Link>
                                <Nav.Link eventKey="link-2">Contact us</Nav.Link>
                                <Nav.Link eventKey="link-2">Login</Nav.Link>
                                <Nav.Link eventKey="link-2">Sign Up</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="f-col-3">
                            <h4>Customer area</h4>
                            <Nav className="flex-column">
                                <Nav.Link href="/home"> My Account</Nav.Link>
                                <Nav.Link eventKey="link-1">Orders</Nav.Link>
                                <Nav.Link eventKey="link-2">Tracking List</Nav.Link>
                                <Nav.Link eventKey="link-2">Terms</Nav.Link>
                                <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
                                <Nav.Link eventKey="link-2">Return policy</Nav.Link>
                                <Nav.Link eventKey="link-2"> My Cart</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="f-col-4">
                            <h4>Vendor area</h4>
                            <Nav className="flex-column">
                                <Nav.Link href="/home"> Partner with us</Nav.Link>
                                <Nav.Link eventKey="link-1">Training</Nav.Link>
                                <Nav.Link eventKey="link-2">Procedures</Nav.Link>
                                <Nav.Link eventKey="link-2">Terms</Nav.Link>
                                <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg={4} >
                            <div className="f-col-5">
                                <h4>contact</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <FaHeadset size="2.5rem" />
                                <div>
                                    <p>Have any question?</p>
                                    <p>+ 123 456 789</p>
                                </div>
                                <div className="chat-button position-relative">
                                    <p className="position-absolute top-50 start-50 translate-middle">Chat</p>
                                </div>

                            </div>
                            <div className="d-flex mt-5">
                                <div className="app-store me-1 text-white  d-flex justify-content-evenly">
                                    <FaApple className="app-store-icon store-apple" />
                                    <div>
                                        <p>Download on the</p>
                                        <h6>App Store</h6>
                                    </div>

                                </div>
                                <div className="app-store me-1 text-white d-flex justify-content-evenly">
                                    <FaGooglePlay className="app-store-icon store-apple" />
                                    <div>
                                        <p>GET IT ON</p>
                                        <h6>Google Play</h6>
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}

export default Footer
