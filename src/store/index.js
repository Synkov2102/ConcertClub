import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from './profilesSlice';
import postsSlice from "./postsSlice";

export default configureStore({
    reducer: {
        profiles: profilesReducer,
        posts: postsSlice
    }
});