import React from 'react'
import './Searchbox.css'
import search from './search.png'

function Searchbox({updateSearchInput}) {
  return (
      <div className="search">
        <div className='inner'>
        <img src={search} alt="icon" />
        <input type="text"onChange={updateSearchInput} placeholder='Search GitHub Username..' />
        </div>
    </div>
  )
}

export default Searchbox