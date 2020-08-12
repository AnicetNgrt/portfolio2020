import React from "react";

export default function AboutComponent(props:{
    locs:Locs
}) {
    return (
        <div>
            <h1>{props.locs["1"]}</h1>
        </div>
    )
}