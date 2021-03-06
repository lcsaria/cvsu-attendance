import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'


function ResetModal({show, handleClose, handleReset, res}) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error_password, setError_password] = useState()

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    console.log(value)
    if (value === ""){
      setError_password("")
    } else if (value.length < 8){
      setError_password("Password must be at least 8 character")
    } else {
      setError_password("")
    }
    
 }
  
  const onReset = async () => {
    console.log(password.length);
    if (!password) return setError_password("Password must be at least 8 character")
    if (password.length < 8 ) return setError_password("Password must be at least 8 character")
    setLoading(true);
      let data = {
        cvsu_id: res.cvsu_id,
        password: password
      }
      console.log(data)
      const datasave = async () => {
        await api.put("/resetpass", {data})
        .then(response => {
          console.log('response : ', response.status)
          handleReset();
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
                Reset Password
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
                <Button variant="danger" onClick={onReset}>
                  <span>
                    <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                  </span>Reset
                </Button>
                :
                <Button variant="danger" onClick={onReset}>
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

export default ResetModal
