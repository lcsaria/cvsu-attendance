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
    } else {
      setError_password("")
    }
    
 }
const onLock = async () => {
  console.log(lck.user_status);
  setLoading(true);
  console.log(lck.cvsu_id + "->" + password)
    await api.post(`login`,{
      cvsu_id: localStorage.getItem('cvsuID'),
      password: password
    })
    .then(response =>{
      // lock or unlock user 
      if (lck.user_status == 0) {
        api.post(`userlock/${lck.cvsu_id}`)
        .then(response =>{
          handleLock();
          setLoading(false);
          window.location.reload(false)
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else {
        api.post(`userunlock/${lck.cvsu_id}`)
        .then(response =>{
          handleLock();
          setLoading(false);
          window.location.reload(false)
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })
    .catch((err) => {
      setLoading(false);
      setError_password("Incorrect Password")
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
                {lck.user_status == 0 ? "Lock" : "Unlock"} {lck.userinfo_fname + " " + lck.userinfo_lname}?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="firstname">
                <strong>Enter your password</strong>
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
                <Button variant="danger" onClick={onLock}>
                  <span>
                    <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                  </span>Reset
                </Button>
                :
                <Button variant="danger" onClick={onLock}>
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
