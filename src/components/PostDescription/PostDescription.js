import React from 'react'



export default function PostDescription({post}) {

    const {title,description,image,tags} = post;


  return (
    <main class="post">
        <img src={image} alt="github" class="w-full rounded-md" id="lws-megaThumb" />
        <div>
        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
        </h1>
        <div class="tags" id="lws-singleTags">
            {tags?.map((item,index) => {
                    if(index === post?.tags?.length - 1){
                       return <span>#{item}</span>
                    }else{
                       return <span>#{item},</span>
                    }
                })}
        </div>
        <div class="btn-group">
            
            <button class="like-btn" id="lws-singleLinks">
            <i class="fa-regular fa-thumbs-up"></i> 100
            </button>
            <button class="active save-btn" id="lws-singleSavedBtn">
            <i class="fa-regular fa-bookmark"></i> Saved
            </button>
        </div>
        <div class="mt-6">
            <p>
            {description}
            </p>
        </div>
        </div>
    </main>
  )
}
