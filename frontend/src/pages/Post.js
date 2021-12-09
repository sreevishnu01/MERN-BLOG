import axios from '../assets/axiosconfig';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Blogpost from '../components/Blog/BlogPost';
import { useGetBlogByIdQuery } from '../redux/blogApi'




function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { data, isLoading, error } = useGetBlogByIdQuery(`post/${path}`)

    // useEffect(() => {
    //     const getPost = async () => {
    //         const res = await axios("/post/" + path);
    //         console.log(res.data)
    //         setPost(res.data);

    //     }
    //     getPost()
    // }, [path]);
    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : (
                <Blogpost post={data} />
            )}
        </>
    )
}

export default Post
