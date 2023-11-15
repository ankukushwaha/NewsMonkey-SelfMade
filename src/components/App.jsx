import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import News from "./News";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App(){
    const pageSize = 30
    const apiKey = process.env.REACT_APP_API_KEY;
    const country = 'in';
    return (
        <div className="d-flex flex-column min-vh-100">
        <Router>
        <Navbar />

            <Routes>
                <Route exact path="/"
                element =  { <News key="general" pagesize={pageSize} apikey={apiKey} category='general' country={country}/>} />
                <Route exact path="/business"
                    element = {<News key="business" pagesize={pageSize} apikey={apiKey} category='business' country={country}/>  } />
                <Route exact path="/entertainment"
                    element = {<News key="entertainment" pagesize={pageSize} apikey={apiKey} category='entertainment' country={country}/>  } />
                <Route exact path="/health"
                    element = {<News key="health" pagesize={pageSize} apikey={apiKey} category='health' country={country}/>  } />
                <Route exact path="/science"
                    element = {<News key="science" pagesize={pageSize} apikey={apiKey} category='science' country={country}/>   } />
                <Route exact path="/sports"
                    element = {<News key="sports" pagesize={pageSize} apikey={apiKey} category='sports' country={country}/>  } />
                <Route exact path="/technology"
                    element = {  <News key="technology" pagesize={pageSize} apikey={apiKey} category='technology' country={country}/>    } />
            </Routes>  
            <Footer />
        </Router>
        </div>
    );
}

export default App;
