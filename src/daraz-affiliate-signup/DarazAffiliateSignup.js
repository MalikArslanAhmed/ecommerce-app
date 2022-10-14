import './DarazAffiliateSignup.scss'
function DarazAffiliateSignup() {
    return (
        <div className="daraz-affiliate-signup-wrapper">
            <div className='img-one-container'>
                <img className='img-one' src='/daraz-affiliate-signup-img-one.png' alt='' />
            </div>
            <div className='container-one'>
                <label className='acc-type'>Account Type</label>
                <div className='check-box-container-one'>
                    <div>
                        <input className='input' type="radio" id="html" name="fav_language" value="HTML" />
                        <label htmlFor="html">I am signing up as an individual</label>
                    </div>
                    <div>
                        <input className='input' type="radio" id="css" name="fav_language" value="CSS" />
                        <label htmlFor="css">I am signing up as a company / enterprise</label>
                    </div>
                </div>
            </div>
            <div className='container-two'>
                <label>Full Name / Legal Business Name</label>
                <input ></input>
                <label>Business Registration Number (If Signing up as a Business)</label>
                <input ></input>
                <label>Email Address (Open a daraz Shopping Account with the Same Email)</label>
                <input ></input>
                <label>National Registration Number / Government Issued ID Number</label>
                <input ></input>
                <label>Country You Are Based In</label>
                <input ></input>
                <label>Province</label>
                <input ></input>
                <label>City</label>
                <input ></input>
                <label>Postal Address</label>
                <input ></input>
                <label>Phone Number</label>
                <input ></input>
                <label >Tell us about your traffic (Please provide links to the Website / App / Page where you will promote Daraz)</label>
                <input className='description-or-links'></input>
                <label>Monthly Traffic Size</label>
                <select>
                    <option>Less than 50000</option>
                    <option>50000 - 100000</option>
                    <option>100000 - 150000</option>
                    <option>150000 - 200000</option>
                </select>
            </div>
            <div className='container-three'>
                <label className='traffic-type'>Traffic Type</label>
                <div className='check-box-container-two'>
                    <div>
                        <input className='input' type="radio" id="Cashback" name="fav_language" value="Cashback" />
                        <label htmlFor="Cashback">Cashback</label>
                    </div>
                    <div>
                        <input className='input' type="radio" id="price-comparison-site" name="fav_language" value="price-comparison-site" />
                        <label htmlFor="price-comparison-site">Price Comparison Site</label>
                    </div>
                    <div>
                        <input className='input' type="radio" id="coupon-engine" name="fav_language" value="coupon-engine" />
                        <label htmlFor="coupon-engine">CouponEngine</label>
                    </div>
                    <div>
                        <input className='input' type="radio" id="network" name="fav_language" value="network" />
                        <label htmlFor="network">Network</label>
                    </div>
                    <div>
                        <input className='input' type="radio" id="influencer" name="fav_language" value="influencer" />
                        <label htmlFor="influencer">Influencer / Content Creator</label>
                    </div>
                </div>
            </div>
            <div>
                <label>Do you agree to the Terms & Conditions to <b>become a daraz affiliate?</b></label>
            </div>
            <div className='yes-no'>
                <div>
                    <input className='input' type="radio" id="yes" name="fav_language" value="yes" />
                    <label htmlFor="yes">YES</label>
                </div>
                <div>
                    <input className='input' type="radio" id="no" name="fav_language" value="no" />
                    <label htmlFor="no">NO</label>
                </div>
            </div>
            <div className='submit-button-container'>
                <button className='submit-button'>Submit Form</button>
            </div>
        </div>
    );
}

export default DarazAffiliateSignup;