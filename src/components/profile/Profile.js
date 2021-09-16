import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import dog from '../../assets/img/dogs/image3.jpeg'
import Top from '../template/Top'
import api from '../../api/axios'

var editcheck = true;
function Profile() {
  const cvsuID = localStorage.getItem('cvsuID') || ''
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState('')
  const [edit, setEdit] = useState('Edit Infomation')
  const [loading, setLoading] = useState(false);


  // change photo
  const changePhoto = () => {
    alert("This function is not available right now.")
  }
  const changestats = () => {
    document.getElementById("firstname").readOnly = editcheck
    document.getElementById("middlename").readOnly = editcheck
    document.getElementById("lastname").readOnly = editcheck
    document.getElementById("gender").readOnly = editcheck
    document.getElementById("emailaddress").readOnly = editcheck
    document.getElementById("mobilenumber").readOnly = editcheck
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
      await api.get(cvsuID)
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
  },[])

  return (
  <div id="wrapper">
    <Sidebar/>
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
      <div className="col-lg-4 col-xl-5">
        <div className="card mb-3" style={{ height: 272 }}>
          <div className="card-body text-center shadow">
            <img
              className="rounded-circle mb-1 mt-2"
              src={dog}
              width={160}
              height={160}
              alt="dog"
            />
            <div className="mb-3">
              <button
                className="btn btn-sm"
                type="button"
                style={{
                  width: "142.156px",
                  height: 40,
                  margin: 13,
                  background: "#75a478",
                  color: "rgb(255,255,255)"
                }}
                onClick={changePhoto}
              >
                Change Photo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-xl-7">
        <div className="card shadow mb-3">
          <div className="card-header py-3">
            <strong>User Information</strong>
          </div>
          <div className="card-body">
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="username">
                      <strong>First Name</strong>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstname"
                      placeholder="First Name"
                      name="firstname"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email">
                      <strong>Middle Name</strong>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="middlename"
                      placeholder="Middle Name"
                      name="middlename"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="first_name">
                      <strong>Last Name</strong>
                      <br />
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastname"
                      placeholder="Last Name"
                      name="lastname"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="last_name">
                      <strong>Gender</strong>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="gender"
                      placeholder="Gender"
                      name="gender"
                      readOnly
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-xl-12">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header py-3">
                <strong>Contact Information</strong>
              </div>
              <div className="card-body">
                  <div className="form-row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="address">
                          <strong>Email Address</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="emailaddress"
                          placeholder="user@cvsu.edu.ph"
                          name="address"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="address">
                          <strong>Department</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="department"
                          placeholder="Department"
                          name="department"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="city">
                          <strong>Mobile Number</strong>
                          <br />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="mobilenumber"
                          placeholder="Mobile Number"
                          name="mobilenumber"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="country">
                          <strong>Designation</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="designation"
                          placeholder="Designation"
                          name="designation"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-lg"
                      onClick = {editcheck ? goedit : usersave}
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
    <Top/>
  </div>
  )
}

export default Profile
