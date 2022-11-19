import React,{useState,useEffect} from 'react';
import {Carousel} from 'antd';
import chicken from "../assets/images/chicken.jpg";
import meat from "../assets/images/meat.jpeg";
import combo from "../assets/images/combo.jpg";
import meat1 from "../assets/images/meat1.jpeg";
import ProductDetailsModel from '../components/models/ProductDetailsModel';
const contentStyle = {
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Home() {
    const renderSlider=()=> {
        return(
            <Carousel autoplay>
            <div>
              <img src={chicken} style={contentStyle}/>
            </div>
            <div>
              <img src={meat1} style={contentStyle}/>
            </div>
            <div>
              <img src={meat} style={contentStyle}/>
            </div>
            <div>
              <img src={combo} style={contentStyle}/>
            </div>
            
          </Carousel>
        )

    };
    return <div>{renderSlider()}</div>;
}

export default Home;
