import React from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import dog from '../../assets/img/dogs/image3.jpeg'
import Top from '../template/Top'

function Profile() {

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
      <div className="card mb-3" style={{ height: 318 }}>
        <div className="card-body text-center shadow">
          <img
            className="rounded-circle mb-3 mt-4"
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
          <form>
            <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="username">
                    <strong>First Name</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    placeholder="John"
                    name="username"
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
                    type="email"
                    id="email"
                    placeholder="San"
                    name="email"
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
                    id="first_name"
                    placeholder="Doe"
                    name="first_name"
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
                    id="last_name"
                    placeholder="Female"
                    name="last_name"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="form-group" style={{ color: "rgb(255,255,255)" }}>
              <button
                className="btn btn-sm"
                type="submit"
                style={{ background: "#75a478", color: "rgb(255,255,255)" }}
              >
                Save Settings
              </button>
            </div>
          </form>
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
              <form>
                <div className="form-group">
                  <label htmlFor="address">
                    <strong>Email Address</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="address"
                    placeholder="user@cvsu.edu.ph"
                    name="address"
                  />
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
                        id="city"
                        placeholder="09123456789"
                        name="city"
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
                        id="country"
                        placeholder="Computer Programmer 1"
                        name="country"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-sm"
                    type="submit"
                    style={{ background: "#75a478", color: "rgb(255,255,255)" }}
                  >
                    Save&nbsp;Settings
                  </button>
                </div>
              </form>
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
