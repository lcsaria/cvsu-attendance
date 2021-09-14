import React, { useEffect, useState } from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import Top from '../template/Top'
import api from '../../api/axios'
var timecheck = false
function Dashboard() {
  var today = new Date()
  var dateTxt = ""
  var datelong = ""
  const [cvsuID, setcvsuID] = useState( localStorage.getItem('cvsuID') || '')
  const [userData, setUserData] = useState('')
  const [timetxt, setTimetxt] = useState('')
  const [timeintxt, setTimeintxt] = useState('TIME IN')
  const [timeIn, setTimeIn] = useState('')

  // get time text
  const getTime = () => {
    var time = today.getHours()
    if (time >= 0 && time <= 11) setTimetxt("Morning, ")
    else if (time >= 12 && time <= 18) setTimetxt("Afternoon, ")
    else if (time >= 19 && time <= 23) setTimetxt("Evening, ")
  }

  // get date today.
  const getnow = () => {
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
  }

  const getUserTime = () => {
    api.get(`attendance/${cvsuID}`)
    .then(response => {
      console.log('response : ', response.data)
      setTimeIn(response.data)
      if (!response.data[0].timeout){
        setTimeintxt("TIME OUT")
        timecheck = true
      }
      else{
        setTimeintxt("TIME IN")
        timecheck = false
      }
    })
    .catch((err) => {
      console.log('error : ',err.response.data)
    })
  }

  // react hooks for preload data.
  useEffect( async () => {
    // get data
    await api.get(cvsuID)
    .then(response => {
      console.log('response : ', response.data)
      setUserData(response.data)
    })
    .catch((err) => {
      console.log('error : ',err.response.data)
    })

    // get time
    
    getUserTime()
    getTime()
    getnow()
  },[])



  // time in or out 
  const timeInorOut = async () => {
    if (!timecheck) {
      console.log("TIME IN!", timecheck)
      await api.post(`attendance/${cvsuID}`)
      .then(response => {
        timecheck = true
        setTimeintxt("TIME OUT")
        alert("Time in success!")
        getUserTime()
      })
      .catch((err) => {
        alert(err.response.data)
      })
      return
    }
    if (timecheck){

      await api.put(`attendance/${cvsuID}`)
      .then(response => {
        setTimeintxt("TIME IN")
        timecheck = false
        alert("Time out success!")
        getUserTime()
      })
      .catch((err) => {
        alert(err.response.data)
      })
      
      console.log("TIME OUT!", timecheck)
      return
    }
  }

return (
<div id="wrapper">
  <Sidebar/>
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
            <h3>Good {timetxt} {userData? userData[0].userinfo_fname + ' ' + userData[0].userinfo_lname + ' !' : 'User!'}</h3>
            <hr />
            <h4>Tuesday | September 07, 2021</h4>
          </div>
        </div>
        <div className="row">
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
                  onClick={timeInorOut}
                >
                  {timeintxt}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "-3px 4px 10px" }}>
              <div className="card-body" style={{ boxShadow: "0px 0px" }}>
                <h3>Time in : {timeIn ? timeIn[0].timein : '--:--'}</h3>
                <hr />
                <h3>Time out : {timeIn ? timeIn[0].timeout : '--:--'}</h3>
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
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                  <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                  </tr>
                </tbody>
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

export default Dashboard
