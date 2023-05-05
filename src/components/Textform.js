import React, { useState } from 'react'

export default function Textform(props) {


  const handlepickup = () => {
    console.log("clicked on upper case");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "Sucess");

  };

  const small = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "Sucess");
  }
  const clear = () => {
    setText("");
    props.showAlert("Text Erased ", "Sucess");
  }
  const remove = () => {
    let newString = text.replace(/\s+/g, ' ').trim();
    setText(newString);
    props.showAlert("WhiteSpaces Removed  ", "Sucess");
  }
  const copy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied Successfully ");
  }
  const handle = (event) => {
    console.log("clicked on handle");
    setText(event.target.value)
  }
  const [text, setText] = useState("");


  return (<>
    <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput">{props.heading}</label>
        <textarea id="myBox" className="form-control" rows="9" value={text} onChange={handle} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }}></textarea>
        <button onClick={handlepickup} className="btn btn-primary my-3">Convert to Upper Case</button>
        <button onClick={small} className="btn btn-secondary mx-4">convert to lowercase</button>
        <button onClick={clear} className="btn btn-secondary mx-0">Clear Text</button>
        <button onClick={remove} className="btn btn-secondary mx-4">Remove Extra Spaces</button>
        <button onClick={copy} className="btn btn-secondary mx-4">Copy Text</button>
      </div>
    </div>
    <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter(function(n) { return n !== '' }).length }words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").filter(function(n){return n!==''}).length} minutes Read</p>
      <h2>Preivew</h2>
      <p>{text.length > 0 ? text : "Enter text to Preview"}</p>
    </div>
  </>
  )
}
