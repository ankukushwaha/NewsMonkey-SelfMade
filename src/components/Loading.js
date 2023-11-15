import React from "react";
import Spinner from "./images/Spinner.gif";

function Loading(){
    return(
        <div className="container text-center">
            <img src={Spinner} alt="loadingBar" />
        </div>
    )
}

export default Loading;