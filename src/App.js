import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { useState } from "react/cjs/react.development";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [btnName, setToggleBtnName] = useState("Enble Dark Mode");
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

  const toggleDarkModeFun = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleBtnName("Enble Light Mode");
      document.body.style.backgroundColor = "#181818";
      showAlert("Dark Mode Enabled");

      //  document.title="enabled dark mode"
    } else {
      setMode("light");
      setToggleBtnName("Enble Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode disabled");
    }
  };

  // const toggleBlueModeFun = ()=>{
  //   if(mode==="light"){
  //     setMode("dark")
  //   }else{
  //     setMode("white")
  //   }
  // }

  return (
    <>
      {/* <Navbar/>    when we use default props  */}

      <Router>
        <Navbar
          title="Text Utils"
          about="About Us"
          mode={mode}
          toggleDarkMode={toggleDarkModeFun}
          btnName={btnName}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text here"
                showAlert={showAlert}
                mode={mode}
              />
            }
          ></Route>

          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </Router>

      {/* <TextForm heading="Enter Text here" showAlert={showAlert}  mode={mode} /> */}
      {/* <About/> */}
    </>
  );
}

export default App;
