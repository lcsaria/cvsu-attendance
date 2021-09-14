import React from 'react'


function Sidebar() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
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
        <i className="fas fa-bars sidebar-icon" onClick={handleToggler}/>
        <h2 className="sidebar-logo ml-2">CvSU-Gentri</h2>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/dashboard">  
          <i className="fas fa-home mr-1"/>
              <span className="sidebar-text">Home</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/profile">  
          <i className="fas fa-user mr-1"/>
              <span className="sidebar-text">Profile</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/history">  
          <i className="fas fa-calendar mr-1"/>
              <span className="sidebar-text">History</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/add-user">  
          <i className="fas fa-user-plus mr-1"/>
              <span className="sidebar-text">Add User</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/manage-user">  
          <i className="fas fa-users mr-1"/>
              <span className="sidebar-text">Manage User</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/reports">  
          <i className="fas fa-table mr-1"/>
              <span className="sidebar-text">Report</span>
            </a>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="item">
        <a className="nav-link" href="/dashboard">  
          <i className="fas fa-sign-out mr-1"/>
              <span className="sidebar-text">Log-out</span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
