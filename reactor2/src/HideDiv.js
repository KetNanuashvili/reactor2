import './HideDiv.css';
import illustration from './images/illustration-thank-you.svg';

function HideDivFun() {
    return (
    <div className='HideDiv hideseconddiv'>
        <img className="img-height" src={illustration} alt="illustration-thank-you"></img>
        <div className='select-div'>
            <h3 className="hide-h3">You selected 4 out of 5</h3>
        </div>
        <h4 className="hide-h4">Thank you!</h4>
        <p className="hide-p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
    )
}


export default HideDivFun;