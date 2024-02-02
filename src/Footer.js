import './App.css';
import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube} from "react-icons/ti";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar,FaPlay,FaQuoteRight,FaUniversity } from "react-icons/fa";



function Footer(props){
     return(
          <>
               <div className='footer'>
                    <div className='footer_first'>
                        {/* <div className='logo_img'>
                            <img src={logo}></img>
                        </div> */}
                        <p className='footer_t'>{props.foot_t}</p>
                        <h5 className='fllow'>{props.follow}</h5>
                        <div className='footer_icon'>
                          <button className='icon'>{props.foot_i}</button>
                          <button className='icon'>{props.foot_i1}</button>
                          <button className='icon'>{props.foot_i2}</button>
                          <button className='icon'>{props.foot_i3}</button>
                          <button className='icon'>{props.foot_i4}</button>
                          <button className='icon'>{props.foot_i5}</button>
                          <button className='icon'>{props.foot_i6}</button>
                        </div>
                    </div>
                    <div className='footer_sed'>
                      <h6 className='footer_first'>{props.link}</h6>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>{props.foot1}</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>{props.foot2}</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>{props.foot3}</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>{props.foot4}</p>
                      <p><TbArrowBigRightLinesFilled></TbArrowBigRightLinesFilled>{props.foot5}</p>
                    </div>
                    <div className='footer_third'>
                      <h2 className='contact'>{props.contact}</h2>
                      <h6 className='ofc'>{props.head}</h6>
                      <p className='add'>{props.add}</p>
                      <h6 className='ofc'>{props.branch}</h6>
                      <p><FaUniversity ></FaUniversity  > {props.place1}</p>
                      <p><FaUniversity ></FaUniversity  > {props.place2}</p>
                      <p><FaUniversity ></FaUniversity  > {props.place3}</p>
                      <p><FaUniversity ></FaUniversity  >{props.place4}</p>
                    </div>  
                  </div>       
                  <div className='copy'>{props.copy}</div>
          </>
     )
}
export default Footer;