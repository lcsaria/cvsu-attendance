import React from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import Top from '../template/Top'

function AddUser() {
const gen = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" }
]

const dept = [
  { label: "Department of Information Technology", value: "DIT" },
  { label: "Dapartment of Management", value: "DOM" }
]


const [gender, setGender] = React.useState("");
const [department, setDepartment] = React.useState("");

let handleGenderChange = (e) => {
  setGender(e.target.value)
}

let handleDepartmentChange = (e) => {
  setDepartment(e.target.value)
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
      <form>
        <h4>Login details</h4>
        <hr />
        <div className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address">
                <strong>CvSU ID Number&nbsp;</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                placeholder="1234567890"
                name="address"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address">
                <strong>4 Digit Pin Code</strong>
                <br />
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                placeholder="0000"
                name="address"
              />
            </div>
          </div>
        </div>
        <h4>Personal details</h4>
        <hr />
        <div className="form-row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="city">
                <strong>First Name</strong>
                <br />
              </label>
              <input
                className="form-control"
                type="text"
                id="city"
                placeholder="Juan"
                name="city"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Middle Name</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="country"
                placeholder="Dela"
                name="country"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Last Name</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="country-1"
                placeholder="Cruz"
                name="country"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Gender</strong>
              </label>
              <div className="dropdown">
              <select className="form-control" onChange={handleGenderChange}> 
                <option value={gender} id="gender"> -- </option>
                      {/* Mapping through each fruit object in our fruits array
                    and returning an option element with the appropriate attributes / values.
                  */}
                {gen.map((gender) => <option value={gender.value}>{gender.label}</option>)}
              </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Email Address</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="country-4"
                placeholder="juan.delacruz@cvsu.edu.ph"
                name="country"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Department</strong>
                <br />
              </label>
              <div className="dropdown">
              <select className="form-control" onChange={handleDepartmentChange}> 
                <option value={department} name="gender"> -- </option>
                      {/* Mapping through each fruit object in our fruits array
                    and returning an option element with the appropriate attributes / values.
                  */}
                {dept.map((department) => <option key={department.value} value={department.value}>{department.label}</option>)}
              </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="form-group">
              <label htmlFor="country">
                <strong>Contact Number</strong>
              </label>
              <input
                className="form-control"
                type="text"
                id="country-2"
                placeholder="09123456789"
                name="country"
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
                id="country-3"
                placeholder="Computer Programmer 1"
                name="country"
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
  <Top/>
</div>
    )
}

export default AddUser
