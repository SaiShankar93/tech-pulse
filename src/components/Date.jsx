
function Date(props){
    return (
        <div className=" text-center">
            <h1 className="relative text-9xl">
                {props.day} <span className=" text-4xl absolute lg:-ms-10 -ms-4">{props.subtxt}</span>
            <span className=" text-5xl">{props.month}</span>
            </h1>
         </div>
)
}

export default Date;