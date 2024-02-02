import './App.css';
import logo from './image/creative-logo-blue.svg';

function Logoheader(props){
     return(
          <>
          <div className="logo">
               <div className='logo_img'>
                    <img src={props.logo1}></img>
               </div>
               <div className='main_menu'>
                    <ul style={{marginLeft:"200px",color:"#ffbc06"}}>{props.ul1}</ul>
                    <ul>{props.ul2}</ul>
                    <ul>{props.ul3}</ul>
                    <ul>{props.ul4}</ul>
                    <ul>{props.ul5}</ul>
                    <ul>{props.ul6}</ul>
                    <ul>{props.ul7}</ul>
               </div>
          </div>
          </>
     )
}
export default Logoheader;