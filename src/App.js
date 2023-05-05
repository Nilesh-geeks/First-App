// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [m, setm] = useState('dark');
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 3000);
  }

  const tooglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      setm('light');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled ", "Success");
    }
    else {
      setmode('light');
      setm('dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled ", "Success");


    }
  }
  return (
    <>
      <Router>

        <Navbar title="First app" mode={mode} tooglemode={tooglemode} m={m} />
        <Alert alert={alert} mode={mode} />
        <div className="container my-4">
          <Routes>
                <Route exact path="/about" element={<About about="About Us" mode ={mode}/>}/>
               
               <Route exact path="/" element={<Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}/>
               
           </Routes>
         </div>
        
      </Router>
    </>
  );
}

export default App;
