import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = () => {
    // console.log("lowercase was clicked"+text)
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalClick = () => {
    // console.log("capitalized was clicked"+text)
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
  };

  const handleSpaceClick = () => {
    // console.log("space was clicked"+text)
    let newText = text.trim();
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log("clear was clicked")
    let newText = "";
    setText(newText);
  };

  const handleUpChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textArea"
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

      <div className="container my-2">
        <h3>your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.003 * text.split(" ").length} minutes read</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
