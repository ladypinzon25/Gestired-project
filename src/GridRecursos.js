import React, { Component } from 'react';
import CardRecurso from './CardRecurso';
import Grid from '@material-ui/core/Grid';

const urlBase = 'http://127.0.0.1:8000/';

class GridRecursos extends Component {
  constructor(props){
    super(props);

    this.state={
      projects: null
    };

    
  }

  componentDidMount(){
    fetch(urlBase+'gestired/project/')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({projects:json.objects}))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.projects);
    if(this.state.projects!=null)
    {
      return (
        <Grid container className='root' spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {this.state.projects.map(value => (
                <Grid key={value.name} item>
                  <CardRecurso title={value.name} date={value.fechaRegistro} type={'Proyecto'}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
    }
    else{
      return(<div></div>);
    }
  }
}

export default GridRecursos;