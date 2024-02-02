import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import logo1 from './image/creative-logo-blue.svg';
import Header from './Header';
import Logoheader from './Logoheader';
import Counter from './Counter';
import Recruitment from './Recruitment';
import Course from './Course';
import Creative from './Creative';
import Demandcourse from './Demandcourse';
import Footer from './Footer';
import Slider from './Slider';


const info=[
  {
    "name":"info@gmail.com",
    "logo":"Verify Certificate",
    "icon":<TfiEmail></TfiEmail>,
    "icon1":<FaCertificate></FaCertificate>,
    "have":"HAVE ANY QUESTION?+91 90333 16003",
    "soc1":<TiSocialFacebook></TiSocialFacebook>,
    "soc2":<TiSocialTwitter></TiSocialTwitter>,
    "soc3":<TiSocialGooglePlus></TiSocialGooglePlus>,
    "soc4":<TiSocialLinkedin></TiSocialLinkedin>,
    "soc5":<TiSocialInstagram></TiSocialInstagram>,
    "soc6":<TiSocialYoutube></TiSocialYoutube>,
    "soc7":<FaWhatsapp></FaWhatsapp>,
  }
]

const logo=[
  {
      "logo1":{logo1},
      "ul1":"HOME",
      "ul2":"COURSE",
      "ul3":"ACTIVITIES",
      "ul4":"BLOG",
      "ul5":"KNOW US",
      "ul6":"GET IN TOUCH",
      "ul7":"STUDENT ZONE"
  }
]
const slider=[
  {
       "slider_img":(`./image/main.jpg`)
  }
]
const count=[
  {
    "cnt_img":require(`./image/counter.jpg`),
  }
]

const student=[
  {
    "student":"STUDENT PLACEMENT",
    "our":"OUR RECRUITMENT PARTNERS",
    "our_img1":require(`./image/w1.png`),
    "our_img2":require(`./image/w2.png`),
    "our_img3":require(`./image/w3.png`),
    "our_img4":require(`./image/w4.jpg`),
    "our_img5":require(`./image/w5.png`),
    "our_img6":require(`./image/w6.png`),
  }
]
const demande=[
  {
      "o_demand":"Our Demanded Course -",
       "demand_t":"Flutter Training Course",
       "demand_t1":" 3ds Max Civil Training Course",
       "demand_t2":"Angular Js Training Institute In Surat",
       "demand_t3":"  React Js Training Institute In Katargam",
       "demand_t4":" Game Design Training Institute In Varachha",
       "demand_t5":" Adobe Xd Design Training Institute In Varachha",
       "demand_t6":"  Computer Institutes In Yogichowk ",
       "demand_t7":"Video Editing Training Institute In Mota Varachha",
  }
]
const footer=[
  {
    "foot_t":"Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.",
    "follow":"FOLLOW US ON",
    "foot_i":<TiSocialFacebook></TiSocialFacebook>,
    "foot_i1":<TiSocialTwitter></TiSocialTwitter>,
    "foot_i2":<TiSocialGooglePlus></TiSocialGooglePlus>,
    "foot_i3":<TiSocialLinkedin></TiSocialLinkedin>,
    "foot_i4":<TiSocialInstagram></TiSocialInstagram>,
    "foot_i5":<TiSocialYoutube></TiSocialYoutube>,
    "foot_i6":<FaWhatsapp></FaWhatsapp>,
    "link":"FEATURE LINKS",
    "foot1":"About Us",
    "foot2":"Blogs",
    "foot3":"Join Us",
    "foot4":"Company Login",
    "foot5":"Certificate Verfication",
    "contact":"CONTACT US",
    "head":"HEAD OFFICE - YOGICHOWK",
    "add":"401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.",
    "branch":"OTHER BRANCHES",
    "place1":" Katargam",
    "place2":" Mota Varachha",
    "place3":" Adajan",
    "place4":" Navsari",
    "copy":" 2024 All Rights Reserved by Creative Design & Multimedia Institute."
  }
]

function App(){
  return(
    <>  
        {/* top header */}
        {
        info.map((ele,index)=>{
          return(

            <Header key={index} name={ele.name} logo={ele.logo} icon={ele.icon} icon1={ele.icon1} have={ele.have} soc1={ele.soc1} soc2={ele.soc2} soc3={ele.soc3} soc4={ele.soc4} soc5={ele.soc5} soc6={ele.soc6} soc7={ele.soc7}></Header>

          )
        })
      }
      {
        logo.map((ele,index)=>{
          return(
           <Logoheader key={index} logo1={ele.logo1} ul1={ele.ul1} ul2={ele.ul2} ul3={ele.ul3} ul4={ele.ul4} ul5={ele.ul5} ul6={ele.ul6} ul7={ele.ul7}></Logoheader>
          )
        })
      }
      <Slider></Slider>
      <Course></Course>
      {
        count.map((ele,index)=>{
          return(
            <Counter key={index} cnt_img={ele.cnt_img}></Counter>
          )
        })
      }
      <Creative></Creative>
      {
        student.map((ele,index)=>{
          return(
          <Recruitment key={index} our_img1={ele.our_img1} our_img2={ele.our_img2} our_img3={ele.our_img3} our_img4={ele.our_img4} our_img5={ele.our_img5} our_img6={ele.our_img6}></Recruitment>
            
          )
        })
      }
      {
        demande.map((ele,index)=>{
          return(
            <Demandcourse key={index} o_demand={ele.o_demand} demand_t={ele.demand_t} demand_t1={ele.demand1_t1} demand_t2={ele.demand1_t2} demand_t3={ele.demand1_t3} demand_t4={ele.demand1_t4} demand_t5={ele.demand1_t5} demand_t6={ele.demand1_t6}></Demandcourse>
          )
        })        
      }
      {
        footer.map((ele,index)=>{
          return(
            <Footer key={index} foot_t={ele.foot_t} follow={ele.follow} foot_i={ele.foot_i} foot_i1={ele.foot_i1} foot_i2={ele.foot_i2} foot_i3={ele.foot_i3} foot_i4={ele.foot_i4} foot_i5={ele.foot_i5} foot_i6={ele.foot_i6} link={ele.link} foot1={ele.foot1} foot2={ele.foot2} foot3={ele.foot3} foot4={ele.foot4} foot5={ele.foot5} contact={ele.contact} head={ele.head} add={ele.add} branch={ele.branch} place1={ele.place1} place2={ele.place2} place3={ele.place3} place4={ele.place4} copy={ele.copy}></Footer>
          )
        })
      }        
    </>
  )
}
export default App;