import React from 'react'
import {Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const navbar = () => {


  return (
    <nav className="navbar navbar-dark navbar-expand-lg" role='navigation'>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className='nav navbar-brand'>Productivity</Link>
        </div>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav ml-auto">
            <li className="navbar-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/project" className="nav-link">
                  New Project
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar