import React from 'react'
import { BlogsContent } from './BlogsContent'
import BlogsCard from './BlogsCard';
import "./blogs.css";
import Transition from '../Tranistion/Transition';

function Blogs() {
    const blogList = BlogsContent.map(
        ({  id, url, title, author }) => {
          return (
            <BlogsCard
              key={id}
              id={id}
              url={url}
              title={title}
              author={author}
            //   description={description}
             
            />
          );
        }
      );
  return (
    <Transition>
    <div className='blogs'>
        <div className='blog_heading'>
            <h1>Case Studies</h1>
        </div>       
        <div className='blog_content'>
            {blogList}
        </div>     
    </div>
    </Transition>
  )
}

export default Blogs
