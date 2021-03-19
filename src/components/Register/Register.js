import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmail : '',
            newPassword : '',
            newName: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({newEmail : event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({newPassword : event.target.value})
    }
    
    onNameChange = (event) => {
        this.setState({newName : event.target.value})
    }

    onChangeKey = (event) => {
        if (event.which === 13) {
            this.onSubmitRegister()
        }
    }

    onSubmitRegister = () => {
        fetch(' https://safe-earth-86770.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.newEmail,
                password: this.state.newPassword,
                name: this.state.newName
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('signin');
            } else if(user === 'duplicate'){
                alert('Your email has been registered');
            } else if (user === 'blank') {
                alert ('Can not register with any empty blank.')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <article className="br3 ba b--black-20 mv4 w-25-l w-75 shadow-5 mw6 center" style={{ position: 'relative', zIndex: 1}}>
                <main className="pa4-l pa2 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">User Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="name" id="name" 
                                onChange={this.onNameChange}
                                onKeyPress={this.onChangeKey}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address" id="email-address" 
                                onChange={this.onEmailChange}
                                onKeyPress={this.onChangeKey}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="password" id="password" 
                                onChange={this.onPasswordChange}
                                onKeyPress={this.onChangeKey}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="tc b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="text" 
                            onClick= {this.onSubmitRegister}
                            value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;