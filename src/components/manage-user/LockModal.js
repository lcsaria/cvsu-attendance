import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'

function LockModal({show, handleLock, handleClose, lck}) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error_password, setError_password] = useState()

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    console.log(value)
    if (value === ""){
      setError_password("")
    } else if (value.length < 4){
      setError_password("Password must be at least 4 character")
    } else {
      setError_password("")
    }
    
 }
  
 const validate = () => {
  if (password === ""){
    setError_password("")
  } else if (password.length < 4){
    setError_password("Password must be at least 8 character")
  } else {
    onLock()
  }
}
const onLock = async () => {
  setLoading(true);
  console.log(lck.cvsu_id + "->" + password)
    await api.post(`login`,{
      cvsu_id: lck.cvsu_id,
      password: password
    })
    .then(response =>{
      console.log(response)
      handleLock();
      setLoading(false);
      window.location.reload(false)
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }
  
    return (
      <form>
        <div>
          <Modal 
              show={show} 
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Lock/Unlock Password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="firstname">
                <strong>New Password*</strong>
                <br />
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                name="pincode"
                onChange={onChangePassword}
                required
              />
              {
              (!error_password) ? null :
                  <span className="ml-3 m-3 text-danger">{error_password}</span>
              }                          
            </div>
          </div>
          </div>
            </Modal.Body>
            <Modal.Footer>
            {
                loading ? 
                <Button variant="danger" onClick={validate}>
                  <span>
                    <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                  </span>Reset
                </Button>
                :
                <Button variant="danger" onClick={validate}>
                  Reset
                </Button>
            }
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </div>
        </form>
    )
}

export default LockModal
