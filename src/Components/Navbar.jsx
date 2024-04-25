import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {

const link = <>
<div className="flex  flex-col lg:flex-row" id="sidebar">
<li><NavLink to={'/'}>Home</NavLink></li>
<li><NavLink to={'/allart'}>All Art & craft Items</NavLink></li>
<li><NavLink to={'/addcraft'}>Add Craft Item</NavLink></li>
<li><NavLink to={'/myartlist'}>My Art&Craft List</NavLink></li>
</div>

</>


    return (
        <div className="navbar bg-base-100 md:px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <a className="btn text-xl btn-ghost md:text-4xl">ArtisticVista</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
  
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;