import React, { Component } from 'react';
import MulThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import 

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <div>
                <h1>Hello from user Details</h1>
            </div>
        );
    }
}

export default FormUserDetails;
