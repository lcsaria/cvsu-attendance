import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios'


function DeleteModal({show, handleClose, handleDelete, del}) {
  const [loading, setLoading] = useState(false);
  
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
              Are you sure? 
            </Modal.Body>
            <Modal.Footer>
            {
                loading ? 
                <Button variant="danger" onClick={onDelete}>
                  <span>
                    <Spinner animation="border" className="spinner-border spinner-border-sm mr-2" />
                  </span>Delete
                </Button>
                :
                <Button variant="danger" onClick={onDelete}>
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
