import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header'
import LandingPage from './landingpage/LandingPage'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import ForgetPassword from './forget-password/ForgetPassword'
import DarazAffiliateProgram from './daraz-affiliate-program/DarazAffiliateProgram'
import DarazAffiliateSignup from './daraz-affiliate-signup/DarazAffiliateSignup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from './Redux/features/counter/Counter';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='sign-in' element={<SignIn />}>
          </Route>
          <Route path='forget-password' element={<ForgetPassword />}>
          </Route>
          <Route path='sign-up' element={<SignUp />}>
          </Route>
          <Route path='/' element={<LandingPage />}>
          </Route>
          <Route path='/daraz-affiliate-program' element={<DarazAffiliateProgram />}>
          </Route>
          <Route path='/daraz-affiliate-signup' element={<DarazAffiliateSignup />}>
          </Route>
          <Route path='/redux-test' element={<Counter />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
