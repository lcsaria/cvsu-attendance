import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'


function DeleteModal({show, handleClose, handleDelete, del}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    password: ""
  })
  const password = useState("");
  const [error, setError] = useState({
    password: ""
  });

  const password2 = localStorage.getItem("password");

  const onhandlePassword = (e) => {
    const newdata = { ... data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    if (e.target.value === "") {
      setError({...error, password: "required"})
    } else {
      setError({...error, password: ""})
    }
    console.log(localStorage.getItem("password"))
  }

  const validate = () => {
    if(!password){
      setError({...error, password: "required"})
    } else {
      if (data.password !== password2){
        setError({...error, password: "password don't match"})
      } else {
        onDelete()
      }
    }
  }
  const onDelete = async () => {
      setLoading(true);
      await api.delete(`${del.cvsu_id}`)
      handleDelete();
      setLoading(false);
      window.location.reload(false)
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
                Delete {del.userinfo_lname + ', ' + del.userinfo_fname}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Enter the password to proceed. {(!error.password) ? null : <span className="ml-3 text-danger">{error.password}</span>} </p>
              <input
                onChange={onhandlePassword}
                className="form-control mb-4"
                type= 'password'
                id="password"
                placeholder="Password"
                name="pincode"
                value={data.password}
              />
            </Modal.Body>
            <Modal.Footer>
            {
                loading ? 
                <Button variant="danger" onClick={validate}>
                  <span>
                    <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                  </span>Delete
                </Button>
                :
                <Button variant="danger" onClick={validate}>
                  Delete
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

export default DeleteModal
