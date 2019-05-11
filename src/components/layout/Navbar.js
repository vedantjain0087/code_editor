import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-ct-danger"role="navigation-demo" id="demo-navbar">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#"><img className="nav-logo"src="img/IOSD-logo.png"/></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
          </div>{/* /.container-fluid */}
        </nav>
      </div>
     
  )
}

export default Navbar
