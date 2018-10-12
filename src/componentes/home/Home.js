import React, {Component} from 'react';
import ProjectsAPI from '../api/ProjectsAPI'
import './Home.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Project from '../projects/Proyecto';
import ProjectCard from "../projects/ProjectCard";
import ResourceCard from "../resources/ResourceCard";
import Options from "../home/Options";
import InformationPanel from "../home/InformationPanel";

class Home extends Component {

  state = {
    projects: null,
    seeProjects: true,
    seeResources: false,
    seeInfoResource: false,
    showMyProjects: false,
    resourcesByLabel: false,
    resourcesByTimeline: false,
    actualOption: "",
    currentProject: null,
    options: ["Todos los proyectos", "Mis proyectos"]
  };

  viewProject = (id) => {
    console.log("entro a ver proyecto ohhh" + id.name)
    this.setState({
      seeProjects: false,
      seeResources: true,
      currentProject: id,
    })

  };
  viewResource = () => {
    this.setState({
      seeInfoResource: true,
    })
  };
  showOption = (option) => {
    if (option === "Todos los proyectos") {
      this.setState({
        seeProjects: true,
        showMyProjects: false,
        seeResources: false,
        resourcesByLabel: false,
        resourcesByTimeline: false,
      })
    }
    else if (option === "Mis proyectos") {
      this.setState({
        showMyProjects: true,
        seeProjects: false,
        seeResources: false,
        resourcesByLabel: false,
        resourcesByTimeline: false,
      })
    }
    else if (option === "Todos los recursos") {
      this.setState({
        seeResources: true,
        showMyProjects: false,
        seeProjects: false,
        resourcesByLabel: false,
        resourcesByTimeline: false,
      })
    }
    else if (option === "Recursos por etiquetas") {
      this.setState({
        resourcesByLabel: true,
        showMyProjects: false,
        seeProjects: false,
        seeResources: false,
        resourcesByTimeline: false,
      })
    }
    else if (option === "Recursos por linea de tiempo") {
      this.setState({
        resourcesByTimeline: true,
        showMyProjects: false,
        seeProjects: false,
        seeResources: false,
        resourcesByLabel: false,

      })
    }

  };


  render() {
    return (
      <div className="home">
        {/*{this.state.projects!=null ? this.state.projects.map(p =>*/}
        {/*(<div>*/}
        {/*{p.etiquetas}*/}
        {/*</div>)): ""}*/}
        <div className="home__bar">
          <div className="home__bar-title">Gestired</div>
          <div className="home__data-container">
            <div className="home__bar-user-name">Orlando S.</div>
            <div className="home__menu-container">
              <img src="/images/menu-logo.png" className="home__menu"/>
            </div>
          </div>
        </div>
        <Options showOption={this.showOption} options={this.state.options}/>
        <Card className="home__information-card">
          <div className="home__navigation-info">
            Proyectos
          </div>
          {this.state.seeProjects? <InformationPanel content="projects" viewProject={this.viewProject} currentProject={this.state.currentProject}/>:
            <InformationPanel content="resources" viewResources={this.viewResource} currentProject={this.state.currentProject}/>}
        </Card>
      </div>);

  }
}

export default Home;