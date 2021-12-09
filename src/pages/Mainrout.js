import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar1 from "../components/Layout/Nav/Navbar";
import Home from "./Home";
import Post from "./Post";
import About from "./About";
import Tutorial from "./Tutorial";
import Signin from '../components/Authentication/Signin';
import Login from '../components/Authentication/Login';
import { useSelector } from 'react-redux';
import admin from '../components/Adminpanel/admin';
import BlogPostList from '../components/Blog/BlogPostList';

function Mainrout() {

    const user = useSelector(state => state.user.token)
    return (
        <>
            <Router>
                <NavBar1 />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/Tutorial" component={Tutorial} />
                    <Route path="/blog/" exact component={BlogPostList} />
                    <Route path="/blog/:id" exact component={Post} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/login">{user ? <Home /> : <Login />}</Route>
                    <Route path="/admin" component={admin} />

                </Switch>
            </Router>

        </>
    )
}

export default Mainrout
