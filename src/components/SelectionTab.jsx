import React from 'react'

const SelectionTab = () => {
  return (
    <div className='flex space-x-4 font-semibold'>
        <button className='bg-red-600 px-2 py-1 rounded-lg text-white'>
            All
        </button>
        <button className='bg-slate-600 hover:bg-red-600 px-2 py-1 rounded-lg text-white'>
            News
        </button>
        <button className='bg-slate-600 hover:bg-red-600 px-2 py-1 rounded-lg text-white'>
            Club
        </button>
        <button className='bg-slate-600 hover:bg-red-600 px-2 py-1 rounded-lg text-white'>
            Bundesliga
        </button>
        <button className='bg-slate-600 hover:bg-red-600 px-2 py-1 rounded-lg text-white'>
            Champions League
        </button>
    </div>
  )
}

export default SelectionTab