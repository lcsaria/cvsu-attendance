import React from 'react'
import { Modal, Button } from 'react-bootstrap';
function DeleteModal({show, handleClose, handleDelete}) {
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
                Delete ^User^
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default DeleteModal
