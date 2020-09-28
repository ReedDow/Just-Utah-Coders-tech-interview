import React, { Component } from 'react';
import '../components/ContactForm.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';


class ContactForm extends Component {
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
        this.setState({name: event.target.value})
      };

    handleInputEmail = (event) => {
        this.setState({email: event.target.value})
    };

    handleInputBirthday = (event) => {
        this.setState({ birthdate: event.target.value})
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

//checks validity of email, validity of birthdate, and checkbox agreement to be contacted via email.
    handleSubmit = (event) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
            }))
            (alert('Success!'))(this.setState({
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
                        value = {this.state.name}
                        onChange={this.handleInputName}
                    />
                </Form.Field>
                <Form.Field className='email'>
                    <label>Email</label>
                    <input className='input2'
                        type='text'
                        value = {this.state.email}
                        onChange={this.handleInputEmail}
                    />
                </Form.Field>
                <Form.Field className='birthdate'>
                    <label>Birth date</label>
                    <input className='input3'
                        type='text'
                        placeholder='YYYY-MM-DD'
                        value = {this.state.birthdate}
                        onChange={this.handleInputBirthday}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox className='chk'
                        label='I agree to be contacted via email'
                        onClick={this.handleCheckbox} />
                </Form.Field>
                <Button className='clearbtn'
                    type='clear'
                    value = {this.state.check}
                    onClick={this.handleClear}>Clear</Button>
                <Button className='submitbtn'
                    type='submit'
                    disabled = {!this.state.name, !this.state.email, !this.state.check}
                    onClick={(e => this.handleSubmit(e))}>Submit</Button>
            </Form>
        )
    }
}


export default ContactForm