const CaseStudyCard = () => {
  const studyInfo = [
    {
      studyColor: "white",
      studyImage: "https://i.imgur.com/zbZ1xIm.png",
      studyTopic: "SEO",
      studyTitle: "Top Rankings & Establishing Authority",
      studyDescription:
        "In the highly competitive market we were able to put OnSide Performance Centre, a fitness/wellness facility at the top of the search ranking for highly competitive keywords. Not only were we able to put them up top but we also gained search rankings for competitors linked in the content, establishing OnSide as a trustworthy, honest, and helpful facility.",
      platforms: "WEB",
      deliverables: "SEO and Content Marketing",
      fullStudyLink: "https://reactive-recipes.netlify.app/",
    },
  ];

  const renderCaseStudyCard = (study, index) => {
    return (
      <div className="card-template" key={index}>
        <div
          className="card-object"
          style={{
            height: "400px",
            width: "70%",
            color: study.studyColor,
            margin: "50px auto",
          }}
        >
          <div className="study-card">
            <p className="study-topic">{study.studyTopic}</p>
            <h3>{study.studyTitle}</h3>
            <p className="project-description">{study.studyDescription}</p>
            <div className="property-section">
              <div className="platform">
                <div className="labelled-section">
                  <p className="label">Platforms: </p>
                  <p className="content">{study.platforms}</p>
                </div>
              </div>
              <div className="deliverables">
                <div className="labelled-section">
                  <p className="label">Deliverables: </p>
                  <p className="content">{study.deliverables}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{studyInfo.map(renderCaseStudyCard)}</div>;
};

export default CaseStudyCard;
