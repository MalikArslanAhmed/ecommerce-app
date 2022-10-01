import './HeaderBottom.scss'
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
function HeaderBottom() {
  return (
    <div className='header-bottom-wrapper'>
      <div class="daraz-logo-container">
        <a href="//www.daraz.pk" data-spm="dhome">
          <img className='logo' src="//icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" alt="Daraz" />
        </a>
      </div>
      <div className='search-in-daraz'>
        <p className='para'>Search in Daraz</p>
      </div>
      <div className='daraz-search-icon'>
        <p className='search-icon'> <AiOutlineSearch /> </p>
      </div>
      <div className='add-to-cart'>
        <span className='cart'> <FiShoppingCart />
        </span>
      </div>
      <div className='download-app'>
        <a className='download-app-atribute' href="//www.daraz.pk/mobile-apps" data-spm="dewallet">
          <img className='download-app-img' src="//icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png" alt="" />
        </a>
      </div>
    </div>

  );
}

export default HeaderBottom;