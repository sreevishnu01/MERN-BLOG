import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: JSON.parse(localStorage.getItem("token")) || null,
    isFetching: false,
    error: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isFetching = false;
            state.error = false;
            localStorage.setItem('token', JSON.stringify(state.token))
        },
        loginFaild: (state, action) => {
            state.token = null;
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state, action) => {
            state.token = null;
            state.isFetching = false;
            state.error = false;
            localStorage.setItem('token', JSON.stringify(state.token));
        },
    }

})

export const { loginRequest, loginSuccess, loginFaild, logOut } = userSlice.actions;
export default userSlice.reducer;