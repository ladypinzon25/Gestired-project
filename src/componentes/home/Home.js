import React, {Component} from 'react';
import ProjectsAPI from '../api/ProjectsAPI'
import './Home.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Project from '../projects/Proyecto';
import ProjectCard from "../projects/ProjectCard";
import ResourceCard from "../resources/ResourceCard";


class Home extends Component {

  state = {
    projects: null,
    seeProjects: true,
    seeResources: false,
    seeInfoResource: false,
  };


  componentDidMount() {
    ProjectsAPI.getAllProjects((response) => {
      console.log("proyectos: " + response.data.objects)
      this.setState({
        projects: response.data.objects
      })
    });
  }

  viewProject = (state) => {
    console.log("antes" + this.state.seeProjects);
    this.setState({
      seeProjects: false,
      seeResources: state,
    })

  };
  viewResource = () => {
    this.setState({
      seeInfoResource: true,
    })
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
            <div className="home__bar-user-name">Cristian N.</div>
            <div className="home__menu-container">
              <img src="/images/menu-logo.png" className="home__menu"/>
            </div>
          </div>
        </div>
        <Card className="home__options-card">
          <Button variant="outlined" className="home__all-projects-button home__button">
            Todos los proyectos
          </Button>
          <Button variant="outlined" className="home__my-projects-button home__button">
            Mis proyectos
          </Button>
        </Card>
        <Card className="home__information-card">
          <div className="home__navigation-info">
            Proyectos
          </div>
          <div className="home__info-container">
            {this.state.projects && this.state.seeProjects ? this.state.projects.map((tile, i) => (
              <ProjectCard project={tile} viewProject={this.viewProject}/>
            )) : (this.state.projects && this.state.seeResources ? this.state.projects.resources.map((tile, i) => (
              <ResourceCard resources={tile} viewResource={this.viewResource}/>
            )) : "")
            }
          </div>
        </Card>
      </div>);

  }
}

export default Home;