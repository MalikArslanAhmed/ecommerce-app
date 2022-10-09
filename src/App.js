import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header'
import LandingPage from './landingpage/LandingPage'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='sign-in' element={<SignIn />}>
          </Route>
          <Route path='sign-up' element={<SignUp />}>
          </Route>
          <Route path='/' element={<LandingPage />}>
          </Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
