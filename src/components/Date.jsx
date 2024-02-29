import '../styles/Date.css';
function Date(props){
    return (
        <div className="mx-auto text-center">
            <h1 className="date_title ">
                {props.day} <sup>{props.subtxt}</sup>
            <span className="month_title">{props.month}</span>
            </h1>
    </div>
)
}

export default Date;