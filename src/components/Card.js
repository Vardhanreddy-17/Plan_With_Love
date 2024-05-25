import { useState } from "react";


function Card({id,name,info,image,price,removeTour}){

    const[readmore,setReadmore] = useState(false)
    const description = readmore? info :`${info.substring(0,200)}...`;

    function readmorehandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="card">
        <img src={image} className="cityImage"></img>

        <div className="tourInfo">
            <div className="tourDetails">
                <h4 className="tourPrice">{price}</h4>
                <h4 className="tourCityName">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmorehandler}>
                {readmore?`Show Less`:`Read More`}
                </span>
            </div>
        </div>
        <button className="notIntrestedBtn" onClick={()=>removeTour(id)}>
            Not Intrested
        </button>
        </div>
    )
}

export default Card;