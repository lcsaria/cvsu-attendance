import React, { useEffect, useState } from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import Top from '../template/Top'
import api from '../../api/axios'
import * as ReactBootstrap from 'react-bootstrap';
// import { useFormState } from 'react-hook-form'

function ManageUser() {
  //const cvsuID = localStorage.getItem('cvsuID') || ''
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieve = async () => {
      await api.get('')
      .then(response => {
        console.log('response : ', response.data)
        setData(response.data)
        setLoading(true);
      })
      .catch((err) => {
        console.log('error : ',err)
      })
    }
    retrieve()
  },[])

  const renderTable = () => {
    return data.map(user => {
      return ( 
        <tr key = {user.cvsu_id}>
          <td>{user.userinfo_lname + ', ' + user.userinfo_fname}</td>
          <td>{user.userinfo_email}</td>
          <td>{user.userinfo_department}</td>
          <td>{user.userinfo_designation}</td>
          <td>
            <button
              className="btn btn-light btn-sm"
              type="button"
              style={{ width: 40, height: 30 }}
              title="Edit"
            >
              <i className="fa fa-edit" title="Edit" />
            </button>
            <button
              className="btn btn-light btn-sm"
              type="button"
              style={{ width: 40, height: 30, marginLeft: 10 }}
              title="Delete"
            >
              <i className="fa fa-trash" title="Delete" />
            </button>
          </td>
        </tr>
      )
    })
  }



  return (
  <div id="wrapper">
    <Sidebar/>
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
                  placeholder="Search"
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
            {loading ? (
              renderTable()
              ) : (
              <ReactBootstrap.Spinner animation="border"/>
              )}
            </tbody>
            <tfoot>
              <tr />
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
      <Footer/>
    </div>
    <Top/>
  </div>
      )
  }

export default ManageUser
