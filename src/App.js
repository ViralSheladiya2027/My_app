import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform  from "./components/Textform"; 
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null")

const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    type:type,
  })
}

 const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#020e1a";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
<Navbar  title = "TextUltils" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
<Textform heading= "Enter the text to analyze below"showAlert={showAlert} mode={mode}/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
