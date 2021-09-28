import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import dog from '../../assets/img/dogs/image3.jpeg'
import api from '../../api/axios'
import SidebarUser from '../template/SidebarUser';
import SidebarHR from '../template/SidebarHR';

var editcheck = true;

function Profile() {
  const cvsuID = localStorage.getItem('cvsuID') || ''
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState('')
  const [edit, setEdit] = useState('Edit Infomation')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: ""
  })

  const gen = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" }
  ]

  // change photo
  const changePhoto = () => {
    alert("This function is not available right now.")
  }

  // change stats
  const changestats = () => {
    document.getElementById("firstname").readOnly = editcheck
    document.getElementById("middlename").readOnly = editcheck
    document.getElementById("lastname").readOnly = editcheck
    document.getElementById("gender").disabled = editcheck
    document.getElementById("emailaddress").readOnly = editcheck
    document.getElementById("mobilenumber").readOnly = editcheck
    
  }

  const validateEmail = (email) => {
    const r = /^\S+@\S+\.\S+$/
    return r.test(email);
  }

  const onChange = (e) => {
    console.log(e.target.name)
    console.log(error)
    if (e.target.name === "firstname") {
      if (e.target.value === "") {
        setError({...error, fname: "First name is required"})
      } else {
        setError({...error, fname: ""})
      }
    } 

    if (e.target.name === "lastname") {
      if (e.target.value === "") {
        setError({...error, lname: "Last name is required"})
      } else {
        setError({...error, lname: ""})
      }
    } 
    
    if (e.target.name === "address"){
      if (e.target.value === ""){
        setError({...error, email: "Email is required"})
      } else if (!validateEmail(e.target.value)){
        setError({...error, email: "Invalid email"})
      } else {
        setError({...error, email: ""})
      }
    }
  }

  const userCheck = () => {
    setLoading(false);
    let fname = document.getElementById("firstname").value
    let lname = document.getElementById("lastname").value
    let email = document.getElementById("emailaddress").value
    
    if (!fname){
      setError({...error,fname: "First name is required"})
    } else {
      if (!lname){
        setError({...error,lname: "Last name is required"})
      } else {
        if (!lname){
          setError({...error,lname: "Last name is required"})
        } else {
          if (!email){
            setError({...error,email: "Email is required"})
          } else {
            if (!validateEmail(email)){
              setError({...error,email: "Invalid email"})
            }
            else {
              usersave()
            }
          }
        }
      }
    } 
}
  // save user info
  const usersave = () => {
    setLoading(true);
    let fname = document.getElementById("firstname").value
    let mname = document.getElementById("middlename").value
    let lname = document.getElementById("lastname").value
    let gender = document.getElementById("gender").value
    let email = document.getElementById("emailaddress").value
    let number = document.getElementById("mobilenumber").value
    let designation = document.getElementById("designation").value
    let department = document.getElementById("department").value


    const userdatasave = async () => {
      await api.put(`${cvsuID}`,{
        cvsu_id: cvsuID,
        userinfo_fname: fname,
        userinfo_mname: mname,
        userinfo_lname: lname,
        userinfo_gender: gender,
        userinfo_email: email,
        userinfo_number : number,
        userinfo_designation: designation,
        userinfo_department: department,
      })
      .then(response => {
        console.log('response : ', response.status)
        alert('User information updated successfully.')
        editcheck = true
        setEdit("Edit Information")
        changestats()
        console.log('save na this');
        setLoading(false);
        window.location.reload(false) // reload
      })
      .catch((err) => {
        console.log('error : ', err)
        setLoading(false);
        alert(`Can't process your request. please try again later.`)
      })
    }
    userdatasave()
  }

  // save contact info
  const goedit = () => {
    editcheck = false
    setEdit("Save Changes")
    changestats()
    console.log('pidi na mag edit');
  }

  useEffect(() => {
    const retrievedata = async () => {
      await api.get(`getuser/${cvsuID}`)
      .then(response => {
        var ror = response.data
        console.log('res : ',ror[0].userinfo_fname)
        setUserData(response.data)
        document.getElementById("firstname").value = ror[0].userinfo_fname
        document.getElementById("middlename").value = ror[0].userinfo_mname
        document.getElementById("lastname").value = ror[0].userinfo_lname
        document.getElementById("gender").value = ror[0].userinfo_gender
        document.getElementById("emailaddress").value = ror[0].userinfo_email
        document.getElementById("mobilenumber").value = ror[0].userinfo_number
        document.getElementById("designation").value = ror[0].userinfo_designation
        document.getElementById("department").value = ror[0].userinfo_department
      })
      .catch((err) => {
        console.log('error : ',err)
      })
    }
    retrievedata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const retrievedata = async () => {
      const response = await api.get(cvsuID).catch((err) => {
        console.log('error : ', err)
      })
      if (response && response.data) {
        setUserData(response.data)
      }
    }
    retrievedata()
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
    <div className="card" style={{ margin: 0, marginBottom: 14 }}>
      <div className="card-body" style={{ height: 46, background: "#a5d6a7" }}>
        <h4
          className="card-title"
          style={{ color: "rgb(15,15,16)", marginBottom: 0, marginTop: "-10px" }}
        >
          Profile
        </h4>
      </div>
    </div>
    <div className="row">
      
      <div className="col">
        <div className="card shadow mb-3">
          <div className="card-header py-3">
            <strong>User Information</strong>
          </div>
          <div className="card-body">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="username">
                      <strong>First Name*</strong>
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="firstname"
                      placeholder="First Name"
                      name="firstname"
                      defaultValue= {userData ? userData[0].userinfo_fname : ''}
                      onChange={onChange}
                      readOnly
                    />
                    {
                      (!error.fname) ? null :
                      <span className="ml-3 m-3 text-danger">{error.fname}</span>
                    }
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">
                      <strong>Middle Name</strong>
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="middlename"
                      placeholder="Middle Name"
                      name="middlename"
                      onChange={onChange}
                      defaultValue= {userData ? userData[0].userinfo_mname : ''}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first_name">
                      <strong>Last Name*</strong>
                      <br />
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="lastname"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={onChange}
                      defaultValue= {userData ? userData[0].userinfo_lname : ''}
                      readOnly
                    />
                  </div>
                  {
                      (!error.lname) ? null :
                      <span className="ml-3 m-3 text-danger">{error.lname}</span>
                  }
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="last_name">
                      <strong>Gender</strong>
                    </label>
                    <select className="form-control" id="gender" disabled> 
                  {/*<option value={gender} id="gender"> -- </option>
                      {/* Mapping through each fruit object in our fruits array
                    and returning an option element with the appropriate attributes / values.
                  */}
                {gen.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
              </select>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header py-3">
                <strong>Contact Information</strong>
              </div>
              <div className="card-body">
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="address">
                          <strong>Email Address*</strong>
                        </label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          id="emailaddress"
                          placeholder="user@cvsu.edu.ph"
                          name="address"
                          onChange={onChange}
                          defaultValue= {userData ? userData[0].userinfo_email : ''}
                          readOnly
                          autofill="off"
                          
                        />
                        {
                          (!error.email) ? null :
                          <span className="ml-3 m-3 text-danger">{error.email}</span>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="address">
                          <strong>Department</strong>
                        </label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          id="department"
                          placeholder="Department"
                          name="department"
                          onChange={onChange}
                          defaultValue= {userData ? userData[0].userinfo_department : ''}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="city">
                          <strong>Mobile Number</strong>
                          <br />
                        </label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          id="mobilenumber"
                          placeholder="Mobile Number"
                          name="mobilenumber"
                          onChange={onChange}
                          defaultValue= {userData ? userData[0].userinfo_number : ''}
                          readOnly
                          maxLength={11}
                        />
                        {
                          (!error.number) ? null :
                          <span className="ml-3 m-3 text-danger">{error.number}</span>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="country">
                          <strong>Designation</strong>
                        </label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          id="designation"
                          placeholder="Designation"
                          name="designation"
                          onChange={onChange}
                          defaultValue= {userData ? userData[0].userinfo_designation : ''}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-md"
                      onClick = {editcheck ? goedit : userCheck}
                      style={{ background: "#75a478", color: "rgb(255,255,255)" }}
                      disabled={loading}
                    >
                      {loading ? 
                      <>
                        <span>
                          <ReactBootstrap.Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                        </span>
                        <span>{edit}</span>
                      </>
                      :
                      edit}
                    </button>
                  </div>
              </div>
            </div>
          </div>
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

export default Profile
