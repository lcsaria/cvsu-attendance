/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../assets/school-logo-small.png'
import { useHistory } from 'react-router-dom';

function SidebarHR() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed' || true);
  const [isExpanded, setIsExpanded] = React.useState(sidebarCollapsed ? false : true);
  const history = useHistory();


  const logOut = () => {
    alert("Thank you!");
    localStorage.clear();
    history.push("/login");
  }

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  }
  
  return(
    <div 
      className={isExpanded ? "Sidebar sidebar-text" : "Sidebar sidebar-text collapsed"}>
      <div className="sidebar-header">
        <i className="fas fa-bars sidebar-icon mt-2 ml-1" onClick={handleToggler}/>
        <img className="sidebar-logo" src={logo} alt="logo" width="25%"/>
        <br className="line"/>
      </div>
      <a className="nav-link" href="/dashboard">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-home mr-4"/>
          <span className="sidebar-text">Home</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/profile"> 
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-user mr-4"/>
          <span className="sidebar-text">Profile</span>   
        </div>
      </div>
      </a>
      <a className="nav-link" href="/history">  
      <div className="sidebar-items">
        <div className="item">   
          <i className="fas fa-calendar mr-4"/>
          <span className="sidebar-text">History</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/reports">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-table mr-4"/>
          <span className="sidebar-text">Report</span>
        </div>
      </div>
      </a>
      <a className="nav-link" onClick={logOut}> 
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-sign-out mr-4"/>
          <span className="sidebar-text">Log-out</span>
        </div>
      </div>
      </a>
    </div>
  );
}

export default SidebarHR
