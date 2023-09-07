import React from 'react'

const NewsCard = (props) => {

    const {title, tag, imgSource} = props.article;

  return (
    <div className='bg-slate-700 flex-col items-center justify-center'>
        <img src={imgSource} width={300}>
        </img>
        <div>
            <h1 className='text-white font-bold text-center'>
            {title}
            </h1>
        </div>
    </div>
  )
}

export default NewsCard