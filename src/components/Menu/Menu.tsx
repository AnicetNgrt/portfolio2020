import React from "react";
import "./Menu.css";
import CustomLink from "./Link/CustomLink";
import {Localization} from "../../api/types";

export default function MenuComponent(props:{
    locs:Localization,
    current:String,
    onClick:(place:string)=>void
}) {
    return (
        <div className="Menu">
            <CustomLink to="/" selected={props.current == "/"} label={props.locs["0"]} activeOnlyWhenExact={true} onClick={props.onClick}/>
            <CustomLink to="/about" selected={props.current == "/about"} label={props.locs["1"]} activeOnlyWhenExact={true} onClick={props.onClick}/>
            <CustomLink to="/projects" selected={props.current == "/projects"} label={props.locs["2"]} activeOnlyWhenExact={true} onClick={props.onClick}/>
        </div>
    )
}

function separator() {
    return <p style={{display:"inline-block",color:"white",marginLeft:"0.5vw",marginRight:"0.5vw",fontSize:"2vw"}}>{"~"}</p>
}