import React, {Component} from 'react';
import './App.css';
import ContactForm from './components/ContactForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
    <ContactForm
    />
    )
  }
}


export default App