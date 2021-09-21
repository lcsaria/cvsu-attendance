import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'


function ResetModal({show, handleClose, handleReset, res}) {
  const [loading, setLoading] = useState(false);



  
  const onReset = async () => {
    setLoading(true);
      let data = {
        cvsu_id: res.cvsu_id,
        password: document.getElementById('password').value
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
        <div>
          <Modal 
              show={show} 
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Reset Password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="firstname">
                <strong>New Password*</strong>
                <br />
              </label>
              <input
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
    )
}

export default ResetModal
