import React from 'react'
import MatchCard from './MatchCard'

const MatchesRow = (props) => {

    const renderMatches = props.matches.map((match) => {
        return(
        <MatchCard match={match}></MatchCard>
        )
    })

  return (
    <div className='flex bg-slate-800 px-5 py-10 justify-between overflow-auto'>
        {renderMatches}
    </div>
  )
}

export default MatchesRow