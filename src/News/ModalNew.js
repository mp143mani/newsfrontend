
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalNew() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="mt-2" variant="primary" onClick={() => setShow(true)}>
      Mandatory Instruction To Start App
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Mandatory Instruction To Start App
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <h3>Initial Essentials To Run App</h3>
          <h5>This apps generally made for aspirents who preparing competative examinations..they dont have much time to read whole newspaper...so this apps helps to give quick overview of news title and short but imporatant 5-6 lines of description</h5>
          <div>
          <h4>Watch News</h4>
          <p>By clicking on watch news button anyone can watch news without any sign-in</p>
          </div>
          <div>
          <h4>Manage News</h4>
          <p>By clicking on Manage news..One login window will open, if u belongs to news channel source and wants to add news then u need to register. once your request role change by co-ordinator/admin from "IN-Process" to "Access To Add News" </p>
          <p>The guy who has "Verified" role can able to manage all users account means can able to change roles of news users </p>   
          </div>
          <div>
          <h5>Try to login using differant credentials as mention below to test app</h5>
          <h4>Role : "Verified"</h4>
          <p>Login by this credentials to manage accounts</p>
          <p>Email: 1999shubhamjoshi@gmail.com</p>
          <p>Password: 123</p>
          </div>
          <div>
          <h4>Role : "IN-Process"</h4>
          <p>Login by this credentials will show verification yet to be done </p>
          <p>Email: shubham19joshi@gmail.com</p>
          <p>Password:123</p>
</div>
           <div>
          <h4>Role : "Access To Add News"</h4>
          <p>Login by this credentials to add and manage self posted news</p>
          <p>Email: shubham@gmail.com</p>
          <p>Password: 123</p>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default ModalNew;