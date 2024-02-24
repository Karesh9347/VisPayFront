import React from 'react';
import { Link } from 'react-router-dom';

import { ClockHistory, CreditCardFill, PersonBadgeFill } from 'react-bootstrap-icons';
import { Button, ButtonGroup } from 'react-bootstrap';

const BottomNavbar = () => {


    return (
        <div fixed="bottom" bg="light" className='fixed-bottom'>
           
            
            
            <ButtonGroup style={{ justifyContent: "space-around", display: "flex" }}>
                   
                        <Button>
                            <div>
                                <Link to="/profile" className="nav-link" >
                                    <PersonBadgeFill size={24} /><br />
                                    <span>profile</span>
                                </Link>
                            </div>
                        </Button>
                        
                        <Button>
                            <div>
                                <Link to="/payment" className="nav-link">
                                    <CreditCardFill size={24} /><br />
                                    <span>Pay</span>
                                </Link>
                            </div>
                        </Button>
                        <Button>

                            <div>
                                <Link to="/history" className="nav-link" >
                                    <ClockHistory size={24}/><br/>
                                    <span>History</span>
                                </Link>
                            </div>

                        </Button>
            </ButtonGroup>
       </div>
    );
};

export default BottomNavbar;
