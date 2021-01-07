import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import CaseStudy from "./casestudy";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="#aboutme" component={About} />
    <Route exact path="#projects" component={Projects} />
    <Route exact path="#casestudy" component={CaseStudy} />
    <Route exact path="#contact" component={Contact} />
  </Switch>
);

export default Main;
