import LandingPageUpper from './landing-page-upper/LandingPageUpper'
import LandingPageBottom from './landing-page-bottom/LandingPageBottom'
import './LandingPage.scss'
function LandingPage() {
  return (
    <div className='background'>
      <LandingPageUpper />
      <LandingPageBottom />
    </div>
  );
}
export default LandingPage;