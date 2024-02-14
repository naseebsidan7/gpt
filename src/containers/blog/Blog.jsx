import React from 'react'
import './blog.css'
import { Article1 } from '../../components'
import  { blog01, blog02, blog03, blog04, blog05 } from './blogImport'

const date = 'Sep 26, 2023' 
const title = 'GPT-3 and Open  AI is the future. Let us explore how it is?'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      
      <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'> A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
           <div className='gpt3__blog-container-groupA'>
                <Article1 imgUrl={blog01}  title={title} date={date} />
           </div>
           <div className='gpt3__blog-container-groupB'>
                <Article1 imgUrl={blog02}  title={title} date={date} />
                <Article1 imgUrl={blog03}  title={title} date={date} />
                <Article1 imgUrl={blog04}  title={title} date={date} />
                <Article1 imgUrl={blog05}  title={title} date={date} />
           </div>
      </div>

    </div>
  )
}

export default Blog