import React, {Component} from 'react';
import './App.css';

import Contactform from './components/Form';

class App extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  render() {
    return(
    <Contactform
      name={this.state.name}
      email={this.state.email}
      birthdate={this.state.birthdate}
    />
    )
  }
}


export default App