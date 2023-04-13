import React, { useEffect, useState, useRef } from "react";
// import Editor from "./Code_Editor";
// import '../prism.js'
// import { editor } from "monaco-editor/esm/vs/";
import Editor from "@monaco-editor/react";
import { monaco } from "@monaco-editor/react";
import { KeyCode } from "monaco-editor";
import '../App.css'
// import compileRun from "compile-run";
import axios from "axios";
import { ReactTerminal } from "react-terminal";
import ClipboardJS from "clipboard";
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/dist/react-notifications.css'
import { FallingLines, LineWave, RotatingSquare } from "react-loader-spinner";
import NavBar from "./NavBar";
export default function LiveEditor() {
    new ClipboardJS('.copyCode');
    // monaco.init().then(monaco => console.log(monaco.KeyCode));
    const editorRef = useRef(null);
    var keycode = { java: "java", python: "py", cpp: "cpp", c: "c", csharp: "cs" }
    useEffect(() => {
        editorRef.current?.focus();
    }, []);
    var [output_result, setOutput_result] = useState("")
    var dots = "."
    var [anime_visible, setAnime_visible] = useState(false);
    var [language, setLanguage] = useState("java")
    var [current_running, setCurrent_running] = useState(false);
    const javascripttext =
        `function hello() {
    alert('Hello world!');
}`;
    const originaljavatext =
        `class Main {
    public static void main(String[] args){
        int st=5;
        System.out.println(st);
    }
}`;
    var [javatext, setJavatext] = useState(
        `class Main {
    public static void main(String[] args){
        int st=5;
        System.out.println(st);
    }
}`)
    const originalcpptext =
        `// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
`
    const originalctext = `
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
`
    const originalcsharptext =
        `// Hello World! program
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}`

    const originalpythontext = `print("hello world")`
    const [cpptext, setCpptext] = useState(
        `// Your First C++ Program

    #include <iostream>
    
    int main() {
        std::cout << "Hello World!";
        return 0;
    }
    `)
    const [ctext, setCtext] = useState(`
    #include <stdio.h>
    int main() {
       // printf() displays the string inside quotation
       printf("Hello, World!");
       return 0;
    }
    `)
    const [csharptext, setCsharptext] = useState(
        `// Hello World! program
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}`)
    const [pythontext, setPythontext] = useState(`print("hello world")`)
    var [edit_text, setEdit_text] = useState(originaljavatext)

    function setLang(event) {
        var temp = event.target.value

        setLanguage(temp)
        // console.log(temp)

        // console.log(language)
        if (event.target.value == "java") {
            setEdit_text(javatext)
        }
        else if (event.target.value == "csharp") {
            setEdit_text(csharptext)
        }
        else if (event.target.value == "python") {
            setEdit_text(pythontext)
        }
        else if (event.target.value == "cpp") {
            setEdit_text(cpptext)
        }
        else if (event.target.value == "c") {
            setEdit_text(ctext)
        }
        editorRef.current?.focus();
        console.log(editorRef.current.value)
    }
    function setCodeText(value) {
        console.log(value)
        if (language == "java") {
            // console.log(language)//

            setEdit_text(value)
        }
        else if (language == "csharp") {
            setEdit_text(value)
        }
        else if (language == "python") {
            setEdit_text(value)
        }
        else if (language == "cpp") {
            setEdit_text(value)
        }
        else if (language == "c") {
            setEdit_text(value)
        }
    }
    function ResetEditor() {
        if (language == "java") {
            setEdit_text(originaljavatext)
        }
        else if (language == "csharp") {
            setEdit_text(originalcsharptext)
        }
        else if (language == "python") {
            setEdit_text(originalpythontext)
        }
        else if (language == "cpp") {
            setEdit_text(originalcpptext)
        }
        else if (language == "c") {
            setEdit_text(originalctext)
        }
        editorRef.current?.focus();
    }
    function runcode() {
        if (current_running) {
            NotificationManager.warning("", "Wait till current execution completes", 2000);
            return;
        }
        console.log(keycode[language])

        console.log(output_result)
        setCurrent_running(true);
        const encodedParams = new URLSearchParams();
        encodedParams.append("code", edit_text);
        encodedParams.append("language", keycode[language]);
        encodedParams.append("input", document.getElementById("inputValue").value);
        const options = {
            method: 'POST',
            url: 'https://api.codex.jaagrav.in',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',

            },
            data: encodedParams
        };
        setOutput_result("running ")
        setAnime_visible(true);
        // let animation = setInterval(() => {
        //     dots += "."
        //     console.log(output_result)
        //     setOutput_result("running" + dots)
        //     if (dots.length == 4) {
        //         dots = "."
        //     }
        // }, 200)

        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.output);
            // console.log(animation)
            // clearInterval(animation)
            setAnime_visible(false)
            setOutput_result(((response.data.output)))
            console.log(document.getElementById("Terminalc"))
            if (response.data.error != "") {
                setOutput_result("❌ ERROR, see in terminal")
                document.getElementById("terminalEditor").innerText = response.data.error


            }
            else {
                document.getElementById("terminalEditor").innerText = response.data.info
            }
            setCurrent_running(false);

        }).catch(function (error) {
            console.error(error);
            setCurrent_running(false);
        });
    }
    const commands2 = "whoami:jackharper \n\n whodevelopedyou: Vijay \n whomadeyou: Vijay \n reload:window.location.reload() \n Reloads the page \n cd: changed path to directory";
    const commands = {
        whoami: "jackharper",
        whodevelopedyou: "Vijay",
        whomadeyou: "Vijay",
        help: commands2,
        reload: () => { window.location.reload() },
        cd: (directory) => `changed path to ${directory}`
    };
    const EditorLoading = <RotatingSquare
        height="100"
        width="100"
        color="#4baeff"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
    return (
        <div>
            <NavBar/>
            <div className="container-fluid">
                <NotificationContainer />
                <div className="container my-4">
                    <select className="form-select" onChange={setLang}>
                        <option value="csharp">C#</option>
                        <option selected value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="c">C</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <div className="container">
                    <div className="float-end">
                        <button className="resetbutton copyCode" data-clipboard-text={edit_text} onClick={() => { console.log("copied"); NotificationManager.success("Code Copied", "DONE", 2000) }}>copy</button>
                        <button className="resetbutton" id="resetbutton" onClick={ResetEditor}>Reset</button> </div>

                    <Editor

                        className="myeditor rounded-3"
                        height={"80vh"}
                        width={"100%"}
                        theme="vs-dark"
                        language={language}
                        value={edit_text}
                        defaultValue={edit_text}
                        loading={EditorLoading}
                        saveViewState={true}
                        onChange={setCodeText}
                        onMount={(editor) => (editorRef.current = editor)}
                    />

                    <div className="my-2" style={{ fontFamily: "Source Code Pro" }}>
                        <b>Input:</b>  <br></br>
                        <textarea id="inputValue" style={{ width: "100%", height: "100%" }}>
                        </textarea>
                    </div>
                    <button className=" runbutton" style={{ fontFamily: "Source Code Pro" }} onClick={runcode}>Run</button>
                    <div className="" style={{ fontFamily: "Source Code Pro" }}>
                        <div className="mt-2"> <b > Output:</b></div>

                        <div className="container border mb-3 my-1 p-2 rounded-2" style={{ whiteSpace: "pre" }}>{output_result}<FallingLines
                            color="#000000"
                            width="40"
                            visible={anime_visible}
                            ariaLabel='falling-lines-loading'
                        /></div>
                        <div></div>
                    </div>
                </div>
                <div className="container my-3" id="Terminalc">
                    <ReactTerminal
                        id="Terminal"
                        welcomeMessage="Welcome to the terminal, errors can be found here"
                        style={{ whiteSpace: "pre" }}
                        commands={commands}
                        themes={{
                            "my-custom-theme": {
                                themeBGColor: "#272B36",
                                themeToolbarColor: "#DBDBDB",
                                themeColor: "#FFFEFC",
                                themePromptColor: "#69bcff"
                            }
                        }}
                        theme="my-custom-theme"
                    />
                </div>

            </div>
        </div>
    )
}