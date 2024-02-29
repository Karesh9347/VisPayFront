import React, { useState,useEffect } from 'react'
import { Card, Row, Col, CardFooter, CardBody, CardText, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import Nav from './Nav'
import BottomNavbar from './Bottom'
import "./docs.css"
import { Arrow90degUp, ArrowBarUp, ArrowDownUp, BoxArrowUp } from 'react-bootstrap-icons'
const Doc = () => {
  

  return (
  
    <div id="go">
      <Nav />
      <Container>
        <Row  style={{ marginTop: "100px" }} >
          <Col md={4} >
            <ListGroup >
              <ListGroupItem><a id="a"href="#login">how to login?</a></ListGroupItem>
              <ListGroupItem><a id="a" href="#profile3">kow about profile page</a></ListGroupItem>
              <ListGroupItem><a id="a" href="#payment">how to pay?</a></ListGroupItem>
              <ListGroupItem><a id="a" href="#success">know about payment success  </a></ListGroupItem>
              <ListGroupItem><a id="a" href="#failure">know about payment failure </a></ListGroupItem>
              <ListGroupItem><a id="a"href="#history">know about payment history</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={8} id="col" >

            <div id="login">
              <img src="/login.png" alt="sign in page" style={{ width: "100%", height: "100%" }} />

              <div>
                To use this login form:
                <ol>

                  <li>Roll Number: Enter your roll number in this field.</li>
                  <li>Password: Enter your password in this field.</li>
                  Click the “Login” button to access the system.
                  note:Remember to input your correct credentials, and you’ll be all set! 😊
                </ol>

              </div>
            </div>
            <div id="profile3">
              <img src="/profile.png" style={{ width: "100%", height: "100%" }}></img>
              <ol>

                <div>
                  <li> Profile Information:<br />
                    <span className='text-danger'>****************</span><br />
                    At the top of the image, you’ll see the profile section with the name “pattapu naresh” and some educational details.
                    This section provides information about the student using the system.</li>
                  <li>Contact Numbers:<br />
                    <span className='text-danger'>****************</span><br />
                    Below the profile section, there are two contact numbers labeled “II CSE WINDOWS.”
                    These numbers might be relevant for getting in touch with the computer science and engineering department.</li>
                  <li> Fee Details:<br />
                    <span className='text-danger'>****************</span><br />
                    Look for the section titled “FEE DETAILS.”
                    It provides information related to fees:
                    Total Fees: The overall fee amount.
                    Next Due: The amount due for the next payment.
                    Paid Fee: The amount already paid.
                    Total Transactions: The total number of financial transactions related to fees.</li>
                  <li>Important Links:<br />
                    <span className='text-danger'>****************</span><br />
                    Below the fee details, you’ll find a section labeled “IMPORTANT LINKS.”
                    These links might lead to additional resources or information:<br/>
                    FAQ: Frequently Asked Questions.<br/>
                    Docs: Documentation or relevant documents.<br/>
                    HELP: Assistance or support.<br/>
                    About Us: Information about the system or organization.</li>
                  Remember to explore these sections in the context of the specific student portal you’re using. If you have any further questions or need assistance, feel free to ask! 😊
                </div>
              </ol>
            </div>


            <div id="payment">
              <img src="/payment.png" style={{ width: "100%", height: "100%" }}></img>
              <ol>

                <div>
                  <li> Roll number:<br />
                    <span className='text-danger'>****************</span><br />
                    Enter your Roll Number in the provided field. For example, if your roll number is 21731A0537, input it here.</li>
                  <li>Select an Option:<br />
                    <span className='text-danger'>****************</span><br />
                    Choose the type of fee you are paying from the dropdown menu. In this case, it’s set to “college fee.”
                    If you need more details about the fee, click on “See fee details.”</li>
                  <li> amount:<br />
                    <span className='text-danger'>****************</span><br />
                    The system displays the amount to be paid (in this case, ₹10,036).
                    If you want a breakdown of this amount, click on “See fee details.”</li>
                  <li>payment method:<br />
                    <span className='text-danger'>****************</span><br />
                    Select your preferred payment method:
                    1 installment: Pay the entire amount in one installment.
                    Full fee: Pay the full fee.
                    Other: Choose this option if you have a different payment arrangement.</li>
                  <li>Terms and Conditions<br />
                    <span className="text-danger">************</span>

                  </li><li>
                    Proceed to Pay<br /><span>**************</span><br />
                    Click the “Proceed to Pay” button to complete the transaction.
                  </li>
                  Remember to fill 1in accurate details and review the terms before making the payment. 😊</div>
              </ol>
            </div>
            <div id="success">
              <img src="/success.png" style={{ width: "100%", height: "100%" }}></img>
              <ol>

                <div>
                  <li> Roll number:<br />
                    <span className='text-danger'>****************</span><br />
                    Enter your Roll Number in the provided field. For example, if your roll number is 21731A0537, input it here.</li>
                  <li>Select an Option:<br />
                    <span className='text-danger'>****************</span><br />
                    Choose the type of fee you are paying from the dropdown menu. In this case, it’s set to “college fee.”
                    If you need more details about the fee, click on “See fee details.”</li>
                  <li> amount:<br />
                    <span className='text-danger'>****************</span><br />
                    The system displays the amount to be paid (in this case, ₹10,036).
                    If you want a breakdown of this amount, click on “See fee details.”</li>
                  <li>payment method:<br />
                    <span className='text-danger'>****************</span><br />
                    Select your preferred payment method:
                    1 installment: Pay the entire amount in one installment.
                    Full fee: Pay the full fee.
                    Other: Choose this option if you have a different payment arrangement.</li>
                  <li>Terms and Conditions<br />
                    <span className="text-danger">************</span>

                  </li><li>
                    Proceed to Pay<br /><span>**************</span><br />
                    Click the “Proceed to Pay” button to complete the transaction.
                  </li>
                  Remember to fill 1in accurate details and review the terms before making the payment.  😊</div>
              </ol>
            </div>
            <div id="failure">
              <img src="/failure.png" style={{ width: "100%", height: "100%" }}></img>
              <ol>

                <div>
                  <li> Roll number:<br />
                    <span className='text-danger'>****************</span><br />
                    Enter your Roll Number in the provided field. For example, if your roll number is 21731A0537, input it here.</li>
                  <li>Select an Option:<br />
                    <span className='text-danger'>****************</span><br />
                    Choose the type of fee you are paying from the dropdown menu. In this case, it’s set to “college fee.”
                    If you need more details about the fee, click on “See fee details.”</li>
                  <li> amount:<br />
                    <span className='text-danger'>****************</span><br />
                    The system displays the amount to be paid (in this case, ₹10,036).
                    If you want a breakdown of this amount, click on “See fee details.”</li>
                  <li>payment method:<br />
                    <span className='text-danger'>****************</span><br />
                    Select your preferred payment method:
                    1 installment: Pay the entire amount in one installment.
                    Full fee: Pay the full fee.
                    Other: Choose this option if you have a different payment arrangement.</li>
                  <li>Terms and Conditions<br />
                    <span className="text-danger">************</span>

                  </li><li>
                    Proceed to Pay<br /><span>**************</span><br />
                    Click the “Proceed to Pay” button to complete the transaction.
                  </li>
                  Remember to fill 1in accurate details and review the terms before making the payment.  😊</div>
              </ol>
            </div>
            <div id="history">
              <img src="/history.png" style={{ width: "100%", height: "100%" }}></img>
              <ol>

                <div>
                  <li> Roll number:<br />
                    <span className='text-danger'>****************</span><br />
                    Enter your Roll Number in the provided field. For example, if your roll number is 21731A0537, input it here.</li>
                  <li>Select an Option:<br />
                    <span className='text-danger'>****************</span><br />
                    Choose the type of fee you are paying from the dropdown menu. In this case, it’s set to “college fee.”
                    If you need more details about the fee, click on “See fee details.”</li>
                  <li> amount:<br />
                    <span className='text-danger'>****************</span><br />
                    The system displays the amount to be paid (in this case, ₹10,036).
                    If you want a breakdown of this amount, click on “See fee details.”</li>
                  <li>payment method:<br />
                    <span className='text-danger'>****************</span><br />
                    Select your preferred payment method:
                    1 installment: Pay the entire amount in one installment.
                    Full fee: Pay the full fee.
                    Other: Choose this option if you have a different payment arrangement.</li>
                  <li>Terms and Conditions<br />
                 <a href="#go"><ArrowBarUp size={60} id="floating"/></a> 
                    <span className="text-danger">************</span>

                  </li><li>
                    Proceed to Pay<br /><span>**************</span><br />
                    Click the “Proceed to Pay” button to complete the transaction.
                  </li>
                  Remember to fill 1in accurate details and review the terms before making the payment. 😊</div>
              </ol>
            </div>
          
          </Col>
        </Row>
        
      </Container><br/><br/><br/><br/>
      <BottomNavbar />

    </div>
  )
}

export default Doc