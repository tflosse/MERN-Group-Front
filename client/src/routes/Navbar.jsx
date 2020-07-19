import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function NavBar () {

    return (
        <header> 
        <nav className="navbar fixed-top navbar-expand-sm navbar-light">
           <a class="navbar-brand" href="/"><img
        className="Logo"
        src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595024102/Untitled_2_tcxox8.jpg"
        alt="Ideate Logo"
      /></a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav navbar-light">
      <a className="nav-item nav-link active" > <span className="sr-only">(current)</span> 
        <Link to='/' className='navLink'>
        <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show"> DASHBOARD </div></Link></a>

        <a className="nav-item nav-link" >
            <Link to='/' className='navLink'>
        <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
             IDEAS 
             </div>
             </Link>
             </a>
             <a className="nav-item nav-link" >
                 <Link to='/' className='navLink'>
                 <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
                      INBOX 
                      </div>
                      </Link>
                      </a>
                      <a className="nav-item nav-link" >
                          <Link to='/' className='navLink'> 
                          <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
                              CREATE YOUR IDEA 
                              </div></Link>
                              </a>
            {/* <ul className='Navbar-personal'>
                <li><NavLink to='/' className='navLink2'> About </NavLink></li>
                <li><NavLink to='/' className='navLink2'> Settings </NavLink></li>
            </ul> */}
            </div>
        </div> 
        </nav>
        </header> 
    )
}

export default NavBar