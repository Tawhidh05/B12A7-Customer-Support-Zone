import React from 'react';

const navbar = () => {
    return (
  <div className="flex px-20 navbar bg-[#FFFFFF]">
  <div className="flex-1 pr-[50px] md:pr-[500px]">
    <a className="btn btn-ghost text-2xl font-bold text-[#130B2D]">CS — Ticket System</a>
  </div>
  <div className="flex-2">
  <div className="text-[#000000] justify-center items-center">
    <ul className="menu menu-horizontal">
      <li><a href="">Home</a></li>
     <li><a href="">FAQ</a></li>
     <li><a href="">Changelog</a></li>
     <li><a href="">Blog</a></li>
     <li><a href="">Download</a></li>
     <li><a href="">Contact</a></li>
    </ul>
     <button className="btn shadow-none border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] color-white rounded-sm">+ New Ticket</button></div>
  </div>
</div>
    );
};


export default navbar;