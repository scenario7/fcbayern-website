import React from 'react'
import LoginSection from './LoginSection'

const Header = () => {
  return (
    <header className='px-8 py-3 bg-red-700 flex justify-between'>
      <div className='flex items-center'>
      <div className=''>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png' width="60px" className='flex items-center justify-center'></img>
      </div>
      <h2 className='text-xl font-bold text-white px-3'>FC Bayern München</h2>
      </div>
      <LoginSection></LoginSection>
    </header>
  )
}

export default Header