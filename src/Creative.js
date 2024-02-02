import './App.css';
const creative=[
     {
          "create_img":require(`./image/1.PNG`),
          "creative_menu":"Latest Curriculum",
          "creative_t":"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
     },
     {
       "create_img":require(`./image/2.PNG`),
       "creative_menu":"Latest Curriculum",
       "creative_t":"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
     },
     {
          "create_img":require(`./image/3.PNG`),
          "creative_menu":"Latest Technology",
          "creative_t":"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
     },
     {
          "create_img":require(`./image/4.PNG`),
          "creative_menu":"Interview Assistance",
          "creative_t":"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
     },
     {
          "create_img":require(`./image/5.PNG`),
          "creative_menu":"Free Upgradation",
          "creative_t":"We will be provided free upgradation for any newer version of the course you have."
     },
     {
          "create_img":require(`./image/6.PNG`),
          "creative_menu":"Lifetime Support",
          "creative_t":"We will provide you lifetime support on all the courses you learned from us."
     },
   ]
     function Creative(){
     return(
          <>
          <div className='gray'>
               <h6>---READ OUR DIFFERENCE</h6>
               <h1>WHY CHOOSE CREATIVE</h1>
               <div className='cretive_img'>
                    <div className='container d-flex'>
                         <div className='allimage creative_first'>
                         {
                              creative.map((ele,ind)=>{
                                   return(
                                   <>                                                
                                             <div className='creative_menu'>
                                                  <div className='creative_img'>
                                                       <img src={ele.create_img}></img>
                                                  </div>
                                                  <h3>{ele.creative_menu}</h3>
                                                  <p className='creative_t'>{ele.creative_t}</p>
                                             </div>                          
                                   </>
                              )
                         })
                    }
               </div>
          </div>
          </div>
     </div>
     </>
     )
}
export default Creative;