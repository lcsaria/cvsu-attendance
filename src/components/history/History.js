import React, { useEffect, useState } from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import SidebarHR from '../template/SidebarHR';
import SidebarUser from '../template/SidebarUser';
import api from '../../api/axios'
import ReactDatePicker from 'react-datepicker';
import dateFormat from "dateformat";

function History() {
    const [data, setData] = useState([])
    const cvsuID = localStorage.getItem('cvsuID') || ''
    const [startDate, setStartDate] = useState("");
    
    const convertDate = dateFormat(startDate, "yyyy-mm-dd")

    const handleDate = (date) => {
      setStartDate(date);
    };
    
    const renderTable = () => {
      // eslint-disable-next-line array-callback-return
      return data.filter((user) => {
        if (!startDate) {
          return user
        } else if (user.date.includes(convertDate)) {
          return user
        }
      }).map(user => {
        return ( 
          <tr key = {user.id}>
            <td>{user.date}</td>
            <td>{user.timein}</td>
            <td>{user.timeout}</td>
          </tr>
        )
      })
    }
    
    useEffect(() => {
      const load = async () => {
        await api.get(`attendance/getuser/${cvsuID}`)
        .then(response => {
          console.log(response.data)
          setData(response.data)
        }) 
        .catch((err) => {
          console.log('error : ', err)
        })
      }
      load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            style={{ position: "sticky", marginTop: "-10px", color: "rgb(15,15,16)" }}
          >
            Attendance History
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
                <label className="float-right">
                <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => handleDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="form-control form-control-sm text-black bg-black icon-input-left change-icon"
                    closeOnScroll={true}
                    
                  />
                <span className="date-picker-icon">
                  <i class="fas fa-calendar"/>
                </span>
                </label>
              </div>
            </div>
          </div>
          <div
            className="table-responsive table mt-2"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time in</th>
                  <th>Time out</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
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
    
    export default History
    