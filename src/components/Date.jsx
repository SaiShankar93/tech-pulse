
function Date(props){
    return (
        <div className=" text-center">
            <h1 className="relative text-9xl">
                {props.day} <span className=" text-4xl absolute  -ms-3">{props.subtxt}</span>
            </h1>
            <span className="text-4xl">🗓️</span><span className=" text-center text-5xl">{props.month}</span>
         </div>
)
}

export default Date;