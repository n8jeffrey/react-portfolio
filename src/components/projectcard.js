import React, { Component } from "react";

const ProjectCard = () => {
  const cardInfo = [
    {
      cardColor:
        "radial-gradient(circle, rgba(126,171,253,1) 0%, rgba(126,137,253,1) 100%)",
      projectImage: "https://i.imgur.com/rkX5DZI.png",
      projectTopic: "React",
      projectTitle: "Recipe Generator",
      projectDescription:
        "Using the Edamam API, this React application will generate recipes based on search terms and display the instrcutions, ingredients and calories for each.",
      githubButton: "https://github.com/n8jeffrey/reactiverecipes",
      liveButton: "https://reactive-recipes.netlify.app/",
    },
    {
      cardColor:
        "radial-gradient(circle, rgba(239,112,157,1) 0%, rgba(241,174,227,1) 100%)",
      projectImage: "https://i.imgur.com/SXAxBWC.png",
      projectTopic: "React",
      projectTitle: "Wildfire Tracker",
      projectDescription:
        "A project that involved the Google Maps service and the NASA API that tracks wildfires happening around the world.",
      githubButton: "",
      liveButton: "",
    },
    {
      cardColor:
        "radial-gradient(circle, rgba(174,228,163,1) 0%, rgba(127,186,115,1) 100%)",
      projectImage: "https://i.imgur.com/ius8UJV.png",
      projectTopic: "React",
      projectTitle: "COVID Statistics",
      projectDescription:
        "A COVID-19 Statistical Application that keeps track of current number of cases, and plots them on a chart. I used Charts.js and the Health Canada API.",
      githubButton: "",
      liveButton: "",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card-template" key={index}>
        <div
          className="card-object"
          style={{
            height: "400px",
            width: "70%",
            background: card.cardColor,
            margin: "50px auto",
          }}
        >
          <div className="card-section-left">
            <p className="project-topic">{card.projectTopic}</p>
            <h3>{card.projectTitle}</h3>
            <p className="project-description">{card.projectDescription}</p>
            <div className="button-section">
              <button className="live-button" href={card.liveButton}>
                Live Demo
              </button>
              <button className="git-button" href={card.githubButton}>
                GitHub Repo
              </button>
            </div>
          </div>
          <div className="card-section-right">
            <img alt="project prototype" src={card.projectImage} />
          </div>
        </div>
      </div>
    );
  };

  return <div>{cardInfo.map(renderCard)}</div>;
};

export default ProjectCard;
