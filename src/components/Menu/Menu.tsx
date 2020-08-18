import React from "react";
import "./Menu.css";
import CustomLink from "./Link/CustomLink";

export default function MenuComponent(props:{
    locs:Locs,
    current:String,
    onClick:(place:string)=>void
}) {
    return (
        <div className="Menu">
            {props.current != "/" && <CustomLink to="/" label={props.locs["0"]} activeOnlyWhenExact={true} onClick={props.onClick}/>}
            {props.current != "/about" && <CustomLink to="/about" label={props.locs["1"]} activeOnlyWhenExact={true} onClick={props.onClick}/>}
            {props.current != "/projects" && <CustomLink to="/projects" label={props.locs["2"]} activeOnlyWhenExact={true} onClick={props.onClick}/>}
        </div>
    )
}

function separator() {
    return <p style={{display:"inline-block",color:"white",marginLeft:"0.5vw",marginRight:"0.5vw",fontSize:"2vw"}}>{"~"}</p>
}