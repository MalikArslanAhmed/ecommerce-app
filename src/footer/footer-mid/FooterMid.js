import './FooterMid.scss'
// import { BiAccessibility } from "react-icons/bi";


function FooterMid() {
    return (
        <div className='wrapper-two'>
            <div className='width-adjustment'>
                <p>Payment Methods</p>
                <div>
                    <img src="/payment-methods.png" alt=" payment-methods" />
                </div>
                <p>© Daraz 2022</p>
            </div>
            <div className='width-adjustment'>
                <p>Daraz International</p>
                <div >
                    <img src="/daraz-international.png" alt="daraz-international" />
                </div>
            </div>
            <div className='width-adjustment'>
                <p>Follow Us</p>
                <div>
                    <img src="/follow-us.png" alt="follow-us" />
                </div>
            </div>
            <div className='width-adjustment'>
                <p>Verified by</p>
                <div>
                    <img src="/verified-by.png" alt="verified-by" />
                </div>
            </div>
        </div>
    )
}

export default FooterMid