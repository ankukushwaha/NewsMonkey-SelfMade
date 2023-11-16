import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode === 'light'?'light':'dark'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color: props.mode === 'light'?'black':'white'}}  to="/">News</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color: props.mode === 'light'?'black':'white'}} aria-current="page" to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={(() => props.func())} className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={{color: props.mode === 'light'?'black':'white'}} htmlFor="flexSwitchCheckDefault">
                    {props.mode === 'light' ? 'Dark Mode' : "Light Mode"}</label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

