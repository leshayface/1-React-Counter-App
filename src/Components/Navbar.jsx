import React from 'react';

const NavBar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-dark bg-dark" style={{marginBottom: '30px', justifyContent: "flex-start"}}>
          <a class="navbar-brand m-2" href="#">Navbar</a>
          <span className="badge badge-pill badge-secondary" style={{float: "left"}}>
              {totalCounters}
          </span>
        </nav>
     );
}
 
export default NavBar;