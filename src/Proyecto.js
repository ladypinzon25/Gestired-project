import React, { Component } from 'react';
import GridRecursos from './GridRecursos';

const urlBase = 'http://127.0.0.1:8000/';

class Proyecto extends Component {
  constructor(props){
    super(props);

    this.state = {
      project:null
    };
  }


  componentDidMount(){
    fetch(urlBase+`gestired/project/${this.props.id}/`)
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({project:json}))
      .catch((err) => console.log(err));
  }
  
  render() {
    if(this.state.project!=null)
    {
      return (
        <div>
          <h1>Proyecto {this.state.project.id}</h1>
          <GridRecursos resources={this.state.project.resources}/>
        </div>
      );
    }
    else{
      return(<div></div>);
    }
  }
}

export default Proyecto;