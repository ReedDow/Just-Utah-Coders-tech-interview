import React, { Component } from 'react';
import '../components/Form.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Alert } from 'react-alert';

class Contactform extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            birthdate: '',
            check: false,
        }
    }

//event handlers
    handleInputName = (event) => {
        let keyword = event.target.value;
        this.setState({name: keyword})
      };

    handleInputEmail = (event) => {
        let keyword = event.target.value;
        this.setState({email: keyword})
    }

    handleInputBirthday = (event) => {
        let keyword = event.target.value
        this.setState({ birthdate: keyword })
    }

    handleCheckbox = (prevState) => {
        this.setState({ check: !prevState.check})
    }

    handleClear = () => {
        this.setState({
            name: '',
            email: '',
            birthdate: '',
            check: false,
        })
        
    }

//checks for presence and validity of email, presence of name, validity of birthdate, and checkbox agreement to be contacted via email.
    handleSubmit = (event) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.name === '' || this.state.email === '' || this.state.check === false) {
            alert('Please Complete Form and Agree to be Contacted by Email')
        }
        if (!re.test(this.state.email)) {
            alert('Invalid Email')
        }
        else {(axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users ', {
                name: this.state.name,
                email: this.state.email,
                birthDate: this.state.birthdate,
                emailConsent: this.state.check
            }) 
            .then((response) => {
                console.log(response.status)
            })
            .catch((error) => {
                console.log(error)
            }))(alert('Success!'))(this.setState({
                name: '',
                email: '',
                birthdate: '',
                check: false,
            })
            )
        }
        event.preventDefault()
    }

    render() {
        return (
            <Form className='form'>
                <header className='header'>
                    Contact Us
                </header>
                <Form.Field className='name'>
                    <label>Name</label>
                    <input className='input1'
                        type='text'
                        placeholder='Name'
                        onChange={(e) => this.handleInputName(e)}
                    />
                </Form.Field>
                <Form.Field className='email'>
                    <label>Email</label>
                    <input className='input2'
                        type='text'
                        placeholder='Email'
                        onChange={(e) => this.handleInputEmail(e)}
                    />
                </Form.Field>
                <Form.Field className='birthdate'>
                    <label>Birth date</label>
                    <input className='input3'
                        type='text'
                        placeholder='YYYY-MM-DD'
                        onChange={(e) => this.handleInputBirthday(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox className='chk'
                        label='I agree to be contacted via email'
                        onClick={this.handleCheckbox} />
                </Form.Field>
                <Button className='clearbtn'
                    type='clear'
                    onClick={this.handleClear}>Clear</Button>
                <Button className='submitbtn'
                    type='submit'
                    onClick={(e => this.handleSubmit(e))}>Submit</Button>
            </Form>
        )
    }
}


export default Contactform