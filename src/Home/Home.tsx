import React from "react";
import "./Home.css";
import {AiFillGithub, AiFillCode, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {MdGames, MdEmail} from "react-icons/md"

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
    locs:Locs
}) {
    return (
        <div>
            <h1 id="nom">{"Anicet Nougaret"}</h1>
            <div id="socialContainer">
                <a id="socialLink" href={githubLink} onClick={e=>openOutside(e,githubLink)}><AiFillGithub/>{""}</a>
                <a id="socialLink" href={replLink} onClick={e=>openOutside(e,replLink)}><AiFillCode/>{""}</a>
                <a id="socialLink" href={itchLink} onClick={e=>openOutside(e,itchLink)}><MdGames/>{""}</a>
                <a id="socialLink" href={linkedinLink} onClick={e=>openOutside(e,linkedinLink)}><AiFillLinkedin/>{""}</a>
                <a id="socialLink" href={instaLink} onClick={e=>openOutside(e,instaLink)}><AiFillInstagram/>{""}</a>
                <a id="socialLink" href={"mailto:"+email}><MdEmail/>{""}</a>
            </div>
        </div>
    )
}