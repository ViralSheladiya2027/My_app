import React from "react";
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">About</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search"style= {{backgroundColor: props.mode==='dark'?'#020e1a':'white',color: props.mode==='dark'?'white':'black'}}placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-1" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> EnableDarkMode</label>
</div>
      </div>
    </div>
  </nav>
  );
}

Navbar.proptype = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,
  };

  Navbar.defaultProps ={
    title :'set title',
    aboutText : "About text here"
  }