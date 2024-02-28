import React from 'react';

import './App.css';

const Nav = () => {
  return (
    <div className='fixed-top'>
     
        <div className='d-flex justify-content-around' id="nav">
       
            <div id="img1" style={{width:"25%",height:"90px"}}>
              <img src="/vis.png" alt="" style={{width:"50%",height:"90%",marginLeft:"40px"}}/>
            </div>
          
            <div id="img2" style={{width:"60%",height:"90px"}} className="  ">
              <img src="/banner2.png" alt=""style={{width:"100%",height:"100%"}}/>
             
             
            </div>
          
            <div id="img3" style={{width:"25%",height:"90px"}}>
              <img src="/founder.png" alt="" style={{width:"50%",height:"90%",marginLeft:"30px"}} />
            </div>

          
      </div>
      
    </div>
  );
}

export default Nav;
