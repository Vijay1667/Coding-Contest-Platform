import React from "react";

export default function Todo(props){
    return(
        <div>
            <h4>{props.id}</h4>

            <input/>
            <h5>{props.createdAt}</h5>
        </div>
    )

}