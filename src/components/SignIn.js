import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import passwordIcon from './pic/password_icon.png';
import visibleIcon from './pic/visible_icon.png';
import invisibleIcon from './pic/invisible_icon.png';
import errorIcon from './pic/error_icon.png';

class SignIn extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            hidePassword: true ,
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }
    
    validate = () => {
        let emailError = "";
        let passwordError = "";
        
        //if (email กับ password ไม่ตรงกัน)
        if (!this.state.email.includes("@")) {
            emailError = "invalid email !";
        }
        if (!this.state.password) {
            passwordError = "invalid password !";
        }
        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };
    
    managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    // componentDidUpdate(){
    //     console.log(this.state.hidePassword)
    // }

    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          this.setState(this.state);
        //   alert("Welcome to AHair");
        }
    };

    render(){
        return(
            <div className="big_container">
                <div className="container_login">
                    <div className="wrap_login">
                        <form className="login_form" onSubmit={this.handleSubmit}>

                            <span className="login_form_title">
                                <h1 style={{color:"#CB2D6F",fontSize:"50px"}}>
                                    Sign in
                                </h1>
                                <h5 style={{color:"#CB2D6F"}}>
                                    to continuous your service
                                </h5>
                            </span>
        
                            <div className="wrap_input">
                                <img className="input_icon"src={emailIcon} alt=""/>
                                <input  
                                    className = "input" 
                                    type = "email"
                                    id = "email"
                                    placeholder = "Email"
                                    value = {this.state.email}  
                                    onChange = {this.handleChange} 
                                />
                                <div className={this.state.emailError===""? "validate_wrap" :"invalidate_wrap"}>
                                    <div className="erroricon">
                                        <img src={errorIcon} alt= "" width="20px" />
                                    </div>
                                    <div className="texterror">
                                        <span>{this.state.emailError}</span>
                                    </div>
                                </div>
                            </div>
        
                            <div className="wrap_input" >
                                <img className="input_icon" src = {passwordIcon} alt=""/>
                                <input 
                                    className="input"
                                    type = {this.state.hidePassword? "password": "text"} 
                                    id = "password"
                                    placeholder = "Password"
                                    maxLength = "16" 
                                    value = {this.state.password}  
                                    onChange = {this.handleChange} 
                                />
                                <div className={this.state.passwordError===""?"validate_wrap" :"invalidate_wrap"}>
                                    <div className="erroricon">
                                            <img src={errorIcon} alt="" width="20px" />
                                    </div>
                                    <div className="texterror">
                                        <span>{this.state.passwordError}</span>
                                    </div>
                                </div>
                                <img 
                                    className="hideicon"
                                    onClick={this.managePasswordVisibility} 
                                    src={this.state.hidePassword? visibleIcon: invisibleIcon}  
                                    alt=""
                                />
                            </div>
        
                            <div className="wrap_button">
                                <button className="login_button" type="submit">
                                    Sign in
                                </button>
                            </div>

                            <h5 style={{color:"#CB2D6F", justifyContent:"center",textAlign:"center"}}>Or</h5>

                            <div className="wrap_button">
                                <Link className="link" to="/signup">
                                    <button className="login_button" type="reset">
                                        Sign up
                                    </button>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignIn;