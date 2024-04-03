import react from 'react'
import BasicTax from '../BasicTax/basictax';
import HomePage from '../Pages/homePage';
import Tax_Calculation from '../Pages/tax_calculation';
import NavBar from '../Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import Tax_1040 from '../Pages/Tax_1040';
import Income from '../Pages/Income';
import LoginPage from '../Pages/LoginPage';
import ServicesPage from '../Pages/ServicesPage';
import PricingPage from '../Pages/PricingPage';
import ContactUsPage from '../Pages/ContactUsPage';
import WhoWeArePage from '../Pages/WhoWeArePage';
import JackBio from '../Pages/JackBio';
import Values from '../Pages/Values';

function App() {
  //router for different URLs
  return (
    <div className='container'>
      <NavBar/>
      <div >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/basicTax' element={<Tax_Calculation />} />
          <Route path='/1040' element={<Tax_1040/>}/>
          <Route path='/income' element={<Income />}/>
          <Route path='/Login' element={<LoginPage />}/>
          <Route path='/Services' element={<ServicesPage />}/>
          <Route path='/Pricing' element={<PricingPage />}/>
          <Route path='/ContactUs' element={<ContactUsPage />}/>
          <Route path='/WhoWeAre' element={<WhoWeArePage />}/>
          <Route path='/JackBio' element={<JackBio />}/>
          <Route path='/Values' element={<Values />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
