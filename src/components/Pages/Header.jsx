import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css';

const Header = () => {
  const [searchText,setSearchText]=useState('')

  const handleChange = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);

}
  const navigate = useNavigate();

  const handleNavigate = () => {
    
    navigate(`/${searchText}`);
    setSearchText('')
}
  return (
    <div className="flex justify-between mx-8 items-center p-4 bg-green-700 text-white">
      <NavLink to="/">
        <div className="text-2xl">Taste Like Home</div>
      </NavLink>
      <div>
        <input
          name="searchText"
          value={searchText}
          onChange={handleChange}
          placeholder="searchMeal"
          className="px-2 text-black py-2 w-4/6 rounded-md focus:border-0"
        />

          <button onClick={()=>handleNavigate()} className="bg-white text-black px-1 py-2 rounded-md ml-1">
        Search
          </button>

      </div>
      <div>
        <ul className="flex flex-col md:flex-row gap-4 mr-4 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header