import React from 'react'
import logo from '../../assets/school-logo.png'


function Sidebar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClickButton = () => {
      if (isOpen){
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    const toggled = (isOpen ? "toggled" : " ");

    
    return (
        <nav
        className={`navbar navbar-dark align-items-start sidebar ${toggled} sidebar-dark accordion bg-gradient-primary p-0`}
        style={{ background: "#a5d6a7"}}
        >
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand"
            href="/dashboard"
            style={{ width: 90}}
          >
            <div className="ml-1">
              <img
                alt="cvsu"
                src={logo}
                width="100px"
              />
            </div>
            <div className="sidebar-brand-text">
              <span style={{ color: "rgb(0,0,0)", position:"relative", right:"15px"}}>CvSu - Generals</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/dashboard"
                style={{ fontSize: "20.6px" }}
              >
                <i
                  className="fa fa-home"
                  style={{ fontSize: "20.6px", color: "rgb(0,0,0,0.3)" }}
                />
                <span style={{ color: "rgb(0,0,0)" }}>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i
                  className="fas fa-user"
                  style={{ color: "rgba(0,0,0,0.3)", fontSize: "20.6px" }}
                />
                <span style={{ color: "rgba(0,0,0,0.8)", fontSize: "20.6px" }}>
                  Profile
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">
                <i
                  className="fa fa-calendar"
                  style={{ color: "rgba(0,0,0,0.3)", fontSize: "20.6px" }}
                />
                <span style={{ color: "rgba(0,0,0,0.8)", fontSize: "20.6px" }}>
                  History
                </span>
              </a>
            </li>
            <li className="nav-item" />
            <li className="nav-item">
              <a
                className="nav-link"
                href="/add-user"
                style={{ fontSize: "20.6px" }}
              >
                <i
                  className="fa fa-user-plus"
                  style={{ color: "rgba(0,0,0,0.3)", fontSize: "20.6px" }}
                />
                <span style={{ color: "rgba(0,0,0,0.8)" }}>Add User</span>
              </a>
              <a
                className="nav-link"
                href="/manage-user"
                style={{ fontSize: "20.6px" }}
              >
                <i
                  className="fa fa-users"
                  style={{ color: "rgba(0,0,0,0.3)", fontSize: "20.6px" }}
                />
                <span style={{ color: "rgba(0,0,0,0.8)" }}>Manage User</span>
              </a>
              <a
                className="nav-link"
                href="/reports"
                style={{ fontSize: "20.6px" }}
              >
                <i
                  className="fa fa-table"
                  style={{ color: "rgba(0,0,0,0.3)", fontSize: "20.6px" }}
                />
                <span style={{ color: "rgba(0,0,0,0.8)" }}>Reports</span>
              </a>
            </li>
          </ul>
          <div className="text-center">
            <button
              className="btn rounded-circle"
              type="button"
              onClick={onClickButton}
            >
                
              {
                isOpen ? 
                <i className="fas fa-chevron-left"/>
                :
                <i className="fas fa-chevron-right"/>
              }
              
              
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Sidebar
