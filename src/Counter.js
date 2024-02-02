import './App.css';

function Counter(props){
     return(
          <>
               <div className='counter'>
                    <div className='counter_img'>
                        <img src={props.cnt_img}></img>
                        <div className='blue'></div>
                    </div>
                  </div> 
          </>
     )
}
export default Counter;