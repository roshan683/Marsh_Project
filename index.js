import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Practise from "./Practise";
//import Netflix from "../Netflix.js"
import reportWebVitals from "./reportWebVitals";
//import { Usestate } from "./All_Hooks/Usestate";
//import { Useeffect } from "./All_Hooks/Useeffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App />
    {/*<Practise></Practise>*/}
    {/*<Usestate></Usestate>*/}
    {/*<Useeffect/>*/}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
