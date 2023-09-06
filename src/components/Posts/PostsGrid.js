import React, { useEffect } from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from "../../features/posts/postsSlice"




export default function PostsGrid() {

    const dispatch = useDispatch();
    let {posts,isError,isLoading,error} = useSelector(state => state.posts);
    let content = null;
    let data = [...posts];
    
    useEffect(()=>{
        dispatch(fetchPosts());
    },[dispatch])

    if(isLoading) content = "Loading";

    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if(!isError && !isLoading && posts?.length === 0){
        content = <div className="col-span-12">No videos found</div>
    }
    // filter slice goes here
    const {sort,filter} = useSelector(state => state.filter);
    if(sort === 'newest'){
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }else if(sort === 'most_liked'){
        data.sort((a, b) => new Date(b.likes) - new Date(a.likes));
    }else{
        data = [...posts];
    }
    
    const filterByStatus = (post) => {
        switch(filter){
            case "all":
                return post;
            case "saved":
                return post.isSaved;
            default:
                return post;
        }
    }

   

    if(!isError && !isLoading && posts?.length > 0){
        content = data.filter(filterByStatus).map((post) => (
            <PostItem post={post} key={post.id}/>
        ))
    }




    return (
        <main class="post-container" id="lws-postContainer">
            {content}
        </main>
    )
}
