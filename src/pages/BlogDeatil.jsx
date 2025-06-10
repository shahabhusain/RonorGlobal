import React from 'react'
import Hero1 from '../components/Blog/Hero1'
import BlogDel from '../components/Blog/BlogDel'
import { useParams } from 'react-router-dom';
const BlogDeatil = () => {
  const {id} = useParams()
  return (
    <div className=' mt-20'>
        <Hero1 />
        <BlogDel id={id} />
    </div>
  )
}

export default BlogDeatil