import axios from '../assets/axiosconfig';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Blogpost from '../components/Blog/BlogPost';





function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/post/" + path);
            console.log(res.data)
            setPost(res.data);

        }
        getPost()
    }, [path]);
    return (
        <>
            <Blogpost post={post} />
        </>
    )
}

export default Post
