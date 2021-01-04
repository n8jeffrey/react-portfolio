import React, { Component } from "react";
import CaseStudyCard from "./casestudycard";

class CaseStudy extends Component {
  render() {
    return (
      <div className="casestudy-section">
        <div className="casestudy-title">
          <h2>Case Studies</h2>
          <p>
            Successful projects balance creative and attractive design with
            functionality that increases the bottom line. Here are some recent
            client wins:
          </p>
        </div>
        <CaseStudyCard />
      </div>
    );
  }
}

export default CaseStudy;
