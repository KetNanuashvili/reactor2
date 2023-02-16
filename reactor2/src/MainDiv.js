import './MainDiv.css';
import iconStarImg from './images/icon-star.svg';
import NumbersDiv from './Numbers';
import SubmitFun from './Submit';

function MainDiv() {
    return(
    <div className="MainDiv-class">
        <div className="smallStarDiv">
            <img className="StarImg" src={iconStarImg} alt="star picture"/>
        </div>
        <h1 className="h1-tag">How did we do?</h1>
        <p className="p-tag">Please let us know how we did with your support request. All feedback is appreciated to help 
        us improve our offering!</p>
        <NumbersDiv/>
        <SubmitFun/>
    </div>
    )
}


export default MainDiv;