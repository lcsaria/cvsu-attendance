import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import { useState } from 'react/cjs/react.development'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import api from '../../api/axios'
import SidebarUser from '../template/SidebarUser'
import SidebarHR from '../template/SidebarHR'

function AddUser() {
const gen = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" }
]

const dept = [
  { label: "Department of Information Technology", value: "Department of Information Technology" },
  { label: "Department of Management", value: "Department of Management" },
  { label: "Department of Arts and Sciences", value: "Department of Arts and Sciences" },
  { label: "Department of Hospitality and Tourism Studies", value: "Department of Hospitality and Tourism Studie" },
  { label: "Department of Psychology", value: "Department of Psychology" },
  { label: "Department of Teacher Education", value: "Department of Teacher Education" },
  { label: "Admin Office", value: "Admin Office" },
]

const usertype = [
  { label: "User", value: 1 },
  { label: "Human Resources", value: 2 },
  { label: "Admin", value: 0 }
]

const [data, setData] = useState({
  cvsu_id: '',
  password: '',
  user_type: '',
  userinfo_fname: '',
  userinfo_mname: '',
  userinfo_lname: '',
  userinfo_gender: '',
  userinfo_designation: '',
  userinfo_email: '',
  userinfo_department: '',
  userinfo_number : '',
})

const [error, setError] = useState({
  cvsuID: "",
  password: "",
  fname: "",
  lname: "",
  email: "",
  designation: ""
})

const [loading, setLoading] = useState(false);

const validate = () => {
    let cvsuID = document.getElementById("cvsu_id").value
    let password = document.getElementById("password").value
    let fname = document.getElementById("userinfo_fname").value
    let lname = document.getElementById("userinfo_lname").value
    let email = document.getElementById("userinfo_email").value
    let designation = document.getElementById("userinfo_designation").value
    
    if (!cvsuID && !password && !fname && !lname && !email && !designation){
      setError({...error, 
        cvsuID:"required", 
        password: "required",
        fname: "required",
        lname: "required",
        email: "required",
        designation: "required"
      })
    } else {
      if (!password && !password && !fname && !lname && !email && !designation) {
        setError({...error, 
          cvsuID:"", 
          password: "required",
          fname: "required",
          lname: "required",
          email: "required",
          designation: "required"
        })
      } else {
        if (!fname && !lname && !email && !designation) {
          setError({...error, 
            cvsuID:"", 
            password: "",
            fname: "required",
            lname: "required",
            email: "required",
            designation: "required"
          })
        } else {
          if (!lname && !email && !designation) {
            setError({...error, 
              cvsuID:"", 
              password: "",
              fname: "",
              lname: "required",
              email: "required",
              designation: "required"
            })
          } else {
            if (!email && !designation) {
              setError({...error, 
                cvsuID:"", 
                password: "",
                fname: "",
                lname: "",
                email: "required",
                designation: "required"
              })
            } else {
              if (!designation) {
                setError({...error, 
                  cvsuID:"", 
                  password: "",
                  fname: "",
                  lname: "",
                  email: "",
                  designation: "is required"
                })
              } else {
                  if (!validateEmail(email)){
                    setError({...error, 
                      cvsuID:"", 
                      password: "",
                      fname: "",
                      lname: "",
                      email: "Invalid email",
                      designation: ""
                    })
                  } else {
                    setError({
                      cvsuID:"", 
                      password: "",
                      fname: "",
                      lname: "",
                      email: "",
                      designation: ""
                    })
                    setLoading(true);
                    submit()
                  }
                }
              }
            }
          }
        }
      }  
}

const submit = async () => {
  data.userinfo_department = document.getElementById('userinfo_department').value
  data.userinfo_gender = document.getElementById('userinfo_gender').value
  data.user_type = document.getElementById('user_type').value
  // CONNECT TO API
  await api.post('adduser',data)
  .then(res => {
    console.log('response : ',res.data)
    //submitlogin()
    alert('User Added Successful!')
    setLoading(false)
    window.location.reload(false) // reload
  })
  .catch((err) => {
    console.log('error : ', err)
    setLoading(false)
    alert('User already exist!')
    return
  })
  
}

const validateEmail = (email) => {
  const r = /^\S+@\S+\.\S+$/
  return r.test(email);
}

const onhandleCvsuid = (e) => {
  const value = e.target.value.replace(/\D/g,"");
  setData({...data, cvsu_id: value})
  console.log(data)
  if (!value) setError({...error, cvsuID: "required"})
  else setError({...error, cvsuID: ""})
}

const onhandlePassword = (e) => {
  const value = e.target.value
  setData({...data, password: value})
  console.log(data)
  if (value === ""){
    setError({...error, password: "required"})
  } else if (value.length < 8){
    setError({...error, password: "must be at least 8 character"})
  } else {
    setError({...error,password: ""})
  }
  
}
const handle = (e) => {
  const newdata = { ...data }
  newdata[e.target.id] = e.target.value
  setData(newdata)
  if (e.target.id === "cvsu_id"){
    if (e.target.value === "") {
      setError({...error, cvsuID: "required"})
    } else {
      setError({...error, cvsuID: ""})
    }
  }

  if (e.target.id === "password"){
    if (e.target.value === "") {
      setError({...error, password: "required"})
    } else {
      setError({...error, password: ""})
    }
  }

  if (e.target.id === "userinfo_fname"){
    if (e.target.value === "") {
      setError({...error, fname: "required"})
    } else {
      setError({...error, fname: ""})
    }
  }

  if (e.target.id === "userinfo_lname"){
    if (e.target.value === "") {
      setError({...error, lname: "required"})
    } else {
      setError({...error, lname: ""})
    }
  }

  if (e.target.id === "userinfo_email"){
    if (e.target.value === ""){
      setError({...error, email: "required"})
    } else if (!validateEmail(e.target.value)){
      setError({...error, email: "Invalid email"})
    } else {
      setError({...error, email: ""})
    }
  }

  if (e.target.id === "userinfo_designation"){
    if (e.target.value === "") {
      setError({...error, designation: "required"})
    } else {
      setError({...error, designation: ""})
    }
  }

  console.log(newdata)
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
      <div className="container-fluid" style={{ marginBottom: 20 }}>
  <div className="card" style={{ marginBottom: 10 }}>
    <div className="card-body" style={{ height: 46, background: "#a5d6a7" }}>
      <h4
        className="card-title"
        style={{ marginTop: "-10px", color: "rgb(15,15,16)" }}
      >
        Add User
      </h4>
    </div>
  </div>
  <div className="card shadow">
    <div className="card-body">
        <h5>Login details</h5>
        <hr />
        
        <div className="form-row">
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="cvsuidnumber">
                <strong>CvSU ID Number*</strong>
                {(!error.cvsuID) ? null : <span className="ml-3 text-danger">{error.cvsuID}</span>}
              </label>
              <input
                onChange={onhandleCvsuid}
                className="form-control mb-3"
                type="text"
                id="cvsu_id"
                placeholder="CvSU ID Number"
                name="cvsuidnumber"
                value={data.cvsu_id}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="pincode">
                <strong>Password*</strong>
                {(!error.password) ? null : <span className="ml-3 text-danger">{error.password}</span> }
                <br />
              </label>
              <input
                onChange={onhandlePassword}
                className="form-control mb-3"
                type= 'password'
                id="password"
                placeholder="Password"
                name="pincode"
                value={data.password}
              />
            </div>
          </div>
          <div className="col">
            <div className="form">
              <label htmlFor="gender">
                <strong>User Category</strong>
              </label>
              <div className="dropdown">
              <select className="form-control" id="user_type"> 
                {usertype.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
              </select>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-3">Personal details</h5>
        <hr />
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstname">
                <strong>First Name*</strong>
                {(!error.fname) ? null : <span className="ml-3 text-danger">{error.fname}</span>}  
                <br />
              </label>
              <input
               onChange={(e) => handle(e)}
                className="form-control mb-3"
                type="text"
                id="userinfo_fname"
                placeholder="First Name"
                name="firstname"
              />
                          
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="middlename">
                <strong>Middle Name</strong>
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="userinfo_mname"
                placeholder="Middle Name"
                name="middlename"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="lastname">
                <strong>Last Name*</strong>
                {(!error.lname) ? null : <span className="ml-3 text-danger">{error.lname}</span>}
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control mb-3"
                type="text"
                id="userinfo_lname"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="gender">
                <strong>Gender</strong>
              </label>
              <div className="dropdown">
              <select className="form-control" id="userinfo_gender"> 
                  {/*<option value={gender} id="gender"> -- </option>
                      {/* Mapping through each fruit object in our fruits array
                    and returning an option element with the appropriate attributes / values.
                  */}
                {gen.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
              </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="emailaddress">
                <strong>Email Address*</strong>
                {(!error.email) ? null : <span className="ml-3 text-danger">{error.email}</span>}
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control mb-3"
                type="email"
                id="userinfo_email"
                placeholder="user@cvsu.edu.ph"
                name="emailaddress"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="department">
                <strong>Department</strong>
                <br />
              </label>
              <div className="dropdown">
              <select className="form-control" id="userinfo_department"> 
                {/*<option value={department} id="department" name="department"> -- </option>
                      {/* Mapping through each fruit object in our fruits array
                    and returning an option element with the appropriate attributes / values.
                  */}
                {dept.map((department) => <option  key={department.value} value={department.value}>{department.label}</option>)}
              </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="contactnumber">
                <strong>Contact Number</strong>
              </label>
              <input
               onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="userinfo_number"
                placeholder="09123456789"
                name="contactnumber"
              />
            </div>
          </div>
          <div className="col">
            <div className="form">
              <label htmlFor="designation">
                <strong>Designation*</strong>
                {(!error.designation) ? null : <span className="ml-3 text-danger">{error.designation}</span>}
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control mb-3"
                type="text"
                id="userinfo_designation"
                placeholder="Designation"
                name="designation"
              />
            </div>
          </div>
        </div>
        <div className="form">
          <button
            className="btn btn-sm"
            style={{
              background: "#75a478",
              color: "rgb(255,255,255)",
              width: "156.031px",
              height: 42
            }}
            onClick={validate}
          >
            {loading ?
            <> 
                <span>
                  <ReactBootstrap.Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                </span>
                <span>
                  <i className="fa fa-user-plus" />
                    &nbsp;ADD USER
                 </span>
            </>
                      :
              <span>
                <i className="fa fa-user-plus" />
                &nbsp;ADD USER
              </span>
            }
            
          </button>
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

export default AddUser
