
import logo from '../logo.png'
import '../App.css'
import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalLinearStepper from '../components/linearStepper';

export const Intake = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className='centered-heading'>
                    <h1>Welcome to CreditCamel! <br />
                        The revolutionary fintech tool to estimate your credit score.</h1>
                </div>
                <div className='stepper'>
                    <HorizontalLinearStepper />
                </div>
            </header>
        </div>

    );


}