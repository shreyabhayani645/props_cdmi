import './App.css';
import slider1 from './image/slide1.jpg';
import slider2 from './image/slide2.jpg';
import slider3 from './image/slide3.jpg';
import slider4 from './image/slide4.jpg';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const slider=[slider1,slider2,slider3,slider4];

function Slider(props){
          const opition={
               responsive:{
                 0:{
                   items:1,
                 },
                 600:{
                   items:1,
                 },
                 1000:{
                   items:1,
                 }
               }
             }
     return(
          <>
          <div className='slide_img'>
               <OwlCarousel className='' loop margin={10} nav {...opition}>
               {
                    slider.map((ele,index)=>{
                         return(
                              <div className='item' key={index}>
                                   <img src={ele} className=''></img>
                              </div>
                         )
                    })
               }
               </OwlCarousel>;
          </div>
          </>
     )
}
export default Slider;