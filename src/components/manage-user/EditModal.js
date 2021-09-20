import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


function EditModal({show, handleClose, handleEdit}) {
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
  
  const handle = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleEdit}>
                Submit
              </Button>
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default EditModal
