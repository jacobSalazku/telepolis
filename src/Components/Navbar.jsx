import React  from "react";
import { Link }  from 'react-router-dom'

 const Navbar = () => {
  return (

      <div className="flex-row nav">
        <Link to="/">Home</Link>
        <Link to="/Coming-Soon">Coming Soon</Link>
        <Link to="/new-releases"> New Releases</Link>
      </div>
  );
}

export default Navbar;