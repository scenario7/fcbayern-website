import React from 'react'
import NewsCard from './NewsCard'

const NewsSection = (props) => {

    const renderNewsArticles = props.articles.map((article) => {
        return (
            <NewsCard article={article}/>
        )
    })

  return (
    <div className='grid grid-cols-4 justify-between'>
        {renderNewsArticles}
    </div>
  )
}

export default NewsSection