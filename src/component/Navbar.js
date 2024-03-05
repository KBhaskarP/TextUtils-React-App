import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  


  return (

      <nav className={`navbar navbar-${props.currMode} bg-${props.currMode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About {props.title}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.setMode}/>
                <label className={`form-check-label text-${props.currMode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.currMode==='light'?'dark':'light'} mode</label>
              </div>
              
            </ul>
           
          </div>
          
        </div>
      </nav>
    
  )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired
}

Navbar.defaultProps={
  title:'Sample Title'
}
