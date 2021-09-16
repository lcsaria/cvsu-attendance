import React from 'react'
import { useState } from 'react/cjs/react.development'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import api from '../../api/axios'

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

const [data, setData] = useState({
  cvsu_id: '',
  password: '',
  userinfo_fname: '',
  userinfo_mname: '',
  userinfo_lname: '',
  userinfo_gender: '',
  userinfo_designation: '',
  userinfo_email: '',
  userinfo_department: '',
  userinfo_number : '',
})

const submitlogin = async (e) => {
  await api.post('addlogin',{
    cvsu_id: data.cvsu_id,
    password: data.password,
  })
  .then(res => {
    console.log('response : ', res.data)
  })
  .catch((err) => {
    console.log('error : ', err)
  })
}

const submit = async (e) => {
  e.preventDefault();
  if (!data.userinfo_fname || !data.userinfo_lname || !data.userinfo_email || !data.userinfo_number || !data.userinfo_designation || !data.cvsu_id || !data.password) 
  return alert("please fill all field with *")
  var gender = document.getElementById('userinfo_gender').value
  var department = document.getElementById('userinfo_department').value
  console.log('test gender : ', gender)
  console.log('test department : ', department)
  // CONNECT TO API
  await api.post('',{
    cvsu_id: data.cvsu_id,
    userinfo_fname: data.userinfo_fname,
    userinfo_mname: data.userinfo_mname,
    userinfo_lname: data.userinfo_lname,
    userinfo_gender: gender,
    userinfo_designation: data.userinfo_designation,
    userinfo_email: data.userinfo_email,
    userinfo_department: department,
    userinfo_number : data.userinfo_mname,
  })
  .then(res => {
    console.log('response : ',res.data)
    submitlogin()
    alert('User Added Successful!')
    window.location.reload(false) // reload
  })
  .catch((err) => {
    console.log('error : ', err)
    alert('User already exist!')
    return
  })
  
}

const handle = (e) => {
  const newdata = { ...data }
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
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
        Add User
      </h4>
    </div>
  </div>
  <div className="card shadow">
    <div className="card-body">
      <form onSubmit={(e) => submit(e)}>
        <h4>Login details</h4>
        <hr />
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="cvsuidnumber">
                <strong>CvSU ID Number*&nbsp;</strong>
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="cvsu_id"
                placeholder="CvSU ID Number"
                name="cvsuidnumber"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="pincode">
                <strong>4 Digit Pin Code*</strong>
                <br />
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="password"
                maxLength="4"
                id="password"
                placeholder="0000"
                name="pincode"
              />
            </div>
          </div>
        </div>
        <h4>Personal details</h4>
        <hr />
        <div className="form-row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="firstname">
                <strong>First Name*</strong>
                <br />
              </label>
              <input
               onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="userinfo_fname"
                placeholder="First Name"
                name="firstname"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
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
          <div className="col-lg-6 col-xl-6">
            <div className="form-group">
              <label htmlFor="lastname">
                <strong>Last Name*</strong>
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="userinfo_lname"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
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
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="emailaddress">
                <strong>Email Address*</strong>
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="email"
                id="userinfo_email"
                placeholder="user@cvsu.edu.ph"
                name="emailaddress"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
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
          <div className="col-lg-6 col-xl-6">
            <div className="form-group">
              <label htmlFor="contactnumber">
                <strong>Contact Number*</strong>
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
            <div className="form-group">
              <label htmlFor="designation">
                <strong>Designation*</strong>
              </label>
              <input
                onChange={(e) => handle(e)}
                className="form-control"
                type="text"
                id="userinfo_designation"
                placeholder="Designation"
                name="designation"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            className="btn btn-sm"
            type="submit"
            style={{
              background: "#75a478",
              color: "rgb(255,255,255)",
              width: "156.031px",
              height: 42
            }}
          >
            <i className="fa fa-user-plus" />
            &nbsp;ADD USER
          </button>
        </div>
      </form>
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
