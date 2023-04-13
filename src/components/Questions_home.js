import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase_config";
import { collection, doc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { BiAddToQueue } from "react-icons/bi";

import ReactModal from "react-modal";
import AddQuestion from "./Add_Question";
import NavBar from "./NavBar";
export default function QuestionsHome() {
    var [allquestions, setAllquestions] = useState([])
    const navigate = useNavigate();
    const questionsref = collection(db, "questions")
    const usersref = doc(db, "users", "reddyvijay1667@gmail.com")
    var [currentuser, setCurrentuser] = useState({})
    var [openadd, setOpenadd] = useState(false)
    var [openmodal, setOpenmodal] = useState(false);
    window.addEventListener("load", (event) => {
        console.log("PAGE LOADED")
    })
    useEffect(() => {
        const get_questions = query(questionsref, orderBy("q_number", "asc"))
        const get_users = query(usersref)
        onSnapshot(get_users, (doc) => {
            console.log(doc.data())
            setCurrentuser(doc.data())
        })
        onSnapshot(get_questions, (snapshot) => {
            console.log(snapshot.docs)
            setAllquestions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        onSnapshot(questionsref, (doc) => {
            console.log(doc)
        })

    }, [])
    function toggleModal() {
        setOpenmodal(!openmodal)
    }
    return (
        <>
        <ReactModal isOpen={openmodal} ariaHideApp={false}>
                    <AddQuestion toggleModal={toggleModal} />
                </ReactModal>
            <div>

                <NavBar />
                <div className="container py-4">

                    {console.log(allquestions)}
                    {allquestions.map((question, index) => {
                        console.log(currentuser)
                        if (currentuser.questions_solved.includes(question.q_number)) {
                            return (
                                <div key={index} onClick={() => { console.log("Clicked"); navigate(`/question/${question.q_number}`) }}>
                                    <Question description={question.description} status="&#9989;" title={question.q_number + ". " + question.title} />

                                </div>)
                        }
                        else {
                            return (
                                <div key={index} onClick={() => { console.log("Clicked"); navigate(`/question/${question.q_number}`) }}>
                                    <Question description={question.description} status="&#8767;" title={question.q_number + ". " + question.title} />

                                </div>)
                        }

                    })}
                    <div className="">
                        <div className="position-fixed bottom-0 end-0 my-4 me-4">
                            <button className="p-3 rounded-pill " style={{ fontSize: "large", backgroundColor: "#696eff", color: "white", border: "none", fontFamily: "Encode Sans" }} onClick={toggleModal}>Add Question</button>
                        </div>
                    </div>

                    {/* <div className="p-1 ">
                Add Question  <button onClick={()=>{
                    navigate("/add_question")
                }} className="btn"  style={{padding:0}}><img src="https://img.icons8.com/ios/25/null/plus-2-math.png"/></button> 
            </div> */}

                </div>

            </div>
        </>
    )
}