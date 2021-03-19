import React from 'react';
class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onChangeKey = (event) => {
        if (event.which === 13) {
            this.onSubmitSignIn()
        }
    }

    onSubmitSignIn = () => {
        fetch(' https://safe-earth-86770.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home')
                } else {
                    alert('Wrong email and password combination.');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-20 mt5 shadow-5 center w-25-l w-75 " style={{ position: 'relative', zIndex: 1 }}>
                <main className="pa4-l pa2 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1-l f5 fw6 ph1 mh0">Sign In</legend>
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
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                onClick={this.onSubmitSignIn}
                                value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f5 center pv1 mw4 mt3 link shadow-hover black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;