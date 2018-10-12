import React, {Component} from 'react';
import ProjectsAPI from '../api/ProjectsAPI'
import './Home.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import "./Options.css"
import Project from '../projects/Proyecto';
import ProjectCard from "../projects/ProjectCard";
import ResourceCard from "../resources/ResourceCard";
import "./InformationPanel.css"


class InformationPanel extends Component {

  state = {
    projects: this.props.projects,
    currentProject: this.props.currentProject
  };

  componentDidMount() {
    ProjectsAPI.getAllProjects((response) => {
      this.setState({
        projects: response.data.objects
      })
    });

  }
updateInfo = (id) => {
  this.props.viewProject(id);
  this.setState({
    projects: id,
  })

};

  render() {
    return (
      <div className="information-panel">

        {this.props.content === "projects" && this.state.projects!=null? this.state.projects.map((tile, i) => (
          <ProjectCard project={tile} viewProject={this.updateInfo}/>
        )) : (this.props.content === "resources"  && this.state.projects!=null  && this.state.currentProject!=null? this.state.projects.filter((a)=>{return(
        a.id = this.state.currentProject.id)
        }).map((actual, i) => (
          <ResourceCard resource={actual}/>

        )) : "")
        }
      </div>);
  }
}

export default InformationPanel;