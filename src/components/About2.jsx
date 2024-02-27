import  '../styles/App.css';
import Date from './Date';

const About2 = () => {
    return (
        <div className='container' id="AboutUS">
            <div className="date_container">
                <div className="left_date">
                    <Date day="28" month="October" subtxt="th" />
                </div>
                <hr className="line" />
                <div className="right_date">
                    <Date day="31" month="October" subtxt="st" />
                </div>
            </div>
            <br />
            <div className="timer_container">
                <h1 className="title">
                    It's Show<span>time</span>
                </h1>
            </div>
        </div>
    );
}

export default About2;
