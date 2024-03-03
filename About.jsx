import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from './Nav';
import { Col, Row, Card, Container, CardImg } from 'react-bootstrap';
import './about.css';
import { HouseExclamation, Person, PersonAdd, PersonBadge } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>

            <Nav />


         <Link to="/profile" ><Button className='bg-success'variant='light' style={{position:"fixed"}}>   <Person size={40}/> profile  </Button></Link>  

            <div className="college-info-container" style={{ marginTop: "100px" }}>
       <h1 className='title'>About PBR Visvodaya Institute of Technology & Science</h1>
                <h3 className='text-center'>A place for learning, discovery, innovation, expression, and development</h3>
              
               
              <Row>
                    <Col md={7}>
                        <div className="content">
                            <p>
                                With the conviction that Education is the only weapon that can eradicate poverty,
                                Dr. Dodla Ramachandra Reddy established Visvodaya Society in 1952 in Kavali.
                                PBR Visvodaya Institute of Technology & Science was established under the aegis
                                of Visvodaya Society in 1998 with an initial intake of 180 students in the
                                Undergraduate courses of Electronics and Communications Engineering, Computer Science
                                Engineering, CSE-Artificial Intelligence, CSE-Internet of Things, Artificial
                                Intelligence and Machine Learning, Electronics and Electrical Engineering, and Mechanical Engineering.
                            </p>

                            <p>
                                At present, the total sanctioned intake is 1482 including 1200 in UG programme,
                                102 in five MTech Specializations and 180 in MBA.
                            </p>
                            
               

                            <p>
                                PBR Visvodaya Institute of Technology & Science is awarded permanent affiliation by JNTUA, Anantapuramu.
                                It had been accredited by NAAC with an A grade in 2015 for 5 years. The departments of ECE, CSE,
                                EEE, and ME had been accredited by NBA at the UG level for three years in 2010.
                                The institution has been given 2(f) and 12(B) by the UGC in the year 2013. Recognizing the potential
                                of the institution, the software giant TCS has accredited it in 2010 and KPIT Cummins, Pune
                                has given its accreditation in 2013.
                            </p>

                            <p>
                                Faculty is the backbone of any educational institution. The institution has 166 teaching staff
                                including 24 Professors, 34 Associate Professors, and 110 Assistant Professors. Apart from
                                direct academic activity, the teaching staff is involved in research activities as well as in
                                other developmental activities contributing to the growth of the institution.
                            </p>
                        </div>

                        <Button variant="primary" className="learn-more-button">
                            Learn More
                        </Button>
                    </Col>


                    <Col md={5} className='mt-2'>
                     
                        <Container>
                            <iframe
                                title="PBRVITS"
                                width="100%"
                                height="450px"
                                src="https://www.youtube.com/embed/5QS-Kqn1Vq0"
                                frameBorder="2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </Container>
                    </Col>
                </Row>
  

                <Container>
                    <iframe
                        title="PBRVITS Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.42671001596!2d79.97871887819393!3d14.913301548509772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b8c951fd6b1%3A0xfb1af9ddad928446!2sVisvodaya%20Engineering%20College!5e0!3m2!1sen!2sus!4v1709298486431!5m2!1sen!2sus"
                        style={{ border: "2px solid black", width: "100%", height: "auto" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Container>
            </div>
        </div>

    );
};

export default About;
