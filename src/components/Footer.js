import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

function Footer(props) {
    return (
        <footer className={`bg-${props.mode === 'light'?'light':'dark'} text-center text-white`}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn text-white btn-floating m-1" target="_blank" rel="noreferrer" style={{backgroundColor: '#55acee'}} href="https://twitter.com/AnkurKumariKus1" role="button"><i className="fab fa-twitter"></i></a>
                    <a className="btn text-white btn-floating m-1" target="_blank" rel="noreferrer" style={{backgroundColor: '#dd4b39'}}  href="mailto:ankurkushwaha7408@gmail.com" role="button"><i className="fab fa-google"></i></a>
                    <a className="btn text-white btn-floating m-1" target="_blank" rel="noreferrer" style={{backgroundColor: '#ac2bac'}}   href="https://www.instagram.com/photonista2k20/" role="button"><i className="fab fa-instagram"></i></a>
                    <a className="btn text-white btn-floating m-1" target="_blank" rel="noreferrer" style={{backgroundColor: '#0082ca'}}   href="https://www.linkedin.com/in/ankur-kumari/" role="button"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn text-white btn-floating m-1" target="_blank" rel="noreferrer" style={{backgroundColor: '#333333'}}   href="https://github.com/ankukushwaha" role="button"><i className="fab fa-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © {new Date().getFullYear()} Copyright:
                <a className="text-white" href="mailto:ankurkushwaha7408@gmail.com" target="_blank" rel="noreferrer">
                 ankurkushwaha.com</a>
            </div>
        </footer>
    )
}

export default Footer;