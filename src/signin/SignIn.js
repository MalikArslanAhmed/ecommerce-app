import './SignIn.scss'
import {
    Link
  } from "react-router-dom";
function SignIn() {
  return (
    <div className="wrapper-signin">
        <div className="width-adjust">
            <div className="container-one">
                <h3 className="welcome-to-daraz">Welcome to Daraz! Please login.
                </h3>
                <p className="new-member">New member?  <Link to='/sign-up' className="register"> Register </Link>  here.
                </p>
            </div>
            <div className="container-two">
                <div className="container-two-left">
                    <div className="input-wrapper">
                        <div className="input-container">
                            <label>Phone Number or Email*</label>
                            <input type="email" className="email-input" placeholder="Please enter your Phone Number or Email"/>
                        </div>
                        <div className="input-container">
                            <label>Password*</label>
                            <input type="password" className="password-input" placeholder="Please enter your Password"/>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <Link to='/forget-password'>Forgot Password?</Link>
                    </div>
                </div>
                <div className="container-two-right">
                    <button className="login-button-one">LOGIN</button>
                    <p>Or, login with</p>
                    <button className="facebook-button-one">Facebook</button>
                    <button className="google-button-one">Google</button>

                </div>
            </div>
        </div>
    </div>
    );
}

export default SignIn;