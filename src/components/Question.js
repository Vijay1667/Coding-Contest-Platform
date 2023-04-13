import React from "react";
export default function Question(props) {
    return (
        <div className="container p-3 my-2 rounded-2 border border-dark border-2 each_question" >
            <div className="float-end" > {props.status} </div>
            <div className="h4">{props.title}</div>
            
            <div className="">{props.description}</div>
                
                
        </div>
    )

}