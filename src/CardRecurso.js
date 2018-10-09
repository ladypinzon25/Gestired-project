import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardRecurso.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



export default class CardRecurso extends Component {
  render() {
    return (
      <div>
        <Card className='card'>
          <CardHeader
            title={this.props.title}
            subheader={this.props.date}
          />
          <CardMedia className='media'
            image='/movies.ico'
          />
          <CardContent>
            <p>{this.props.type}</p>
          </CardContent>
          <CardActions className='actions'>
            <Button>Ver recurso</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
