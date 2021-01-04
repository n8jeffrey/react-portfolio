import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div
        className="landing-page"
        style={{
          width: "100vw",
          height: "100vh",
          margin: "auto",
          backgroundColor: "#7E89FD",
        }}
      >
        <div className="outside-container"></div>
        <div className="blob-container">
          <div className="blob-shape"></div>
          <img
            className="main-image"
            alt="me - nathan jeffrey"
            src="https://i.imgur.com/NSir1ZU.png?1"
          />
        </div>
        <h1 className="main-title">Nathan Jeffrey</h1>
        <p className="main-title">Developer. Founder. Father.</p>
        <div className="social-block">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    );
  }
}

export default LandingPage;
