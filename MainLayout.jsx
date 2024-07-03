import React from 'react'
import HeroPage from './HeroPage'
import Navbar from './Navbar';
import Travel from '../Components/Travel';
import Ads from '../Components/Ads';
import Recipe from '../Components/Recipe';
import Card from './Card';
import LunchwithStar from '../SubMenu/LunchwithStar';
import Food from '../Components/Food';
import Footer from './Footer';
function MainLayout() {
  return (
    <div className='container mx-auto'>
        <HeroPage/>
        <Navbar/>
        <Travel/>
        <Travel/>
        <Travel/>
        <Ads/>
        <Card/>
        <LunchwithStar/>
        <Recipe/>
        <Food/>
        <Food/>
        <Food/>
        <Footer/>



        
    </div>
  )
}

export default MainLayout