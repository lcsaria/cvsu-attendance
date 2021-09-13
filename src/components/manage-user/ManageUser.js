import React from 'react'
import Footer from '../template/Footer'
import Navbar from '../template/Navbar'
import Sidebar from '../template/Sidebar'
import Top from '../template/Top'

function ManageUser() {


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
        Manage User
      </h4>
    </div>
  </div>
  <div className="card shadow">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 text-nowrap">
          <div
            id="dataTable_length"
            className="dataTables_length"
            aria-controls="dataTable"
          />
        </div>
        <div className="col-md-6">
          <div
            className="text-md-right dataTables_filter"
            id="dataTable_filter"
          >
            <label>
              <input
                type="search"
                className="form-control form-control-sm"
                aria-controls="dataTable"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
      </div>
      <div
        className="table-responsive table mt-2"
        id="dataTable-1"
        role="grid"
        aria-describedby="dataTable_info"
      >
        <table className="table my-0" id="dataTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time in</th>
              <th>Time out</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Kaguya Shinomiya</td>
              <td>2020-09-07</td>
              <td>06:00 AM</td>
              <td>06:00 PM</td>
              <td>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30 }}
                  title="Edit"
                >
                  <i className="fa fa-edit" title="Edit" />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  data-toggle="tooltip"
                  data-bss-tooltip
                  type="button"
                  style={{ width: 40, height: 30, marginLeft: 10 }}
                  title="Delete"
                >
                  <i className="fa fa-trash" title="Delete" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr />
          </tfoot>
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

export default ManageUser
