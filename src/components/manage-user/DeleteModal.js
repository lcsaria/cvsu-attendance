import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'


function DeleteModal({show, handleClose, handleDelete, del}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username : localStorage.getItem('cvsuID'),
    password : ''
  })
  const password = useState("");
  const [error, setError] = useState({
    password: ""
  });

  const onhandlePassword = (e) => {
    const value = e.target.value
    setData({...data, password: value})
    if (e.target.value === "") {
      setError({...error, password: "required"})
    } else {
      setError({...error, password: ""})
    }
  }

  const validate = () => {
    if(!data.password) setError({...error, password: "required"})
    else onDelete()
    
  }
  const onDelete = async () => {
    setLoading(true);
      await api.post(`login`,{data})
      .then(response => {
        console.log(response)
      });
      console.log(data)
      /*
      setLoading(true);
      await api.delete(`${del.cvsu_id}`)
      handleDelete();
      setLoading(false);
      window.location.reload(false)
      */
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
