import React, { useEffect,useState } from "react";
// import Prism from "prismjs"
// import '../prism.css'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
// import 'prismjs/themes/prism.css'
// import '../prism.js'
export default function Editorr(props) {
    var [textt,setTextt]=useState("");
    function ChangeText(event){
        if(event.target.value==null){
            setTextt("");
        }
        else{
            setTextt(event.target.value);
        }
        
    }
    return (
        <div data-prismjs-copy-timeout="500">
            <div className="container ">
            <textarea onChange={ChangeText} style={{  overflow:"hidden",whiteSpace:"nowrap",display:"block",position:"absolute",top:0,resize:"auto",color:"white",cursor:"default white",background:"transparent",minHeight:"inherit",zIndex:2}}>
                    
                </textarea>
                <pre data-plugin-header="show-language" className="  rounded-3 " style={{overflow:"auto"}}>
                {/* <header data-plugin-header="show-language"></header> */}
                    <code className=" language-css line-numbers" data-prismjs-copy="Copy the JavaScript snippet!" style={{overflow:"hidden"}}>
                    
                        {textt}
                    </code>
                </pre>
            </div>
        </div>
    )
}