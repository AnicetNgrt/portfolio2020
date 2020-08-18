import React, { useState } from "react";
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import "./CustomLink.css";

export default function CustomLink(props:{
    label:string, 
    to:string,
    activeOnlyWhenExact:boolean,
    onClick:(place:string)=>void
}) {

    let match = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact
    });
    let [previous_match,set_previous_match] = useState(false);
    if (match && !previous_match) {
        props.onClick(props.to);
        previous_match = true
    }
    if (!match && previous_match) {
        previous_match = false
    }

    return(
        <div className="CustomLink">
            <Link to={props.to} >{props.label}</Link>
        </div>
    )
}