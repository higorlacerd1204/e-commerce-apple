import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './pages/produtos/components/buttons/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
