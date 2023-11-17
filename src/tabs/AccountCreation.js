import { React, useState } from "react";
import Navbar from "../Components/Navbar";

import bg from '../images/AccountCreation.jpg';

import './AccountCreation.css';

export default function AccountCreation() {

    const [email, setEmail] = useState('');
    const [validEmail, isValidEmail] = useState(false)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, isSuccess] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            isValidEmail(false);
        } else {
            isValidEmail(true);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (password !== event.target.value) {
            setPasswordError('Passwords do not match');
        }
        else {
            setPasswordError('');
        }
    };


    const handleSubmit = () => {
        if (email === '' || password === '' || confirmPassword === '') {
            isSuccess('All fields are mandatory');
            return;
        }

        // Simulate an asynchronous call (replace this with your actual API call)
        const simulateRequest = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulating success after 2 seconds
                    resolve('Account created successfully!');
                }, 2000);
            });
        };

        simulateRequest()
            .then(response => {
                // Handle the response - 
                isSuccess('Success');
            })
            .catch(error => {
                // Handle errors
                isSuccess(error);
            });

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        isSuccess('');
    }

    return (
        <div className="accounts">
            <Navbar></Navbar>
            <div className='account'>
                <div className='account_box'>
                    <div className='account_box_left'>
                        <h2>Account Creation</h2>
                        <br />
                        <br />
                        <p>To create your account please enter your E-mail id and your desired password.</p>
                        <div className='account_box_left_input'>
                            <input type='email' placeholder='Enter your Email' value={email} onChange={handleEmailChange} />
                        </div>
                        {validEmail === true && <p style={{ color: 'red', marginLeft: '30px' }}>Enter valid email</p>}
                        <div className='account_box_left_input'>
                            <input type='password' placeholder='Enter your Password' value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className='account_box_left_input'>
                            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        </div>
                        {passwordError && <p style={{ color: 'red', marginLeft: '30px' }}>{passwordError}</p>}
                        <button className='btn1' onClick={handleSubmit}>CREATE ACCOUNT</button>
                        {success === "Success" ? <p style={{ color: 'green', marginLeft: '30px' }}>Created Account Successfully</p> : <p style={{ color: 'red', marginLeft: '30px' }}>{success}</p>}
                    </div>
                    <div className='account_box_right'>
                        <img src={bg} alt="account creation" />
                    </div>
                </div>
            </div>
        </div>
    )
}