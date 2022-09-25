import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header'
import LandingPage from './landingpage/LandingPage'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Routes> */}
      <div>
        <Header />
        <LandingPage />
        <Footer />
      </div>
      {/* </Routes> */}
    </Router>
  )
}

export default App;
