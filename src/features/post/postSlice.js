import {getPost} from './PostAPI';

const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

const initialState = {
    post: {},
    isLoading: null,
    isError: null,
    error: null
}


export const fetchPost = createAsyncThunk('post/fetchPost', async (id)=>{
    console.log("id",id)
    const post = await getPost(id);

    return post;
})

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state)=> {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.post = action.payload;
        })
        .addCase(fetchPost.rejected, (state,action)=>{
            state.isLoading = false;
            state.post = {};
            state.isError = true;
            state.error = action?.error?.message
        })
    }
})

export default postSlice.reducer;