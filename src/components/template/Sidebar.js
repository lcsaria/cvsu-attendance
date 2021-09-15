import React from 'react'
import logo from '../../assets/school-logo-small.png'

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed' || true);
  const [isExpanded, setIsExpanded] = React.useState(sidebarCollapsed ? false : true);


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
        <i className="fas fa-bars sidebar-icon ml-1" onClick={handleToggler}/>
        <img className="sidebar-logo" src={logo} alt="logo" width="30%"/>
        <br className="line"/>
      </div>
      <a className="nav-link" href="/dashboard">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-home mr-2"/>
          <span className="sidebar-text">Home</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/profile"> 
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-user mr-1"/>
          <span className="sidebar-text">Profile</span>   
        </div>
      </div>
      </a>
      <a className="nav-link" href="/history">  
      <div className="sidebar-items">
        <div className="item">   
          <i className="fas fa-calendar mr-1"/>
          <span className="sidebar-text">History</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/add-user">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-user-plus mr-1"/>
          <span className="sidebar-text">Add User</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/manage-user">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-users mr-1"/>
          <span className="sidebar-text">Manage User</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/reports">  
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-table mr-1"/>
          <span className="sidebar-text">Report</span>
        </div>
      </div>
      </a>
      <a className="nav-link" href="/login"> 
      <div className="sidebar-items">
        <div className="item">
          <i className="fas fa-sign-out mr-1"/>
          <span className="sidebar-text">Log-out</span>
        </div>
      </div>
      </a>
    </div>
  );
}

export default Sidebar
