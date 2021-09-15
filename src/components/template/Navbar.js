import React from 'react'

function Navbar() {
    return (
    <nav
        className="navbar navbar-light navbar-expand bg-white shadow mb-5 topbar static-top"
        style={{ boxShadow: "0px 4px 5px", height: "5%"}}
      >
        <div className="container" >
          <ul className="navbar-nav flex-nowrap ml-auto">
            <div className="d-none d-sm-block topbar-divider" />
            <li className="nav-item dropdown no-arrow">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="nav-link"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  href="/login"
                >
                  <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                    Logout
                    <span className="fa fa-sign-out ml-3" aria-hidden="true"/>
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
