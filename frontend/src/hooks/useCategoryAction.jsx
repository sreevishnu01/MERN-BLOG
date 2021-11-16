import axios from '../assets/axiosconfig';
import { useDispatch, useSelector } from 'react-redux';
import { blogCategorys } from '../redux/blog';


const CategoryAction = (name, id) => {

    const user = useSelector(state => state.user.token)

    const dispatch = useDispatch();
    // axios post categories
    const getCategory = async () => {
        const res = await axios.get('/categorys');
        dispatch(blogCategorys(res.data));
        return
    }
    const postCategorys = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/categorys', {
                title: name,
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            })
            getCategory()
        } catch (error) {
            console.log(error)
        }
    }
    const deleteCategory = async () => {
        try {
            const res = await axios.delete('/categorys/' + id,
                {
                    headers: { Authorization: `Bearer ${user.token}` }
                })
            getCategory()
        } catch (error) {
            console.log(error)
        }
    }
    // blog posts
    const getPost = async () => {
        const res = await axios("/post/?category=" + id);

    };


    return { getCategory, postCategorys, deleteCategory }
}
export default CategoryAction
