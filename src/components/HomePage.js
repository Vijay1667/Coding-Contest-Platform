import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Typewriter from 'typewriter-effect/dist/core';
import { motion } from "framer-motion"
import './particles.min.js'

export default function HomePage() {

    useEffect(() => {
        var typewriter = new Typewriter(document.getElementById("welcome_message"), {
            loop: false,
            delay: 75,
        });
        typewriter.typeString("Welcome to Code-V").start()
        var typewriter2 = new Typewriter(document.getElementById("continue_msg"), {
            loop: true,
            delay: 75,
        });
        typewriter2.pauseFor(1500).typeString("<code>code</code> seamlessly").pauseFor(500).deleteChars(15).typeString("<i>learn</i>  endlessly")
            .pauseFor(3000).start()
        var typewriter3 = new Typewriter(document.getElementById("get_started_msg"), {
            loop: true,
            delay: 4,
        });
        typewriter3.typeString("<br>print('Hello World!')<br><br>").pauseFor(700).deleteChars(22).typeString("class Main {<br>       public static void main(String[] args){<br>            int st=5;<br>            System.out.println(st);<br>        } <br>}<br>")
            .pauseFor(500).deleteChars(145).typeString("<br>#include \< iostream \><br>        int main() {<br>            std::cout << 'Hello World!';<br>            return 0;<br>        }<br>}<br>")
            .pauseFor(3000).start()
    }, [])
    return (
        <div >
            <NavBar />
            <div className="home_body"  >

                <div className="container-fluid">
                    <div className="row" style={{ height: "90vh" }}>
                        <div className="col-lg-8 col-12 first_col_home d-flex flex-column align-items-center justify-content-center" style={{ zIndex: "10" }}>
                            <div className="welcome_message text-center" id="welcome_message">
                                Welcome to Code-V.
                            </div>
                            <div className="sub_1_first text-center" id="sub_1_first">
                                where you can <span id="continue_msg"></span>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center position-relative">
                            {/* <button className="started_button rounded-pill p-4" style={{ backgroundColor: "white" }}>
                                Click here to get started   <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/null/external-right-arrow-arrows-dreamstale-lineal-dreamstale-13.png" />
                            </button> */}
                            {/* <motion.div
                                className="box"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 500, damping: 17 }}
                                onTap={() => { console.log("TAPPED") }}

                            >
                            </motion.div> */}
                            <div className="position-absolute rounded h-auto" style={{  width: "96%", maxWidth: "96%", backgroundColor: "black", opacity: "70%" }}>
                                <div className="bg-secondary rounded-top " style={{ height: "fit-content" }}>
                                    <div className="px-2 py-2">
                                        <span className="rounded-circle bg-success mx-1" style={{ width: "15px", height: "15px", display: "inline-block" }}>&nbsp;</span>
                                        <span className="rounded-circle bg-danger mx-1" style={{ width: "15px", height: "15px", display: "inline-block" }}>&nbsp;</span>
                                        <span className="rounded-circle bg-warning mx-1" style={{ width: "15px", height: "15px", display: "inline-block" }}>&nbsp;</span>
                                    </div>
                                </div>
                                <div className="p-4 " id="get_started_msg">
                                    this is text
                                </div>
                            </div>
                            <div className=" text-center position-absolute w-100 get_started_button">
                                <motion.button
                                    className="box rounded-pill "
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 17 }}
                                    onClick={() => { }}
                                >Click here to get started <span style={{ width: "100px" }}>&#8250;</span>
                                </motion.button>
                            </div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div >
    )
}