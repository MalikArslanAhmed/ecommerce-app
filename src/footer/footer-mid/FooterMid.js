import './FooterMid.scss'
// import { BiAccessibility } from "react-icons/bi";


function FooterMid() {
    return (
        <div className='wrapper-two'>
            <div className='footer-two-container-one'>
                <div className='container-one'>
                    <span className='span'>Payment Methods</span>
                    <div>
                        <img className='payment-methods' src=" payment-methods.png" alt=" payment-methods" />
                    </div>
                    <span className='c-daraz'>© Daraz 2022</span>
                </div>
                <div className='container-two'>
                    <span className='span'>Daraz International</span>
                    <div className='img'>
                        <img className='daraz-international' src="daraz-international.png" alt="daraz-international" />
                    </div>
                </div>
            </div >
            <div className='footer-two-container-two'>
                <div className='container-three'>
                    <span className='span'>Follow Us</span>
                    <div>
                        <img className='follow-us' src="follow-us.png" alt="follow-us" />
                    </div>
                </div>
                <div className='container-four'>
                    <span className='span'>Verified by</span>
                    <div>
                        <img className='verified-by' src="verified-by.png" alt="verified-by" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterMid