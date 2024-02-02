import React from 'react';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Recruitment(props){
     const opition={
          responsive:{
            0:{
              items:2,
            },
            600:{
              items:3,
            },
            1000:{
              items:6,
            }
          }
        }
     return(
          <>
              <div className="read">
                    <h6>---READ OUR DIFFERENCE</h6>
                    <h1>WHY CHOOSE CREATIVE</h1>
               </div>
               <OwlCarousel className='owl-theme' loop margin={10} nav {...opition} id="require">
                    <div class='item w' className='w'>
                         <img src={props.our_img1}></img>
                    </div>
                    <div class='item w' className='w'>
                        <img src={props.our_img2}></img>
                    </div>
                    <div class='item w' className='w'>
                         <img src={props.our_img3}></img>
                    </div>
                    <div class='item w' className='w'>
                         <img src={props.our_img4}></img>
                    </div>
                    <div class='item w' className='w'>
                         <img src={props.our_img5}></img>
                    </div>
                    <div class='item w' className='w'>
                         <img src={props.our_img6}></img>
                    </div>
                    </OwlCarousel>;
          </>
     )
}
export default Recruitment;