import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: JSON.parse(localStorage.getItem("blogposts")) || null,
    categorys: JSON.parse(localStorage.getItem("categorys")) || null,
    isFetching: false,
    error: false

}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        blogPostAll: (state, action) => {
            state.data = action.payload;
            localStorage.setItem('blogposts', JSON.stringify(state.data))
        },
        blogNewPost: (state, action) => {
            state.data = action.payload;
        },
        blogCategorys: (state, action) => {
            state.categorys = action.payload;
            localStorage.setItem('categorys', JSON.stringify(state.categorys))
        },
        blogDataClear: (state, action) => {
            state.data = null;
            state.categorys = null;
            state.error = false;
        }
    }
})

export const { blogPostAll, blogCategorys } = blogSlice.actions;
export default blogSlice.reducer;