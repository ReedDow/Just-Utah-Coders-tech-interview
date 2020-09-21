import React, {Component} from 'react';
import './App.css';
import Contactform from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
    <Contactform
    />
    )
  }
}


export default App