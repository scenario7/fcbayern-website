import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-red-800 px-8 py-3 text-white font-bold justify-start'> 
        <button className='px-3 hover:underline'>
            News
        </button>
        <button className='px-3 hover:underline'>
            FC Bayern TV
        </button>
        <button className='px-3 hover:underline'>
            Matches
        </button>
        <button className='px-3 hover:underline'>
            Teams
        </button>
        <button className='px-3 hover:underline'>
            Club
        </button>
        <button className='px-3 hover:underline'>
            Fans
        </button>
        <button className='px-3 hover:underline'>
            Tickets
        </button>
        <button className='px-3 hover:underline'>
            Museum
        </button>
        <button className='px-3'>
            <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' width="15px"></img>
        </button>
    </div>
  )
}

export default NavBar