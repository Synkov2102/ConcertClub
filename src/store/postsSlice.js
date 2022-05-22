import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        currentPost: {},
        currentComments:[]
    },
    reducers: {
        addPosts(state, action) {
            state.posts = action.payload.posts
        },
        addPost(state, action) {
            state.currentPost = action.payload.currentPost
        },
        addComments(state, action) {
            state.currentComments = action.payload.currentComments
        }
    },
})

export const {addPosts, addPost, addComments} = postsSlice.actions;

export default postsSlice.reducer;

