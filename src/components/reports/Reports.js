import React, { useEffect, useState} from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import api from '../../api/axios'
import SidebarUser from '../template/SidebarUser'
import SidebarHR from '../template/SidebarHR'
import ReactDatePicker from 'react-datepicker'
import dateFormat from "dateformat";

const gen = [
    { label: "Name", value: "Name" },
    { label: "Date", value: "Date" }
]
function Reports() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isDate, setIsDate] = useState(false);
    const [startDate, setStartDate] = useState("");
    
    const convertDate = dateFormat(startDate, "yyyy-mm-dd")

    const handleDate = (date) => {
      setStartDate(date);
    };

    const search = (e) => {
      setSearchTerm(e.target.value)
    }

    const handle = (e) => {
      if (e.target.value === "Name") {
        setIsDate(false)
      } else {
        setIsDate(true)
      }
      console.log(e.target.value)
    }
    const renderTable = () => {
      // eslint-disable-next-line array-callback-return
      return data.filter((user) => {
        if (!isDate){
          if (searchTerm === "") {
            return user;
          } else if (user.name.toLowerCase().includes(searchTerm)){
            return user;
          }
        } else {
          if (startDate === ""){
            return user;
          } else if (user.date.includes(convertDate)){
            return user;
          }
        }
      }).map(user => {
        return (
            <tr key = {user.id}>
            <td>{user.name}</td>
            <td>{user.date}</td>
            <td>{user.timein}</td>
            <td>{user.timeout}</td>
          </tr>
        )
      })
    }

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
                      className="text-md-right dataTables_filter justify-content-start"
                      id="dataTable_filter"
                    >
                      <label>
                      <div className="dropdown">
                        <select className="form-control form-control-sm" id="isDate" onChange={(e) => handle(e)}> 
                          {gen.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
                        </select>
                        </div>
                        </label>
                      <label>
                       {
                         (isDate) ? 
                          <>
                          <ReactDatePicker
                              selected={startDate}
                              onChange={(date) => handleDate(date)}
                              dateFormat="yyyy-MM-dd"
                              className="form-control form-control-sm text-black icon-input-left"
                              closeOnScroll={true}
                            />
                          <span className="date-picker-icon">
                            <i class="fas fa-calendar"/>
                          </span>
                        </>
                         :
                         <input
                         type="search"
                         className="form-control form-control-sm"
                         aria-controls="dataTable"
                         placeholder="Search"
                         onChange={search}
                       />
                       }
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

    export default Reports
