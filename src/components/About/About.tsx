import React from "react";
import {Localization} from "../../api/types";

export default function AboutComponent(props:{
    locs:Localization
}) {
    return (
        <div>
            <h1>{props.locs["1"]}</h1>
        </div>
    )
}