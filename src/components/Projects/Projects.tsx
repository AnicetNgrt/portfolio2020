import React from "react";
import "./Projects.css";
import {IoIosConstruct} from "react-icons/io";
import {Localization} from "../../api/types";
const {electron} = window as any;

const linkedinLink = "https://www.linkedin.com/in/anicet-nougaret-b7846b174/"

function openOutside(event:any, link:string) {
    if(electron) {
        event.preventDefault()
        electron.shell.openExternal(link);
    }
}

export default function projectsComponent(props:{
    locs:Localization
}) {
    return (
        <div>
            <div className="wipContainer">
                <div className="wipIcon"><IoIosConstruct/></div>
                <h1 className='wipTitle'>{props.locs["9"]}</h1>
            </div>
            <h2 id="projectsRedirectText">
                {props.locs["10"]}
                <a href={linkedinLink} onClick={e=>openOutside(e,linkedinLink)} id="redirect" className="link">{"linkedin"}</a>
            </h2>
        </div>
    )
}