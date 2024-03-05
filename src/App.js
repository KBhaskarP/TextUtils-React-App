import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Textbox from "./component/Textbox";
import About from "./component/About";
import Alert from "./component/Alert";
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";




export default function App() {
  const [currMode,newMode]=useState('light');
  const [alert,setAlert]=useState('')

  let changeAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)

    },1500)

  }
  


  let setMode=()=>{
    if(currMode==='light'){
      newMode('dark')
      document.body.style.backgroundColor="rgba(33,37,41,1)"
      document.body.style.color="white"
      changeAlert('Dark Mode Enabled!','success')
    }
    else{
      newMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      changeAlert('Light Mode Enabled!','success')
      
    }
  }


  return (
    <>
    <Router>
      <Navbar title='TextUtils' currMode={currMode} setMode={setMode}/>
      <Alert alert={alert} currMode={currMode}/>
      <Routes>
        <Route exact path="/about" element={<About title='TextUtils' />}></Route>
        <Route exact path="/" element={<Textbox heading="Welcome to TextUtils" changeAlert={changeAlert} />}></Route>
      </Routes>

    </Router>
    
    </>
  );
}

