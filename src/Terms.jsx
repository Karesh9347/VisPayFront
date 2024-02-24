import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Nav from './Nav';

const TermsAndConditions = () => {
  return (
    <div>
        <Nav/>
  
    <Container  style={{marginTop:"100px"}}>
      <Card>
        <Card.Body>
          <h2 className="mb-4">Terms and Conditions</h2>

          <h5>Payment Information</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis, tortor nec hendrerit accumsan, quam justo feugiat est,
            eget egestas turpis lectus vel neque.
          </p>
          <p>
            Nam ullamcorper, libero sed malesuada ultricies, arcu velit
            tincidunt ex, at fermentum justo metus ac ex. Ut non justo vitae
            justo venenatis tincidunt in non turpis. Suspendisse potenti.
          </p>

          <h5>Refund Policy</h5>
          <p>
            In case of any issues or discrepancies in payment, please contact
            our support team at{' '}
            <a href="nareshpattapu686@gmail.com">nareshpattapu686@gmail.com</a>.
          </p>
          <p>
            Refund requests must be submitted within 30 days of the transaction
            date. Refunds will be processed in accordance with our refund
            policy.
          </p>

          <h5>Late Payment</h5>
          <p>
            Payments made after the specified due date may be subject to late
            fees. Please ensure timely payments to avoid any additional charges.
          </p>

          <h5>Acceptance of Terms</h5>
          <p>
            By proceeding with the payment, you acknowledge that you have read,
            understood, and accepted the terms and conditions outlined above.
          </p>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default TermsAndConditions;
