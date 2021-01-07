import "./App.css";
import { Component } from "react";
import { Header, Layout, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import About from "./components/about";
import Projects from "./components/projects";
import CaseStudy from "./components/casestudy";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="n8jeffrey" scroll>
            <Navigation>
              <a href="#aboutme">About</a>
              <a href="#projects">Projects</a>
              <a href="#casestudy">Resume</a>
              <a href="#contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="n8jeffrey">
            <Navigation>
              <a href="/aboutme">About</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
            <div id="aboutme">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="casestudy">
              <CaseStudy />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
