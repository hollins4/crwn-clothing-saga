import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input'; 
import CustomButton from '../custom-button/custom-button';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();
    
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        const { signUpStart } = this.props
        signUpStart(displayName, email, password, confirmPassword)

        /*
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error)
        }
        console.log('Worked')
        */
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState( {  [name]: value } );

    };


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);