import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Search-bar'

const Header = () => {
  return (
    <div className='flex-row header'>
        <Navbar/>
        <Searchbar/>
    </div>
  )
}

export default Header
