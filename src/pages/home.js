import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import PostsGrid from '../components/Posts/PostsGrid'

export default function home() {
  return (
    <>
        <section class="wrapper">
            <Sidebar />
            <PostsGrid />
        </section>
    </>
  )
}
