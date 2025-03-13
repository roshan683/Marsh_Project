import logo from "./logo.svg";
import React, { createContext } from "react";
//import UseContext from "./All_Hooks/UseContext"
//import Roshan ,{Footer} from "./components/Roshan"
//import Roshan  from "./components/Roshan"
//import Netflix from "./Netflix.js";
//import Profile from "./Profile"
//import "./index.css";
//import {State} from "./components/Hooks/State"
//import {StateChallenge} from "./StateChallenge"
//import {Lift} from "./components/Hooks/Lift"
//import {Events} from "./components/Events.js"
//import {Toggle} from "./Project/ToggleSwitch/Toggle";
//import {Todo} from "./Project1/Todo/Todo";
//import { Toggle } from "./Project/ToggleSwitch/Toggle";
import {Graph} from "./Project1/Todo/Graph/Graph";

//export const LoginContext =createContext();

function App() {
  return (
    <section className="container">
      <h1 className="card-heading">List of best series</h1>
      {/*<Netflix></Netflix>*/}
      {/*<Footer></Footer>*/}
      {/*<Profile></Profile>*/}
      {/*<State></State>*/}
      {/*<StateChallenge></StateChallenge>*/}
      {/*<Lift></Lift>*/}
      {/*<Events></Events>*/}
      {/*  <LoginContext.Provider value={true}>
        <div>
        <UseContext></UseContext>
        </div>
      </LoginContext.Provider>  */}
      {/*<Toggle></Toggle>*/}
      {/*<Todo></Todo>*/}
      <Graph />
    </section>
  );
}
//default ko hum curely braces mai nahie rekh skta hai or name vla hum curel mai rekta hai which export functionc

export default App;
