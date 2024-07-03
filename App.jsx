import { useState } from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Footer'
import Home from './Components/Home';
import Travel from './Components/Travel';
import Food from './Components/Food';
import FamilyFun from './Components/FamilyFun';
import Recipe from './Components/Recipe';
import Events from './Components/Events';
import Foundation from './Components/Foundation';
import ContactUs from './Components/ContactUs';
import MainLayout from './Pages/MainLayout';
import LunchwithStar from './SubMenu/LunchwithStar';
import NonVeg from './SubMenu/NonVeg';
import Veg from './SubMenu/Veg';
import Challenge from './SubMenu/Challenge';
import RahanVeg from './SubMenu/RahanVeg';
import OreeMummy from './SubMenu/OreeMummy';
import Spiritual from './SubMenu/Spiritual';
import National from './SubMenu/National';
import International from './SubMenu/International';
import Restaurant from './SubMenu/Restaurant';
import StreetFood from './SubMenu/StreetFood';
import Ads from './Components/Ads';
import Card from './Pages/Card';
import CardList from './Pages/CardList';
import RecipeData from './Pages/RecipeData';
import TravelData from './Components/TravelData';
import Lunch from './SubMenu/Lunch';
import QuickLink from './Pages/QuickLinks';
import WomenEmpowerment from './SubMenu/WomenEmpowerment';
import Awards from './SubMenu/Awards';
function App() {
  

  return (
    <>
<Router>
<Routes>
  <Route path='/' element={<Home/>} />

  <Route path='food' element={<Food/>}>
  <Route path='/food/restaruant' element={<Restaurant/>}></Route>
  <Route path='/food/streetfood' element={<StreetFood/>}></Route>
  <Route path='/food/lunchWithStar' element={<LunchwithStar/>}></Route>
  </Route>
  
  <Route path='/travel' element={<Travel/>}>
  <Route path='/travel/spiritual' element={<Spiritual/>}></Route>
  <Route path='/travel/national' element={<National/>}></Route>
  <Route path='/travel/international' element={<International/>}></Route>

  
  </Route>
  <Route path='/familyfun' element={<FamilyFun/>}>
  <Route path='/familyfun/challenge' element={<Challenge/>} />
  <Route path='/familyfun/rahanVeg' element={<RahanVeg/>} />
  <Route path='/familyfun/oreeMummy' element={<OreeMummy/>} />

  
  </Route>
  <Route path='/recipe' element={<Recipe/>}>
  <Route path='/recipe/veg' element={<Veg/>} />
  <Route path='/recipe/nonVeg' element={<NonVeg/>} />

  
  </Route>
  <Route path='/quickLink' element={<QuickLink/>}>
  <Route path='/quickLink/womenEmpowerment' element={<WomenEmpowerment/>}/>
  <Route path='/quickLink/award' element={<Awards/>}/>
  <Route path='/quickLink/foundation' element={<Foundation/>} />
  </Route>

  <Route path='/events' element={<Events/>} />
  <Route path='/contactus' element={<ContactUs/>} />
  <Route path='/ads' element={<Ads/>} />
  <Route path='/card' element={<Card/>} />
  <Route path='/recipeData' element={<RecipeData/>} />
  <Route path='/travelData' element={<TravelData/>} />
<Route path='/lunch' element={<Lunch/>}/>
  <Route path='/cardList' element={<CardList/>} />

</Routes>


  </Router>        
    </>
  )
}

export default App
