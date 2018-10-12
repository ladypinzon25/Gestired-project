import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResourceCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



export default class ResourceCard extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   icon:'/movies.ico'
    // };
    //
    // this.selectIcon = this.selectIcon.bind(this);
  }
  //
  // selectIcon(){
  //   if(this.props.recurso.tipoRecurso.includes('nfo')){
  //     return '/info.png';
  //   }
  //   else if (this.props.recurso.tipoRecurso.includes('WEB')){
  //     return '/web.png';
  //   }
  //   else if (this.props.recurso.tipoRecurso.includes('ideo')){
  //     return '/filevideo.png';
  //   }
  // }

  render() {
    return (
      <div>
        {console.log("entro a recurso card"+ this.props.resource.nombre)}
        <Card className='card'>
          <CardHeader
            title={this.props.resource.nombre}
            subheader={this.props.resource.fechaRegistro}
          />
          {/*<CardMedia className='media'*/}
            {/*image={this.selectIcon()}*/}
          {/*/>*/}
          <CardContent>
            <p>{this.props.resource.tipoRecurso}</p>
          </CardContent>
          <CardActions className='actions'>
            <Button href={this.props.resource.url}>Ver recurso</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
