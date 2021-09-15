import React from 'react'

function Navbar() {
    return (
    <nav
        className="navbar navbar-light navbar-expand bg-white shadow mb-5 topbar static-top"
        style={{ boxShadow: "0px 4px 5px",height: "5%"}}
      >
        <div className="container-fluid" >
          <ul className="navbar-nav ml-auto">
            <div className="d-none d-sm-block " />
            <li className="nav-item  no-arrow">
              <div className="nav-item  no-arrow">
                <a
                  className="btn-outline-light"
                  aria-expanded="false"
                  href="/login"
                >
                  <span className="d-none d-lg-inline mb-4 mr-2 text-gray-600 small">
                  <span className="fa fa-sign-out mr-2" aria-hidden="true"/>
                    Logout
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
