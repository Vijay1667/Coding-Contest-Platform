import React from "react";
import '../App.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { db } from "./firebase_config";
import { collection, doc, onSnapshot, query, where ,getDocs, getDoc, addDoc, setDoc} from "firebase/firestore";
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function AddQuestion(props) {
    window.addEventListener("offline",(e)=>{
        console.log("NET OFFLINE")
    })
    async function uploadquestion(event) {
        event.preventDefault(); 
        
        const questionsref = collection(db, "questions")
        const questiondoc=doc(db,"questions",document.getElementById("question_title").value)
        const get_questions = await getDocs(questionsref)
        const questions_length=get_questions.docs.length
        console.log(document.getElementById("question_title").value)
        const check_title = await getDocs(query(questionsref,where("title","==",document.getElementById("question_title").value)))
        if(check_title.docs.length!=0){
            console.log("A questions with this title is already present, please modify the title")
            NotificationManager.warning('ERROR', 'Please modify the title, A questions with this title is already present');
            return;
        }
        else{
            await setDoc(questiondoc,{title:document.getElementById("question_title").value,description:document.getElementById("question_description").value,q_number:(questions_length+1)})
            console.log("ADDED");
            NotificationManager.success('Success', 'Questions added succesfully');
            document.getElementById("question_title").value="";
            document.getElementById("question_description").value="";
        }
        console.log(check_title.docs)
    }
    return (
        <div>
            <form onSubmit={uploadquestion}>
                <div className="container my-4">
                    {/* <h4 className="add_q_text">Title:</h4> */}
                    <div className="my-2">
                        <TextField required id="question_title" style={{ width: "100%" }} label="Title" placeholder="Enter the problem title" />
                    </div>
                    {/* <input className="add_q_boxes" style={{ width: "100%", height: "5vh" }} /> */}
                    {/* <h4 className="add_q_text"> Description:</h4> */}
                    <div className="my-2">
                        <TextField required id="question_description" style={{ width: "100%" }} label="Description" multiline minRows={3} placeholder="Enter the problem description" />
                    </div>
                    {/* <textarea className="add_q_boxes_descr" style={{ width: "100%", height: "5vh" }} /> */}
                    <div className="py-1">
                        <Button type="submit" className="bg-gradient" variant="contained" style={{ backgroundColor: "#69bcff", color: "black", border: "1px solid black", fontFamily: "Encode Sans", fontSize: "large", textTransform: "none" }} size="large">Submit</Button>
                        {/* <button className="add_q_button me-2 my-2">Submit</button> */}
                        {/* <button className="add_q_cancel mx-2 my-2">Cancel</button> */}
                        <Button type="cancel" onClick={props.toggleModal} variant="outlined" className="ms-2 bg-gradient add_q_cancel" style={{ fontFamily: "Encode Sans", fontSize: "large", textTransform: "none" }} size="large">Cancel</Button>
                    </div>


                </div>
            </form>
            <NotificationContainer/>
        </div>
    )
}