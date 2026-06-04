import React from 'react';
import { useState } from 'react';


const navbar = () => {
  const [isActive, setIsActive] = useState(false)
    return (
<div>

<div className="navbar bg-[#FFFFFF]">
  <div className="flex-1">
    <a className="btn btn-ghost text-md lg:text-2xl font-bold text-[#130B2D]">CS — Ticket System</a>
  </div>
  <div className="flex-none">
  <div className="text-[#000000] ">
    <ul className="menu menu-horizontal hidden lg:inline-flex">
      <li><a href="">Home</a></li>
     <li><a href="">FAQ</a></li>
     <li><a href="">Changelog</a></li>
     <li><a href="">Blog</a></li>
     <li><a href="">Download</a></li>
     <li><a href="">Contact</a></li>
    </ul>
    <div className="inline-flex gap-12">
     <button className="btn btn-sm lg:btn-md shadow-none border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] color-white rounded-sm">+ New Ticket</button></div>
  <button  onClick={() => setIsActive(!isActive)} className={"btn btn-circle text-black bg-white btn-neutral border-none shadow-none ml-2 inline-flex lg:hidden"}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
    </div>
  </div>
</div>
    <div className={`navbar bg-white items-center justify-center ${isActive ? 'block' : 'hidden'}`}>
  <div className="text-[#000000] ">
    <ul className="menu menu-horizontal item-center ">
      <li><a href="">Home</a></li>
     <li><a href="">FAQ</a></li>
     <li><a href="">Changelog</a></li>
     <li><a href="">Blog</a></li>
     <li><a href="">Download</a></li>
     <li><a href="">Contact</a></li>
    </ul>
    </div>
    </div>
</div>
    );
};


export default navbar;