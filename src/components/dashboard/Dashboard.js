import React from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import Top from '../template/Top'

function Dashboard() {

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
            <h3>Good morning Kaguya!</h3>
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
                >
                  TIME IN
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "-3px 4px 10px" }}>
              <div className="card-body" style={{ boxShadow: "0px 0px" }}>
                <h3>Time in : --:-- AM</h3>
                <hr />
                <h3>Time out : --:-- PM</h3>
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
