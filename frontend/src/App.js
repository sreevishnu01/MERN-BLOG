import './index.scss'
import Mainrout from "./pages/Mainrout";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import userReducer from './redux/auth'
import blogReducer from './redux/blog'

const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
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
