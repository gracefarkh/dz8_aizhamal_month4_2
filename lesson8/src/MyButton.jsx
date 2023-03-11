import React from "react";


const MyButton=(props)=>{
    return(
        <button className="myBtn">
                {props.children}
        </button>
    )
}
export default MyButton