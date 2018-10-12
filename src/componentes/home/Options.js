import React, {Component} from 'react';
import ProjectsAPI from '../api/ProjectsAPI'
import './Home.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import "./Options.css"


class Home extends Component {

  state = {};



  render() {
    return (
      <Card className="home__options-card">
        {this.props.options.map((actual, i) => (
          <Button variant="outlined" className="home__button"
                  onClick={(actual) =>this.props.showOption(actual)}>
            {actual}
          </Button>))}
      </Card>);
  }
}

export default Home;