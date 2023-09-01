import React from 'react'
import useSearch from '../hook/useSearch'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const { searchValue, searchByValue, handleChangeSearch, handleChangeSearchBy } = useSearch({navigate})

  return (
    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center'>
      <div className='flex bg-white rounded-2xl md:w-1/2 h-12 px-5'>
        <input
          value={searchValue}
          className='bg-transparent border-0 focus:outline-none border-r border-gray-200 w-[70%] text-sm'
          onChange={(e) => handleChangeSearch(e)}
        />
        <select value={searchByValue} className='bg-transparent border-0 outline-none w-[30%] pl-5' onChange={(e) => handleChangeSearchBy(e)}>
          <option value="">All</option>
          <option value="status">Status</option>
          <option value="type">Type</option>
          <option value="capsule_id">Capsule id</option>
        </select>
      </div>
    </div>
  )
}

export default Search