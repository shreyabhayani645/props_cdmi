import { FaStar } from "react-icons/fa";

var course=[
    {
      "id":1,
      "name":"Development Courses",
      "status":<FaStar></FaStar>,
      "type":"Know More..!",
      "img":require('./image/1.jpg')
},
{
      "id":2,
      "name":"Design Courses",
      "status":<FaStar></FaStar>,
      "type":"Know More..!",
      "img":require('./image/2.jpg')
},
{
    "id":3,
    "name":"Programming IT",
    "status":<FaStar></FaStar>,
    "type":"Know More..!",
    "img":require('./image/3.jpg')
},
{
    "id":4,
    "name":"Trendy Courses",
    "status":<FaStar></FaStar>,
    "type":"Know More..!",
    "img":require('./image/4.jpg')
},
{
    "id":5,
    "name":"Civil-Mech. Engineering",
    "status":<FaStar></FaStar>,
    "type":"Know More..!",
    "img":require('./image/5.jpg')
},
{
    "id":6,
    "name":"Business Development",
    "status":<FaStar></FaStar>,
    "type":"Know More..!",
    "img":require('./image/6.jpg')
}

]

function Course()
{
    return(
        <>
        <div className="read">
            <h6>---READ OUR DIFFERENCE</h6>
            <h1>WHY CHOOSE CREATIVE</h1>
        </div>
        <div className='cretive_img'>
            <div className='container '>
                <div className='allimage first'>
            {
            
            course.map((ele,ind)=>{
              return(
                  <>
                    <div className='one'>
                          <div className='img'>
                              <img src={ele.img}></img>
                          </div>
                          <h2 className="course_name">{ele.name}</h2>
                        <p className='br_line'></p>
                        <div className='main_star'>
                            <div className='star'>
                                {ele.status} 
                                {ele.status} 
                                {ele.status} 
                                {ele.status}
                                {ele.status}
                            </div>
                            <button className='more'>
                              {ele.type}
                            </button>
                        </div> 
                      </div>
                    </>
                )
            })
        }
        </div>
    </div>
</div>
    </>
    )
}
export default Course;