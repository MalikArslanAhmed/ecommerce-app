import './SignUp.scss'
import { TiArrowUnsorted } from "react-icons/ti";
import { AiFillFacebook } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from 'react';
import {
    Link
} from "react-router-dom";
function SignUp() {
    const [input, setInputs] = useState({
        phone: '',
        password: '',
        month: '',
        day: '',
        year: '',
        gender: '',
        fullName: '',
        checkbox: false,
        checkbox1: false
    })
    // const [password, setPassword] = useState('')
    // const [month, setMonth] = useState('')
    // const [day, setDay] = useState('')
    // const [year, setYear] = useState('')
    // const [gender, setGender] = useState('')
    // const [name, setName] = useState('')
    // const [cheakbox, setCheakbox] = useState('')
    const handleChange = (event) => {  // name/value    => event.target
        setInputs({
            ...input,   //spread operator   triple dot ...
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }
    const loginUser = () => {
        console.log('checkbox=', input.checkbox);
    }
    const months = [
        { name: 'January', value: 'january' },
        { name: 'February', value: 'february' },
        { name: 'March', value: 'march' },
        { name: 'April', value: 'april' },
        { name: 'May', value: 'may' },
        { name: 'June', value: 'june' },
        { name: 'July', value: 'july' },
        { name: 'August', value: 'august' },
        { name: 'September', value: 'september' },
        { name: 'October', value: 'october' },
        { name: 'November', value: 'november' },
        { name: 'December', value: 'december' },
    ]

    let days = []
    for (let i = 1; i <= 31; i++) {
        days.push(<option key={i} value={i}>{i}</option>)
    }
    let years = []
    for (let j = 1950; j <= new Date().getFullYear(); j++) {
        years.push(<option key={j} value={j}>{j}</option>)
    }

    const genders = [
        { gender: 'Male', value: 'male' },
        { gender: 'Female', value: 'female' },
        { gender: 'Other', value: 'other' }
    ]
    return (
        <div className="wrapper-signup">
            <div className="width-adjust">
                <div className="container-one">
                    <h3 className="create-your-daraz">Create your Daraz Account
                    </h3>
                    <p className="already-member">Already member?<Link to='/sign-in' className="login"> Login </Link> here.
                    </p>
                </div>
                <div className="container-two">
                    <div className="container-two-left">
                        <div className="input-wrapper">
                            <div className="input-container">
                                <label className='label'>Phone Number*</label>
                                <input type="email" value={input.phone} name="phone" className="email-input padding"
                                    onChange={handleChange}
                                    placeholder="Please enter your phone number" />
                            </div>
                            <div className="input-container">
                                <label className='label'>Password*</label>
                                <input type="password" value={input.password} name="password" className="password-input padding"
                                    onChange={handleChange}
                                    placeholder="Minimum 6 characters with a number and a letter" />
                            </div>
                        </div>
                        <div className='birthday'>
                            <label className='label'>Birthday Gender</label>
                            <div className='month-day-year-gender'>
                                <div className='month-day-year'>
                                    <div className='input-select-container'>
                                        <select className='month' value={input.month} name="month" onChange={handleChange}>
                                            <option>Month</option>
                                            {months.map(item => {
                                                return <option key={item.value} value={item.value}>{item.name}
                                                </option>
                                            })
                                            }
                                        </select>
                                        <IconContext.Provider value={{ className: "arrow-updown" }}>
                                            <TiArrowUnsorted />
                                        </IconContext.Provider>
                                    </div>
                                    <div className='input-select-container'>
                                        <select className='day' value={input.day} name="day" onChange={handleChange}>
                                            <option value="">Day</option>
                                            {days.map(day => {
                                                return day
                                            })
                                            }
                                        </select>
                                        <IconContext.Provider value={{ className: "arrow-updown" }}>
                                            <TiArrowUnsorted />
                                        </IconContext.Provider>
                                    </div>
                                    <div className='input-select-container'>
                                        <select className='year' value={input.year} name="year" onChange={handleChange} >
                                            <option value="">Year</option>
                                            {years.map(year => {
                                                return year
                                            })
                                            }
                                        </select>
                                        <IconContext.Provider value={{ className: "arrow-updown" }}>
                                            <TiArrowUnsorted />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                                <div className='input-select-container'>
                                    <select className='gender' value={input.gender} name="gender" onChange={handleChange}>
                                        <option value="">Gender</option>
                                        {genders.map(item => {
                                            return <option key={item.value} value={item.value}>{item.gender}</option>
                                        })
                                        }
                                    </select>
                                    <IconContext.Provider value={{ className: "arrow-updown" }}>
                                        <TiArrowUnsorted />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container-two-right">
                        <div className="input-container">
                            <label className='label'>Full Name*</label>
                            <input type="text" className="full-name"
                                value={input.fullName} name="fullName" onChange={handleChange}
                                placeholder="Enter your first and last name" />
                        </div>
                        <div className='check-box-container'>
                            <label className='check-box'>
                                <input className='check-box-icon' type="checkbox"
                                    value={input.checkbox} name="checkbox" onChange={handleChange} />
                                <p>I'd like to receive exclusive offers and promotions via SMS
                                </p>
                            </label>
                        </div>
                        <button className="sign-up-button" onClick={loginUser}>SIGN UP</button>
                        <p className='sign-up'>By clicking “SIGN UP”, I agree to Daraz's <a className='term-of-use' href='a'>Terms of Use</a> and<a href='a'> Privacy Policy</a></p>
                        <p>Or, sign up with</p>
                        <button className="sign-up-with-email-button">Sign up with Email </button>
                        <div className='facebook-google-button'>
                            <button className="facebook-button"><IconContext.Provider value={{ className: "facebook-icon" }}>
                                <AiFillFacebook />
                            </IconContext.Provider>facebook</button>
                            <button className="google-button"><IconContext.Provider value={{ className: "google-icon" }}>
                                <FaGooglePlusG />
                            </IconContext.Provider>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SignUp;