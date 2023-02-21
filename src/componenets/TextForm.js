import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = (txt) => {
    let arr = txt.split(' ').filter((x) => x.length !== 0);
    // let emptyCount = arr.filter((x) => x === '').length;
    // let spaceCount = arr.filter((x) => x === ' ').length;
    // setWordCount(arr.length - emptyCount - spaceCount);
    setWordCount(arr.length);
  }

  const handleUpClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
};

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    handleWordCount(event.target.value);
  };

  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Clearing text!", "success");
};

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>You text summary</h1>
        <p>
          {wordCount} words and {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").filter((x) => x.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}