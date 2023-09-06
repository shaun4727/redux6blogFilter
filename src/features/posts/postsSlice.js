import {getPosts} from './postsAPI';

const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

const initialState = {
    posts: [],
    isLoading: null,
    isError: null,
    error: null
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts();

    return posts;
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state)=> {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.isLoading = false;
            state.posts = [];
            state.isError = true;
            state.error = action?.error?.message
        })
    }
})

export default postsSlice.reducer;