import React, { useState , useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import News from "./News";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App(){
    // const pageSize = 30
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const country = 'in';

    const savedMode = localStorage.getItem('mode') || 'light';
    const [mode, setMode] = useState(savedMode);

function ToggleMode(){
    setMode((prevMode) => (prevMode === 'light'? 'dark':'light'));
}
useEffect(() => {
  // Save the current mode to local storage whenever it changes
  localStorage.setItem('mode', mode);
  document.body.style.backgroundColor = mode === 'light'?'white': 'rgb(45 46 46 / 88%)';
}, [mode]);

    return (
        <div className="d-flex flex-column min-vh-100">
        <Router>
        <Navbar func={ToggleMode} mode={mode} />

            <Routes>
                <Route exact path="/"
                element =  { <News key="general" mode={mode} category='general' />} />
                <Route exact path="/business"
                    element = {<News key="business" mode={mode} category='business' />  } />
                <Route exact path="/entertainment"
                    element = {<News key="entertainment" mode={mode} category='entertainment' />  } />
                <Route exact path="/health"
                    element = {<News key="health" mode={mode} category='health' />  } />
                <Route exact path="/science"
                    element = {<News key="science" mode={mode} category='science' />   } />
                <Route exact path="/sports"
                    element = {<News key="sports" mode={mode} category='sports' />  } />
                <Route exact path="/technology"
                    element = {  <News key="technology" mode={mode} category='technology' />    } />
            </Routes>  
            <Footer mode={mode}/>
        </Router>
        </div>
    );
}

export default App;
