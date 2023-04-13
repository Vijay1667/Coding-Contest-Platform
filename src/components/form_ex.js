import React, { useState } from "react";
export default function Form1(){
    const [name,setName]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        setName("")
        console.log("Submission Succesful")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Details:</legend>
                    <div>
                        <label htmlFor="formname">Name:</label>  <input type="text" id="formname" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}