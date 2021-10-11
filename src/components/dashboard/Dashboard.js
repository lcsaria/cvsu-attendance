import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import api from '../../api/axios'
import SidebarHR from '../template/SidebarHR';
import SidebarUser from '../template/SidebarUser';

var timecheck = false
function Dashboard() {
  var today = new Date()
  const cvsuID = localStorage.getItem('cvsuID') || ''
  const [userData, setUserData] = useState("")
  const [timetxt, setTimetxt] = useState("")
  const [datetoday, setDatetoday] = useState("")
  const [timeintxt, setTimeintxt] = useState('TIME IN')
  const [attendance, setAttendance] = useState([])
  const [loading, setLoading] = useState(false)
  
  // get time text
  const getTime = () => {
    var time = today.getHours()
    if (time >= 0 && time <= 11) setTimetxt("Morning, ")
    else if (time >= 12 && time <= 18) setTimetxt("Afternoon, ")
    else if (time >= 19 && time <= 23) setTimetxt("Evening, ")
    setDatetoday(today.toDateString())
  }

  // get date today.
  const getnow = () => {
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
  }

  const getUserTime = async () => {
    const response = await api.get(`attendance/${cvsuID}`).catch((err) => {
      console.log('error : ', err)
    })
    if( response && response.data) {
      if (!response.data[0].timeout){
        setTimeintxt("TIME OUT")
        timecheck = true
      }
      else{
        setTimeintxt("TIME IN")
        timecheck = false
      }
    }
  }

  // react hooks for preload data.
  useEffect(() => {
    console.log(localStorage.getItem("userType"))
    
    const retrieveall = async () => {
      var response = await api.get(`all/${cvsuID}`).catch((err) => {
        console.log('error : ', err)
      }) 
      if (response && response.data)
      {
        setUserData(response.data)
      }
    }
    console.log(userData);
    const retrieveuserattendance = async () => {
      var response = await api.get(`attendance/getuser/${cvsuID}`).catch((err) => {
        console.log('error : ', err)
      })
      if (response && response.data)
        setAttendance(response.data)
    }
    // get time
    retrieveall()
    retrieveuserattendance()
    getUserTime()
    getTime()
    getnow()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  // time in or out 
  const timeInorOut = async () => {
    let fullname = userData.userinfo_fname + " " + userData.userinfo_lname;
    if (!timecheck) {
      console.log("TIME IN!", timecheck)
      setLoading(true)
      await api.post(`attendance/${cvsuID}/${fullname}`)
      .then(response => {
        timecheck = true
        setTimeintxt("TIME OUT")
        alert("Time in success!")
        getUserTime()
        setLoading(false)
        window.location.reload(false) // reload
      })
      .catch((err) => {
        alert(err.response.data)
        setLoading(false)
      })
      return
    }
    if (timecheck){
      setLoading(true)
      await api.put(`attendance/${cvsuID}`)
      .then(response => {
        setTimeintxt("TIME IN")
        timecheck = false
        alert("Time out success!")
        getUserTime()
        setLoading(false)
        window.location.reload(false) // reload
      })
      .catch((err) => {
        alert(err.response.data)
        setLoading(false)
      })
      
      console.log("TIME OUT!", timecheck)
      return
    }
  }

  const renderTable = () => {
    return attendance.map(user => {
      return ( 
        <tr key = {user.id}>
          <td>{user.date}</td>
          <td>{user.timein}</td>
          <td>{user.timeout}</td>
        </tr>
      )
    })
  }


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
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-between align-items-center mb-4" />
      </div>
      <div className="container">
        <div
          className="card"
          style={{
            marginBottom: 20,
            paddingBottom: 0,
            boxShadow: "-3px 4px 10px"
          }}
        >
          <div className="card-body">
            <h3>Good {timetxt || 'Day,'} {userData? userData.userinfo_fname + ' ' + userData.userinfo_lname + ' !' : 'User!'}</h3>
            <hr />
            <h4>{datetoday || 'Now'}</h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                marginBottom: 17,
                height: 149,
                boxShadow: "-3px 4px 10px"
              }}
            >
              <div
                className="card-body"
                style={{ height: 149, boxShadow: "0px 0px" }}
              >
                <button
                  className="btn btn-block btn-lg text-center"
                  type="button"
                  style={{
                    textAlign: "left",
                    height: 108,
                    background: "#75a478",
                    color: "rgb(255,255,255)",
                    fontSize: 40
                  }}
                  disabled={loading}
                  onClick={timeInorOut}
                >
                  {loading ? (
                          <div>
                            <span>
                            <ReactBootstrap.Spinner animation="grow" className="spinner-border spinner-border-xl mb-3 mr-3"/>
                            </span>
                            <span>{timeintxt}</span>
                          </div>
                          ) : (
                          <span>{timeintxt}</span>
                        )
                        }
                  
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "-3px 4px 10px" }}>
              <div className="card-body" style={{ boxShadow: "0px 0px" }}>
                <h3>Time in : {userData ? userData.timein : '--:--'}</h3>
                <hr />
                <h3>Time out : {userData ? userData.timeout : '--:--'}</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            marginBottom: 20,
            paddingBottom: 0,
            boxShadow: "-3px 4px 10px"
          }}
        >
          <div className="card-body">
            <h1>Attendance History</h1>
            <div className="table-responsive">
              <table className="table">
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

export default Dashboard
