import React from 'react'

const MatchCard = (props) => {

    const {teamLogo, score} = props.match;
  return (
    <div className='flex-col items-center justify-center text-center rounded-lg'>
        <div className='flex py-2'>
            <img src={teamLogo} width="50px" className='px-2'/>
            <img src="https://assets.stickpng.com/images/584d8683367b6a13e54477d4.png" width="50px" className='px-2'></img>
        </div>
        <h1 className='text-white font-bold text-2xl'>
        {score}
        </h1>
    </div>
  )
}

export default MatchCard