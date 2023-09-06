import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PostDescription from '../PostDescription/PostDescription'
import Relatedposts from '../RelatedPosts/Relatedposts'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPost} from '../../features/post/postSlice';

export default function DescriptionPart() {

    const dispatch = useDispatch();
    const {post,isLoading,isError,error} = useSelector(state => state.post);
    let content = null;
    const {postId} = useParams();

    useEffect(()=>{
        dispatch(fetchPost(postId));
    },[dispatch,postId])


    if(isLoading) content = "Loading";

    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if(!isError && !isLoading && !post?.id){
        content = <div className="col-span-12">No videos found</div>
    }

    if(!isError && !isLoading && post?.id){
        content = post;
    }


    return (
        <>
        <div class="container mt-8">
                <NavLink to="/" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    class="mr-2 fa-solid fa-house"></i>Go Home</NavLink>
            </div>
            <section class="post-page-container">
                <PostDescription post={content}/>
                <Relatedposts />
            </section>
        </>
    )
}
