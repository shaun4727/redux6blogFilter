import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PostItem({post}) {

    const {isSaved} = post;

    let button = null;
    if(isSaved === true){
        button = 'saved';
    }else{
        button = 'Save';
    }

  return (
    <div class="lws-card">
        <NavLink to={`/post/${post?.id}`}>
            <img src={post?.image} class="lws-card-image" alt="" />
        </NavLink>
        <div class="p-4">
            <div class="lws-card-header">
            <p class="lws-publishedDate">{post?.createdAt}</p>
            <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>{post?.likes}</p>
            </div>
            <NavLink to={`/post/${post?.id}`} class="lws-postTitle"> {post?.title} </NavLink>
            <div class="lws-tags">
                {post?.tags?.map((item,index) => {
                    if(index === post?.tags?.length - 1){
                       return <span>#{item}</span>
                    }else{
                       return <span>#{item},</span>
                    }
                })}
                 
            </div>

            <div class="flex gap-2 mt-4">
                <span class="lws-badge"> {button} </span>
            </div>

        </div>
    </div>
  )
}
