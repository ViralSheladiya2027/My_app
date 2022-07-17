import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform  from "./components/Textform"; 


function App() {
  const [mode, setMode] = useState("light");

 const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="gray";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
<Navbar  title = "TextUltils" mode={mode} toggleMode ={toggleMode}/>
<div className="container my-3">
<Textform heading= "Enter the text to analyze below" mode={mode}/>
{/* <About/> */}
</div>

</>
  );
}

export default App;

