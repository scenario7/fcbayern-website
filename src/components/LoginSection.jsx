import React from 'react'

const LoginSection = () => {
  return (
    <div className='flex-col text-white font-bold text-xs justify-between'>
        <div className='flex justify-end py-4'>
        <h1 className='px-2'>Contact</h1>
        <h1 className='px-2'>Allianz Arena</h1>
        <h1 className='px-2'>Help</h1>
        </div>
        <div className='flex justify-end'>
            <button className='bg-white hover:bg-red-700 hover:outline px-2 py-1 rounded-md'>
                <span className='text-red-700 hover:text-white font-medium'>Online Store</span>
            </button>
        </div>
    </div>
  )
}

export default LoginSection