import React from 'react'
import facebook from '../assets/Facebook.png';
import Instgram from '../assets/Instagram.png';
import Twitter from '../assets/Twitter.png';
import Youtube1 from '../assets/Youtube1.png';
import food from '../assets/food.png';
import { Link } from 'react-router-dom';
function Food() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-md overflow-hidden my-4">
      <img className="w-full h-342 object-cover md:w-1/2 bg-cover" src={food} alt="blog" />
      <div className="p-4 md:p-8 flex flex-col space-y-2">
        <h3 className="text-xl f">I went to Malaysia for the family trip and.......
      </h3>
        <p className="text-gray-700">by ABC XYZ</p>
        <div className="flex items-center justify-between">
        <Link to='/footer'>
          <button className='px-2 py-2 text-white font-bold bg-green-400 hover:bg-green-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 ml-2'>Show  More</button>
          </Link>
          <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={Youtube1} alt="you tube" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src={Instgram} alt="instgram" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
        </div>

       
      </div>
    </div>

    </div>
  )
}

export default Food
