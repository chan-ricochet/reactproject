import React, { useState } from 'react';
import {Button,Offcanvas,Breadcrumb,Nav,Navbar} from 'react-bootstrap';
import {BsList} from 'react-icons/bs';
import logo1 from './doc-logo.jpg';
import Login from './Login';



export default function Menubar() {

  return(
	  <div>
		<Navbar  bg="dark" fixed="top" >

                <div class="d-flex justify-content-between">
                
                <div class="p-2">
                <img class="logo" src={logo1} />
                </div>

                <div class="p-2">
                <Nav variant="tabs">
                    <Nav.Item>
                       <Nav.Link eventKey="/App" href="/App" active><span class="text-muted"> Home </span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/doctors" href="/doctors"> <span class="text-muted">Online Consultation</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/covidpage" href="/covidpage"> <span class="text-muted"> COVID </span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/labtest" href="/labtest"> <span class="text-muted"> Laboratory Tests </span> </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>

                <div class="p-2">
                <Login />
                </div>

                
                </div>
            </Navbar>
             
	  </div>
  );
}     
        