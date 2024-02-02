import './App.css';
// import { FaCertificate } from "react-icons/fa6";
// import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube} from "react-icons/ti";
// import { FaWhatsapp } from "react-icons/fa";

function Header(props) {
     return(
          <>
               <div className="info">
                    <div className='email'>
                    <p>{props.icon}</p>
                    <p className='icon'>{props.name}</p>
                    </div>
                    <div className='email'>
                    <p>{props.icon1}</p>
                    <p className='icon'>{props.logo}</p>
                    </div>
                    <div>
                    <p className='mob'>{props.have}</p>
                    </div>
                    <div className='social'>
                         <p>{props.soc1}</p> 
                         <p>{props.soc2}</p>
                         <p>{props.soc3}</p>
                         <p>{props.soc4}</p>
                         <p>{props.soc5}</p>
                         <p>{props.soc6}</p>
                         <p>{props.soc7}</p>
                    </div>                   
               </div>
               
          </>
     )
}
export default Header;