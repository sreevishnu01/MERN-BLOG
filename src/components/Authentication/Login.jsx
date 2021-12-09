import axios from '../../assets/axiosconfig'
import { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFaild } from '../../redux/auth'


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginRequest());
        try {
            const res = await axios.post('/users/login', {
                username, password
            });
            dispatch(loginSuccess(res.data));

        } catch (error) {
            dispatch(loginFaild(error));
            console.log(error)
        }
    };

    return (
        <div>
            <div className="min-vh-100  ">
                <Container className="" >
                    <div className="form-signin  align-items-center justify-content-center d-flex">
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Log me in" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleLogin}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login
