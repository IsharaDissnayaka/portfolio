import React from 'react'

import logo from "../assets/Logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return ( 
  <nav className=" mb-30 flex items-center justify-between py-8">
    <div className="flex flex-shrink-0 items-center" > 
    <img src={logo} alt=""width={270}/>
    </div>
    <div className='m-8 flex items-center gap-4 text-3xl'>
       <a href="https://www.linkedin.com/in/ishara2000/"> <FaLinkedin /></a>
       <a href="https://github.com/IsharaDissnayaka"> <FaGithub /></a>
       <a href="https://www.instagram.com/__ish__ara/"> <FaInstagram /></a>

    </div>
  </nav>)
}

export default Navbar
