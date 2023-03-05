import { useState } from 'react';
import './Numbers.css';

function NumbersDiv(){
    const [isCklicking, setIsClicking]= useState(true);


    function handleClick(e) {
        setIsClicking(false)
    }
 

    return(
        <div>
           <div className='MainNumbersDiv'>
               <div className={`smallNumbers-div ${isCklicking? "": "changeCollor"}`} onClick={handleClick} >
                <p className='p-number'>1</p>
                </div>
                <div className={`smallNumbers-div ${isCklicking? "": "changeCollor"}`} onClick={handleClick}>
                   <p className='p-number'>2</p>
                </div>
                <div className={`smallNumbers-div ${isCklicking? "": "changeCollor"}`} onClick={handleClick}>
                   <p className='p-number'>3</p>
                </div>
                 <div className={`smallNumbers-div ${isCklicking? "": "changeCollor"}`} onClick={handleClick}>
                  <p className='p-number'>4</p>
                </div>
            <div  className={`smallNumbers-div ${isCklicking? "": "changeCollor"}`} onClick={handleClick}>
                 <p className='p-number'>5</p>
                </div>
            </div>
            <button className={`submit ${isCklicking? "": "changeSubmitColor"} ` } >
                SUBMIT
           </button>
    </div>
    );
}

export default NumbersDiv;