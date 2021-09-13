import React from 'react'

function Navbar() {
    return (
    <nav
        className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
        style={{ boxShadow: "0px 4px 10px" }}
      >
        <div className="container-fluid">
          <button
            className="btn btn-link d-md-none rounded-circle mr-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
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
