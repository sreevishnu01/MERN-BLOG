import { useLocation } from 'react-router'
import Blogpost from '../components/Blog/BlogPost';
import { useGetBlogByIdQuery } from '../redux/blogApi'




function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const { data, isLoading, error } = useGetBlogByIdQuery(`post/${path}`)

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
