import React from 'react'
import './article.css'

const Article1 = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
       <div className='gpt3__blog-container_article-image'>
              <img src={imgUrl} alt=" blog " />
       </div>

       <div className='gpt3__blog-container_article-content'>
       <a href="https://chat.openai.com/share/0c0d40d6-7909-46db-bdb7-6421f32bf439" target='_blank'>
          <div>
              <p>{date}</p>
              <h3>{title}</h3>
          </div>
          
          <p> Read Full Article </p>
          </a>
       </div>

    </div>
  )
}

export default Article1