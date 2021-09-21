import React, { useEffect, useState } from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import SidebarHR from '../template/SidebarHR';
import SidebarUser from '../template/SidebarUser';
import api from '../../api/axios'
import { Spinner } from 'react-bootstrap';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ResetModal from './ResetModal';
// import { useFormState } from 'react-hook-form'

function ManageUser() {
  //const cvsuID = localStorage.getItem('cvsuID') || ''
  const [data, setData] = useState([]);
  let [update, setUpdate] = useState({});
  let [del, setDel] = useState({});
  let [rst, setRst] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDel, setShowDel] = useState(false);
  const [showEdt, setShowEdt] = useState(false);
  const [showRst, setShowRst] = useState(false);

  const search = (e) => {
    setSearchTerm(e.target.value);
  }
 

  const renderTable = () => {
    // eslint-disable-next-line array-callback-return
    return data.filter((user) => {
      if (searchTerm === "") {
        return user;
      } else if (user.userinfo_lname.toLowerCase().includes(searchTerm.toLowerCase())) {
        return user;
      }
    }).map(user => {
      return ( 
        <tr key = {user.cvsu_id}>
          <td>{user.userinfo_lname + ', ' + user.userinfo_fname}</td>
          <td>{user.userinfo_email}</td>
          <td>{user.userinfo_department}</td>
          <td>{user.userinfo_designation}</td>
          <td > 
            <button
              className="btn btn-light btn-sm"
              type="button"
              style={{ width: 40, height: 30 }}
              title="Edit"
              onClick={() => showEdit(user)}
            >
              <i className="fa fa-edit" title="Edit" />
            </button>
            <button
              className="btn btn-light btn-sm"
              type="button"
              style={{ width: 40, height: 30, marginLeft: 10 }}
              title="Delete"
              onClick={() => showDelete(user)}
            >
              <i className="fa fa-trash" title="Delete" />
            </button>
            <button
              className="btn btn-light btn-sm"
              type="button"
              style={{ width: 40, height: 30, marginLeft: 10 }}
              title="Reset Password"
              onClick={() => showReset(user)}
            >
              <i className="fa fa-user-lock" title="Reset Password" />
            </button>
          </td>
        </tr>
      )
    })
  }

  const handleClose = () => {
    setShowDel(false)
    setShowEdt(false)
    setShowRst(false)
  }
  
  const showEdit = (id) => {
    setUpdate(id)
    setShowEdt(true)
  }

  const showDelete = (id) => {
    setDel(id)
    setShowDel(true)
  }
  
  const showReset = (id) => {
    setRst(id)
    setShowRst(true)
  }

  const handleEdit = () => {
    //LOGIC
    alert("User update successfully");
    setShowEdt(false);
  }

  const handleDelete = () => {
    //LOGIC
    alert("User delete successfully");
    setShowDel(false);
  }

  const handleReset = () => {
    //LOGIC
    alert("Password reset successfully");
    setShowDel(false);
  }

  useEffect(() => {
    const retrieve = async () => {
      await api.get('')
      .then(response => {
        console.log('response : ', response.data)
        setData(response.data)
        if (data) {
          setLoading(true);
        }
        
      })
      .catch((err) => {
        console.log('error : ',err)
      })
    }
    retrieve()
  },[])

  return (
  <div id="wrapper">
    {
    localStorage.getItem("userType") === "0" ? 
    (<Sidebar/>) : (
      (localStorage.getItem("userType") === "1" ) ? 
      (<SidebarUser/>) 
    : (<SidebarHR/>)
    )
  }
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Navbar/>
        <div className="container-fluid" style={{ marginBottom: 20 }}>
    <div className="card" style={{ marginBottom: 10 }}>
      <div className="card-body" style={{ height: 46, background: "#a5d6a7" }}>
        <h4
          className="card-title"
          style={{ marginTop: "-10px", color: "rgb(15,15,16)" }}
        >
          Manage User
        </h4>
      </div>
    </div>
    
    <div className="card shadow">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 text-nowrap">
            <div
              id="dataTable_length"
              className="dataTables_length"
              aria-controls="dataTable"
            />
          </div>
          <div className="col-md-6">
            <div
              className="text-md-right dataTables_filter"
              id="dataTable_filter"
            >
              <label>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  aria-controls="dataTable"
                  placeholder="Search..."
                  onChange={search}
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className="table-responsive table mt-2"
          id="dataTable-1"
          role="grid"
          aria-describedby="dataTable_info"
        >
          
            { loading ? (
              <table className="table my-0" id="dataTable">
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {renderTable()}
            </tbody>
            <tfoot>
              <tr />
            </tfoot>
            </table>
              ) : (
              <div className="text-center overflow-hidden">
              <Spinner animation="border"/>
              </div>
              )}
        </div>
      </div>
    </div>
  </div>
  </div>
      <Footer/>
    </div>
    <EditModal show={showEdt} handleEdit={handleEdit} handleClose={handleClose} id={update}/>   
    <DeleteModal show={showDel} handleDelete={handleDelete} handleClose={handleClose} del={del}/>   
    <ResetModal show={showRst} handleReset={handleReset} handleClose={handleClose} res={rst}/>           
  </div>
      )
  }

export default ManageUser
