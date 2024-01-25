import React from 'react';
import { Carousel } from 'react-bootstrap';
import bg_1 from './images/bg_1.jpg';
import bg_2 from './images/bg_2.jpg';

const Body = () => (
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg_1}
        alt=""
      />
    <Carousel.Caption style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%',backgroundColor: 'transparent' }}>
      <h1 style={{ color:'white',fontSize:'50px',textAlign:'center',fontWeight:'bold' }}>Kids Are The Best <span>Explorers In The World</span></h1>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg_2}
        alt=""
      />
        <Carousel.Caption style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%',backgroundColor: 'transparent' }}>
        <h1 style={{color:'white',fontSize:'50px', textAlign:'center' ,fontWeight:'bold'}}>Perfect Learned<span> For Your Child</span></h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Body;
