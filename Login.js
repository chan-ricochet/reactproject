import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {OverlayTrigger,Modal,Alert} from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import {useState} from 'react';

export default function Login() {

	const[userID, setUserID] = useState("");
	const[pwd,setPwd] = useState("");
	const [modalShow, setModalShow] = React.useState(false);
	const[name,setName] = useState("");
	const[age,setAge] = useState("");
	const[gender,setGender] = useState("");
	const[income,setIncome] = useState("");
	const[desig,setDesig] = useState("");
	const[regAlert,setRegAlert] = useState(false);

const popover =  (
  <Popover id="popoverbasic" sanitize="false" show="true">
    <Popover.Header as="h3">Enter credentials</Popover.Header>
    <Popover.Body>
      Username <br/>
      <input type="text" id="UID" name="UID" value={userID} onChange={ (e) => setUserID(e.target.value)} /> <br/>
      Password <br/>
      <input type="password" id="pwd" name="pwd" value={pwd} onChange={ (e) => setPwd(e.target.value)} />
      
      <hr/>
      <p>Don't have an account?</p>
	  <div class="d-flex justify-content-center">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Register
      </Button>   
	  </div>
      </Popover.Body>
  </Popover>
);

const Example = () => (
  
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="success" data-toggle="popover">Login</Button>
  </OverlayTrigger>


);

 return(
        <div>
        <Example/> &emsp;

        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
	  show={modalShow}
	  onHide={ ()=>setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Form
        </Modal.Title>
      </Modal.Header>
      
	  <Modal.Body>
        <h6 class="center">
			
				User ID : <input type="text" id="UID" name="UID" value={userID} onChange={ (e) => setUserID(e.target.value)} />
				<br/><br/>
				Name : <input type="text" id="name1" name="name1" value={name} onChange={ (e) => setName(e.target.value)} />
				<br/><br/>
				Age : <input type="number" id="age" name="age" value={age} onChange={ (e) => setAge(e.target.value)} />
				<br/><br/>
				<br/>
				<div class="d-flex justify-content-center">
				<div class="p-2"> Gender : </div>
				<div class="p-2" className="radio" onChange={(e) => setGender(e.target.value)}>
				 
					<input type="radio" id="Female" name="sex" value="Female" /> Female &ensp;
					<input type="radio" id="Male" name="sex" value="Male" /> Male &ensp;
					<input type="radio" id="NA" name="sex" value="NA" /> Prefer Not to Say &ensp;
				</div>
				</div>
				<div class="d-flex justify-content-center">
						<div class="p-2">Income > 5lakhs : </div>
						<div class="p-2"><input type="checkbox" id="income" name="income" value={income} onChange={ (e) => setIncome(!e.target.value)} /> </div>

				</div>
				<br/>
				Designation : 
				<select value={desig} onChange={(e) => setDesig(e.target.value)}>
					<option default>Select one option</option>
					<option value="fullstack">Full Stack Developer</option>
					<option value="frontend">Frontend</option>
					<option value="backend">Backend</option>
					<option value="devops">DevOps</option>
				 </select>
				<br/><br/>
				Password : <input type="password" id="pwd" name="pwd" value={pwd} onChange={ (e) => setPwd(e.target.value)} />
				<br/>
				<br/>
				<Button variant="primary" onClick={() => setRegAlert(true)}>REGISTER</Button>
				<br/>
				<br/>

				{regAlert ?
				<div id="regDiv">
				<Alert variant="success">
					You have registered successfully!
				</Alert>
				</div>:
				null}

			
			</h6>
      </Modal.Body>
      
    </Modal>
        </div>
    );

}

