import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text)
    let newText = text.toUpperCase();
    props.showAlert("Your text has been uppercase","success");
    setText(newText);
  };

  const handleloClick = () => {
    // console.log("lowercase was clicked"+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been lowercase","success");
  };

  const handleCapitalClick = () => {
    // console.log("capitalized was clicked"+text)
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(newText);
    props.showAlert("Your text has been capitalized","success");
  };

  const handleSpaceClick = () => {
    // console.log("space was clicked"+text)
    const newText = text.replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert("Your space has been removed","success");
  };

  const handleClearClick = () => {
    // console.log("clear was clicked")
    let newText = "";
    setText(newText);
    props.showAlert("your text has been cleared","success");
  };

  const handleUpChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"/>
      <div className="container"style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textArea"
            style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}
            value={text}
            onChange={handleUpChange}
            rows="5"
          ></textarea>
        </div>
        <div className="button btn btn-primary mx-1" onClick={handleUpClick}>
          convert to upperCase
        </div>
        <div className="button btn btn-primary mx-1" onClick={handleloClick}>
          convert to lowerCase
        </div>
        <div
          className="button btn btn-primary mx-1" onClick={handleCapitalClick}>
          convert to capitalized case
        </div>
        <div
          className="button btn btn-primary mx-1" onClick={handleSpaceClick}>
         Space case
        </div>
        <div className="button btn btn-primary mx-1" onClick={handleClearClick}>
          clear words
        </div>
      </div>

      <div className="container my-2"/>
      <div className="container my-2"style= {{color: props.mode==='dark'?'white':'black'}}>
        <h3>your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.003 * text.split(" ").length} minutes read</p>
        <h3>preview</h3>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}