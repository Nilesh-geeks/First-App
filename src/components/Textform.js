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
  const capitalize = () => {
    
    let newtext = text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);;
    setText(newtext);
    props.showAlert("Capitalized word", "Sucess");
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
    document.getSelection().removeAllRanges();
    alert("Text copied Successfully ");
  }
  const handle = (event) => {
    // console.log("clicked on handle");
    setText(event.target.value)
  }
  const [text, setText] = useState("");


  return (<>
    <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput">{props.heading}</label>
        <textarea id="myBox" className="form-control" rows="9" value={text} onChange={handle} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }}></textarea>
        <button disabled={text.length===0}  onClick={handlepickup} className="btn btn-info my-3">Convert to Upper Case</button>
        <button disabled={text.length===0} onClick={small} className="btn btn-info mx-4 my-3">convert to lowercase</button>
        <button disabled={text.length===0} onClick={clear} className="btn btn-info mx-1 my-3">Clear Text</button>
        <button disabled={text.length===0} onClick={remove} className="btn btn-info mx-4 my-3">Remove Extra Spaces</button>
        <button disabled={text.length===0} onClick={copy} className="btn btn-info mx-4 my-3">Copy Text</button>
        <button disabled={text.length===0} onClick={capitalize} className="btn btn-info mx-4 my-3">Capitalize Word</button>
      </div>
    </div>
    <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter(function(n) { return n !== '' }).length }words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").filter(function(n){return n!==''}).length} minutes Read</p>
      <h2>Preivew</h2>
      <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
    </div>
  </>
  )
}
