import { Nav, Navbar, NavDropdown, Container, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { logOut } from '../../../redux/auth';
import pic from '../../../assets/707653.jpeg'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.token)
    const handellogout = () => {
        dispatch(logOut());
    }
    return (


        <Navbar bg="light" expand="lg">
            <Container className="border-bottom py-3">
                <Navbar.Brand href="/">SleepingWoods</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav onSelect className="mx-auto">
                        <Nav.Link href="#/Tutorial">Tutorial</Nav.Link>
                        <Nav.Link href="#link">Make Money</Nav.Link>
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Lifestyle</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link >
                    </Nav>
                    {user ? (
                        <Nav>
                            <Navbar.Brand to="#/admin"><Image
                                src={pic}
                                width="40"
                                height="40"
                                alt="logo" roundedCircle
                            /></Navbar.Brand>
                            <NavDropdown title={user.username} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login" onClick={(handellogout)}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    ) : (
                        <div className="col-md-3 text-end">
                            <Button href="/login" variant='outline-primary' className="me-2">Login</Button>
                            <Button href="/signin">Sign up</Button>
                        </div>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default Navbar1


