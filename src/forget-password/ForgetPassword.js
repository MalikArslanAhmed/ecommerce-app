import './ForgetPassword.scss'
function ForgetPassword() {
    return (
        <div className="wrapper-forget-password">
            <div className="width-adjust">
                <div className="container-one">
                    <h3 className="forget-your-password">Forgot your password?
                    </h3>
                </div>
                <div className="container-two">
                    <div className="input-container">
                        <label className='text'>Enter your email address below and we’ll send you a link to reset your password</label>
                        <div className='down-side'>
                            <label className='label'>Phone Number or Email</label>
                            <input type="email" className="email-input" placeholder="Please enter your Phone Number or Email" />
                            <button className='button'>Submit</button>
                            <a href='/sign-in' className='go-back'>Go back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;