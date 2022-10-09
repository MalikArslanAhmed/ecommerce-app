import './HeaderBottom.scss'
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";

function HeaderBottom() {
  return (
    <div className='header-bottom-wrapper'>
      <div className='daraz-logo-container'>

        <img className='logo' src="//icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" alt="Daraz" />

      </div>
      <div className='search-in-daraz'>
        <div className='search-input-container'>
          <input className='search-box' placeholder='Search in Daraz'/>
          <IconContext.Provider value={{ className: "search-icon" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
        <IconContext.Provider value={{ className: "add-to-cart" }}>
          <FiShoppingCart />
        </IconContext.Provider>
      </div>
      <div className='download-app'>
        <img className='download-app-img' src="//icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png" alt='' />
      </div>
    </div>

  );
}

export default HeaderBottom;