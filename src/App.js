import { useState } from "react";
import "./App.css";
import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import React from "react";
import Alert from "./componenets/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils: Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode "
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils: Light Mode";
    }
  };

  const additionDarkModes = (modeName) => {
    if (modeName === "grey") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
      showAlert("Grey Mode has been enabled", "success");
    } else if (modeName === "purple") {
      setMode("purple");
      document.body.style.backgroundColor = "purple";
      showAlert("purple Mode has been enabled", "success");
    } else if (modeName === "white") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("white Mode has been enabled", "success");
    } else if (modeName === "red") {
      setMode("red");
      document.body.style.backgroundColor = "red";
      showAlert("red Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Alert alert={alert} />
        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} additionDarkModes={additionDarkModes} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
