import './index.scss'
import Mainrout from "./pages/Mainrout";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import userReducer from './redux/auth'
import blogReducer from './redux/blog'
import { blogsApi } from './redux/blogApi';

const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogsApi.middleware),
});

function App() {

  return (
    <>
      <Provider store={store}>
        <Mainrout />
      </Provider>
    </>
  );
}

export default App;
