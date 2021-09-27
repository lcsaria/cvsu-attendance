// eslint-disable-next-line no-lone-blocks
/*
ISSUE 
1. when submit, the data will be undefined
2. set data, not working
3.

*/

import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'

function EditModal({show, handleClose, handleEdit, id}) {
  const [loading, setLoading] = useState(false);
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
    cvsu_id: id.cvsu_id,
    user_type: id.user_type,
    userinfo_fname: id.userinfo_fname,
    userinfo_mname: id.userinfo_mname,
    userinfo_lname: id.userinfo_lname,
    userinfo_gender: id.userinfo_gender,
    userinfo_designation: id.userinfo_designation,
    userinfo_email: id.userinfo_email,
    userinfo_department: id.userinfo_department,
    userinfo_number : id.userinfo_number,
  })
  
  const [error, setError] = useState({
    cvsuID: "",
    fname: "",
    lname: "",
    email: "",
    designation: ""
  })

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
        setError({...error, email: "invalid email"})
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

  const validateEmail = (email) => {
    const r = /^\S+@\S+\.\S+$/
    return r.test(email);
  }

  const validate = () => {
    let cvsuID = document.getElementById("cvsu_id").value
    let fname = document.getElementById("userinfo_fname").value
    let lname = document.getElementById("userinfo_lname").value
    let email = document.getElementById("userinfo_email").value
    let designation = document.getElementById("userinfo_designation").value
    
    if (!cvsuID && !fname && !lname && !email && !designation){
      setError({...error, 
        cvsuID:"required", 
        fname: "required",
        lname: "required",
        email: "required",
        designation: "required"
      })
    } else {
      if (!fname && !lname && !email && !designation) {
        setError({...error, 
          cvsuID:"", 
          fname: "required",
          lname: "required",
          email: "required",
          designation: "required"
        })
      } else {
        if (!lname && !email && !designation) {
          setError({...error, 
            cvsuID:"", 
            fname: "",
            lname: "required",
            email: "required",
            designation: "required"
          })
        } else {
          if (!email && !designation) {
            setError({...error, 
              cvsuID:"", 
              fname: "",
              lname: "",
              email: "required",
              designation: "required"
            })
          } else {
            if (!designation) {
              setError({...error, 
                cvsuID:"", 
                fname: "",
                lname: "",
                email: "",
                designation: "required"
              })
            } else {
              if (!email){
                setError({...error, 
                  cvsuID:"", 
                  fname: "",
                  lname: "",
                  email: "required",
                  designation: ""
                })
              } else {
                    if (!cvsuID) {
                      setError({...error, 
                        cvsuID:"required", 
                        fname: "",
                        lname: "",
                        email: "",
                        designation: ""
                      })
                    } else {
                      if (!fname) {
                        setError({...error, 
                          cvsuID:"", 
                          fname: "required",
                          lname: "",
                          email: "",
                          designation: ""
                        })
                      } else {
                        if (!lname) {
                          setError({...error, 
                            cvsuID:"", 
                            fname: "",
                            lname: "required",
                            email: "",
                            designation: ""
                          })
                        } else {
                          if (!validateEmail(email)){
                            setError({...error, 
                              cvsuID:"", 
                              fname: "",
                              lname: "",
                              email: "invalid email",
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
                            onSubmit()
                          }
                        } 
                      }
                    }
                  }
                }
              }
            }
          }
        }

}
  const onSubmit = (e) => {
    setLoading(true);
    let cvsuid = id.cvsu_id
    let data = {
      cvsu_id: document.getElementById('cvsu_id').value,
      userinfo_fname: document.getElementById("userinfo_fname").value,
      userinfo_mname: document.getElementById("userinfo_mname").value,
      userinfo_lname: document.getElementById("userinfo_lname").value,
      userinfo_gender: document.getElementById("userinfo_gender").value,
      userinfo_email: document.getElementById("userinfo_email").value,
      userinfo_number : document.getElementById("userinfo_number").value,
      userinfo_designation: document.getElementById("userinfo_designation").value,
      userinfo_department: document.getElementById("userinfo_department").value,
      user_type: document.getElementById('user_type').value
    }
    setData(data)
    console.log(data.user_type);
    const datasave = async () => {
      await api.put(`manage/${cvsuid}`, {data})
      .then(response => {
        console.log('response : ', response.status)
        handleEdit();
        
        setLoading(false);
        window.location.reload(false) // reload
      })
      .catch((err) => {
        console.log('error : ', err)
        setLoading(false);
        alert(`Can't process your request. please try again later.`)
      })
    }
    datasave()
    
  }
    return (
        <div>
          <Modal 
              show={show} 
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Update User
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="cvsuidnumber">
                <strong>CvSU ID Number*&nbsp;</strong>
                {(!error.cvsuID) ? null : <span className="ml-3 text-danger">{error.cvsuID}</span>}
              </label>
              <input
                className="form-control"
                type="text"
                id="cvsu_id"
                placeholder="CvSU ID Number"
                name="cvsuidnumber"
                onChange={(e) => handle(e)}
                defaultValue = {id.cvsu_id}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="gender">
                <strong>User Category</strong>
              </label>
              <div className="dropdown">
              <select className="form-control" id="user_type"  onChange={e => handle(e)} defaultValue = {id.user_type}> 
                {usertype.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
              </select>
              </div>
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
                {(!error.fname) ? null : <span className="ml-3 text-danger">{error.fname}</span>} 
                <br />
              </label>
              <input
                className="form-control"
                type="text"
                id="userinfo_fname"
                placeholder="First Name"
                name="userinfo_fname"
                onChange={(e) => handle(e)}
                defaultValue = {id.userinfo_fname}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="middlename">
                <strong>Middle Name</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="userinfo_mname"
                placeholder="Middle Name"
                name="userinfo_mname"
                defaultValue = {id.userinfo_mname}
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="form-group">
              <label htmlFor="lastname">
                <strong>Last Name*</strong>
                {(!error.lname) ? null : <span className="ml-3 text-danger">{error.lname}</span>} 
              </label>
              <input
                className="form-control"
                type="text"
                id="userinfo_lname"
                placeholder="Last Name"
                name="lastname"
                onChange={(e) => handle(e)}
                defaultValue = {id.userinfo_lname}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="gender">
                <strong>Gender</strong>
              </label>
              <div className="dropdown">
              <select className="form-control" id="userinfo_gender" onChange={e => handle(e)} defaultValue={id.userinfo_gender}> 
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
                {(!error.email) ? null : <span className="ml-3 text-danger">{error.email}</span>} 
              </label>
              <input
                className="form-control"
                type="email"
                id="userinfo_email"
                placeholder="user@cvsu.edu.ph"
                name="emailaddress"
                onChange={(e) => handle(e)}
                defaultValue = {id.userinfo_email}
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
              <select className="form-control" id="userinfo_department" defaultValue = {id.userinfo_department}> 
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
                <strong>Contact Number</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="userinfo_number"
                placeholder="09123456789"
                name="contactnumber"
                defaultValue = {id.userinfo_number}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="designation">
                <strong>Designation*</strong>
                {(!error.designation) ? null : <span className="ml-3 text-danger">{error.designation}</span>}
              </label>
              <input
                className="form-control"
                type="text"
                id="userinfo_designation"
                placeholder="Designation"
                name="designation"
                onChange={(e) => handle(e)}
                defaultValue = {id.userinfo_designation}
              />
            </div>
          </div>
        </div>
            </Modal.Body>
            <Modal.Footer>
              {
                loading ? 
                <Button variant="success" onClick={validate}>
                  <span>
                          <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                        </span>
                Submit
                </Button>
                :
                <Button variant="success" onClick={validate}>
                Submit
              </Button>
              }
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default EditModal
