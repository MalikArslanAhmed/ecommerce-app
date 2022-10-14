import './DarazAffiliateProgram.scss'
import {
    Link
} from "react-router-dom";
function DarazAffiliateProgram() {
    return (
        <div className="daraz-affiliate-program-wrapper">
            <div className='img-container'>
                <img className='img' src='https://laz-img-cdn.alicdn.com/tfs/TB1Cps8n639YK4jSZPcSutrUFXa.jpg#width=1920&height=300' alt='' />
            </div>
            <div className='daraz-affiliate-program-container'>
                <div className='img-one'>
                    <img src="//laz-img-cdn.alicdn.com/tfs/TB1pWACWxz1gK0jSZSgSuuvwpXa.jpg#width=1188&amp;height=140_1200x1200q75.jpg_.webp" alt='' />
                </div>
                <div className='sign-button-container'>
                    <Link to='/daraz-affiliate-signup'><button className='sign-button'>SIGN UP NOW</button></Link>
                </div>
                <div className='img-two'>
                    <img src="//laz-img-cdn.alicdn.com/tfs/TB1AfZ7itTfau8jSZFwSut1mVXa.jpg#width=1188&height=155_1200x1200q75.jpg_.webp" alt='' />
                </div>
                <div className='img-three'>
                    <img src="//laz-img-cdn.alicdn.com/tfs/TB1n0_4k9R26e4jSZFESuvwuXXa.jpg#width=1188&height=213_1200x1200q75.jpg_.webp" alt='' />
                </div>
                <div className='sign-button-container'>
                    <Link to='/daraz-affiliate-signup'><button className='sign-button'>SIGN UP NOW</button></Link>
                </div>
                <div className='buttom'>
                    <h1>Affiliate Agreement </h1>
                    <p>Affiliate Marketing in Pakistan Terms and Conditions (the “Agr eement”) shall constitute an Agreement between you (“You” or “Affiliate”) and the Company, for the registration and appointment of the Affiliate to provide the Company with Promotion of the Channels. The Affiliate and the Company shall collectively be referred to as the “Parties” and individually as the “Party”.</p>
                    <h3>1. DEFINITIONS </h3>
                    <p>1.1 Advertising Material shall mean any advertising materials provided by the Company to the Affiliate, to be published by the Affiliate on the Affiliate’s Accounts solely for the purposes of conducting the Promotion of the Channels, in accordance with the terms and conditions herein.</p>
                </div>
            </div>
        </div>
    );
}

export default DarazAffiliateProgram;