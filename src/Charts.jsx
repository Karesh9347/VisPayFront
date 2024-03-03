import React from 'react'
import { Chart } from 'react-google-charts';
import {Row,Col,Card} from 'react-bootstrap'
import AdminNav from './AdminNav';
import Login from './Login';
const Charts = () => {
    const data = [
        ["student type", "number of students"],
        ["counselling", 11],
        ["NRI", 2],
        
      ];

     const options = {
        title: "student comparisons",
      };
      const storedToken=localStorage.getItem("token")
  return (
    <div>{
      storedToken?(
        <div>
        <AdminNav/>
        <Row>
            <Col>
            
          <Card>
          <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
    </Card>
          
            </Col>
        </Row>
        </div>):(<Login/>)}
    </div>
  )
}

export default Charts
