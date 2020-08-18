import React, { useState } from "react";
import "./Home.css";
import {AiFillGithub, AiFillCode, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {MdGames, MdEmail} from "react-icons/md"
import {Localization} from "../../api/types";

const { electron } = window as any;
const githubLink = "https://github.com/AnicetNgrt"
const replLink = "https://repl.it/@AnicetN"
const itchLink = "https://anicetngrt.itch.io/"
const linkedinLink = "https://www.linkedin.com/in/anicet-nougaret-b7846b174/"
const instaLink = "https://www.instagram.com/anicetnougaret/"
const email = "anicet.nougaret@zohomail.eu"

function openOutside(event:any, link:string) {
    if(electron) {
        event.preventDefault()
        electron.shell.openExternal(link);
    }
}

export default function HomeComponent(this: any, props:{
    locs:Localization
}) {

    const [icoDesc, setIcoDesc] = useState("")

    return (
        <div>
            <div id="top">
                <h1>{"Anicet Nougaret"}</h1>
                <p>{props.locs["11"]}</p>
                <div id="socialContainer">
                    <a id="socialLink" href={githubLink} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["3"])} onClick={e=>openOutside(e,githubLink)}><AiFillGithub/>{""}</a>
                    <a id="socialLink" href={replLink} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["4"])} onClick={e=>openOutside(e,replLink)}><AiFillCode/>{""}</a>
                    <a id="socialLink" href={itchLink} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["5"])} onClick={e=>openOutside(e,itchLink)}><MdGames/>{""}</a>
                    <a id="socialLink" href={linkedinLink} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["6"])} onClick={e=>openOutside(e,linkedinLink)}><AiFillLinkedin/>{""}</a>
                    <a id="socialLink" href={instaLink} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["7"])} onClick={e=>openOutside(e,instaLink)}><AiFillInstagram/>{""}</a>
                    <a id="socialLink" href={"mailto:"+email} onMouseLeave={()=>setIcoDesc("")} onMouseEnter={()=>setIcoDesc(props.locs["8"])}><MdEmail/>{""}</a>
                    {icoDesc !== "" && <h2 id="icoDesc">{icoDesc}</h2>}
                </div>
            </div>
        </div>
    )
}