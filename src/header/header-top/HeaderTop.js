import './HeaderTop.scss'
import {

  Link
} from "react-router-dom";
function HeaderTop() {
  return (
    <nav className='header-top-wrapper'>
      <ul className='list-container'>
        <li className='list save-more'>SAVE MORE ON APP</li>
        <li className='list'>DARAZ AFFILIATE PROGRAM</li>
        <li className='list'>SELL ON DARAZ</li>
        <li className='list'>CUSTOMER CARE</li>
        <li className='list'>TRACK MY ORDER</li>
        <li className='list'><Link className='login' to='/sign-in'>LOGIN</Link></li>
        <li className='list'><Link className='signup' to='/sign-up'>SIGNUP</Link></li>
        <li className='list'>زبان تبدیل کریں</li>
      </ul>
    </nav>
  );
}

export default HeaderTop;
