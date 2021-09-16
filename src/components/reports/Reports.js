import React, { useEffect, useState} from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import api from '../../api/axios'

function Reports() {
const [data, setData] = useState([])

useEffect(() => {
  
  const retrieveall = async () => {
    const response = await api.get('attendance').catch((err) => {
      console.log('error: ', err)
    })
    if (response && response.data) {
      setData(response.data)
    }
  }
  
  retrieveall()
},[])

const renderTable = () => {
  return data.map(user => {
    return (
      <tr key = {user.id}>
        <td></td>
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
        Reports
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
              <th>Date</th>
              <th>Time in</th>
              <th>Time out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2021-09-07</td>
              <td>07:00 AM</td>
              <td>06:00 PM</td>
            </tr>
            
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
</div>
    )
}

export default Reports
