
import React, { useState } from 'react';
import Nav from './Nav';
import { Card, CardBody,Row, Container } from 'react-bootstrap';
import { FileMinusFill, PlusCircle } from 'react-bootstrap-icons';

const questions = [
    {
        id: 1,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    },
    {
        id: 2,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    },
    {
        id: 3,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    },
    {
        id: 4,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    }
    ,
    {
        id: 5,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    },
    {
        id: 6,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    },
    {
        id: 7,
        question: "how to download pdf?",
        answer: "hjvdsv lorem1nb sd,jbj,bjbdsjkb bxnaresh gfanesh sjuresh mahesh rampraad a vamsi ganesh syam shiva sandeep "
    }
];

const Help = () => {
    const [answers, setAnswers] = useState({});
  
    const showAnswer = (Id) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [Id]: !prevAnswers[Id],
      }));
    };
  
    return (
      <div>
        <Nav />
        <Container style={{ marginTop: "110px" }}>
          <Row lg={1}>
            {questions.map((item) => (
              <Card key={item.id} id='help-card'>
                <CardBody>
                  <div className='d-flex justify-content-between'>
                    <div>
                      {item.question}
                      <hr />
                      <div>{answers[item.id] && <p>{item.answer}</p>}</div>
                    </div>

                    {item.answer.length > 0 ? (
                      <PlusCircle onClick={() => showAnswer(item.id)} />
                    ) : (
                      <FileMinusFill onClick={() => showAnswer(item.id)} />
                    )}
                  </div>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Container>
       
      </div>
    );
  };
  
  export default Help;
  