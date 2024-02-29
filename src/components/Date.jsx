import '../styles/Date.css';
function Date(props){
    return (
        <div className="mx-auto text-center">
            <h1 className="date_title">
                {props.day} <sup>{props.subtxt}</sup>
            </h1>
            <h2 className="month_title ">{props.month}</h2>
    </div>
)
}

export default Date;