import React from 'react'

const Searchbar = () => {
    return (
    <>
     <div className='search flex-row'>
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
          <div className='search-button'>
          <button className="search-button flex-row">Search</button>
        </div>
      </div>
    </>

    
    );
  
  };

export default Searchbar;