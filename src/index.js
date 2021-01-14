import React from  "react";
import ReactDOM from "react-dom";
import "./index.css";
import TDL from "./todolist.js" 

var destination =document.querySelector("#container");

ReactDOM.render(
    <div className="header">
        <h1 className="heading"> <u><b><i class="fas fa-clipboard-list"></i> My ToDo App</b></u> </h1>
        <TDL></TDL>
        <p id="attr">Copyright 2021 by @agdevtrack <br></br>all right reserved.</p>
    </div>
    ,
    destination
)