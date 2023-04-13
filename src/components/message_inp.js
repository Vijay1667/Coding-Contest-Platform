import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownIt from "markdown-it";
import parse from 'html-react-parser';
import Renderer from "markdown-it/lib/renderer";
import ContentEditable from "react-contenteditable";
import { htmlToText } from "html-to-text";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'
import MediumEditor from "medium-editor";
import "medium-editor"
import '../App.css'
export default function Message_inp() {
    // var md = new MarkdownIt({
    //     html: true,
    //     breaks: true,
    //     linkify: true,
    //     typographer: true
    // });
    

    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    });
    var editor = new MediumEditor(".newcontentedit", {
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'strikethrough']
        },
        autoLink: true
    })
    // console.log(editor)
    const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const targetAttrIndex = tokens[idx].attrIndex('target');
        const relAttrIndex = tokens[idx].attrIndex('rel');

        if (targetAttrIndex < 0) {
            tokens[idx].attrPush(['target', '_blank']);
        } else {
            tokens[idx].attrs[targetAttrIndex][1] = '_blank';
        }

        if (relAttrIndex < 0) {
            tokens[idx].attrPush(['rel', 'noopener noreferrer']);
        } else {
            tokens[idx].attrs[relAttrIndex][1] = 'noopener noreferrer';
        }

        return defaultRender(tokens, idx, options, env, self);
    };

    md.use((md) => {
        const renderStrongopen = (tokens, idx, opts, _, slf) => {
            const token = tokens[idx];
            if (token.markup === '*') {
                token.tag = 'strong';
            }
            return slf.renderToken(tokens, idx, opts);
        };
        const renderStrongclose = (tokens, idx, opts, _, slf) => {
            const token = tokens[idx];
            if (token.markup === '*') {
                token.tag = 'strong';
            }
            return slf.renderToken(tokens, idx, opts);
        };

        md.renderer.rules.em_open = renderStrongopen;
        md.renderer.rules.em_close = renderStrongclose;
    });

    md.use((md) => {
        md.inline.ruler.push('strikethrough', (state, silent) => {
            const marker = state.src.charCodeAt(state.pos);

            if (silent) {
                return false;
            }

            if (marker !== 0x7e /* ~ */) {
                return false;
            }

            const scanned = state.scanDelims(state.pos, true);

            const ch = String.fromCharCode(marker);

            const len = scanned.length;
            for (let i = 0; i < len; i += 1) {
                const token = state.push('text', '', 0);
                token.content = ch;

                state.delimiters.push({
                    marker,
                    length: 0,
                    jump: i + 1,
                    token: state.tokens.length - 1,
                    end: -1,
                    open: scanned.can_open,
                    close: scanned.can_close,
                });
            }

            state.pos += scanned.length;

            return true;
        });
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var [res, setRes] = useState(md.render("**markdown it rendered**"));
    console.log(md.render("# markdown it rendered"))


    function Update_text(event) {
        event.preventDefault();

        // console.log(document.getElementById("contentedit").childNodes)
        // console.log("THE HTML IS :\n"+event.target.value)
        // console.log(event)
        setRes(md.render(event.target.value))
        // console.log(event.target.value)
        // console.log(md.render(event.target.value))


        // console.log(document.getElementById('type_text').innerText + "            innertext")
        // console.log(document.getElementById('type_text').innerText.length)

        // document.getElementById("type_text").innerHTML = event.target.value
        // var string = document.getElementById("type_text").innerHTML;
        // var regex = /~/g

        // var ind = [...string.matchAll(regex)]
        // var flag = 0;
        // var count = 0;
        // document.getElementById("type_text").innerHTML = document.getElementById("type_text").innerHTML.replaceAll(/~/g, function (x) {
        //     count++;
        //     if (flag == 0) {
        //         flag = 1;
        //         return "~<b>"
        //     }
        //     flag = 0;
        //     return "</b>~"
        // })
        // flag = 0
        // document.getElementById("type_text").innerHTML = document.getElementById("type_text").innerHTML.replaceAll(/__/g, function (x) {
        //     if (flag == 0) {
        //         flag = 1;
        //         return "<i>"
        //     }
        //     flag = 0;
        //     return "</i>"
        // })
        // flag = 0
        // document.getElementById("type_text").innerHTML = document.getElementById("type_text").innerHTML.replaceAll(/\*\*\*/g, function (x) {
        //     if (flag == 0) {
        //         flag = 1;
        //         return "<del>"
        //     }
        //     flag = 0;
        //     return "</del>"
        // })
        // flag = 0
        // document.getElementById("type_text").innerHTML = document.getElementById("type_text").innerHTML.replaceAll(/###/g, function (x) {
        //     if (flag == 0) {
        //         flag = 1;
        //         return "<ins>"
        //     }
        //     flag = 0;
        //     return "</ins>"
        // })
        // flag = 0
        // document.getElementById("type_text").innerHTML = document.getElementById("type_text").innerHTML.replaceAll(/```/g, function (x) {
        //     if (flag == 0) {
        //         flag = 1;
        //         return "<code>"
        //     }
        //     flag = 0;
        //     return "</code>"
        // })
        // flag = 0

        // console.log(res)
    }
    function Update_content(event) {
        console.log(document.getElementById("contentedit").innerText)
        console.log(md.render(event.target.value))
        // console.log(document.getElementById("contentedit").innerText)
        // console.log(md.render(document.getElementById("contentedit").innerText))
        // setRes(md.render(document.getElementById("contentedit").innerText))
        const nhm = new NodeHtmlMarkdown(
            /* options (optional) */ {},
            /* customTransformers (optional) */ undefined,
            /* customCodeBlockTranslators (optional) */ undefined
        );
        console.log(nhm.translate((event.target.value)))
        setRes(md.render(document.getE))
        // console.log(event.target.value)
    }
    setInterval(()=>{
        console.log(md.render(document.getElementById("newcontentedit").innerText))
    },3000)
    return (
        <div className="container">
            <textarea type="text" id="test-input" onChange={Update_text} className="" style={{ caretColor: "black", width: "100%" }} />
            {/* <input type="text" id="second_input" className="" style={{ caretColor: "black", width: "100%" }} /> */}
            {/* <div style={{ whiteSpace: "pre", position: "absolute" }} id="type_text" className="typee p-1" >

            </div> */}
            <div id="rendered_text" style={{ whiteSpace: "pre" }} className=" border">
                {parse(res)}
            </div>
            <div className="my-5">
                <ContentEditable style={{}} id="contentedit" defaultValue="" className="p-1" html={res} contentEditable="true" onChange={Update_content} />
            </div>
            <div className="my-5 border newcontentedit" id="newcontentedit"  contentEditable={true}>

            </div>
        </div>
    )
}