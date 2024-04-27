import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const Navbar = () => {

const {user,logOut }= useContext(AuthContext)

// console.log(user)

const link = <>
<div className="flex  flex-col text-[17px] lg:flex-row" id="sidebar">
<li><NavLink to={'/'}>Home</NavLink></li>
<li><NavLink to={'/allart'}>All Art & craft Items</NavLink></li>
{
  user && <>
  <li><NavLink to={'/addcraft'}>Add Craft Item</NavLink></li>
<li><NavLink to={'/myartlist'}>My Art&Craft List</NavLink></li>
  </>
}
</div>

</>
const handleLogout = () =>{
  logOut()
  .then()
  .catch()
}

    return (
        <div className="navbar bg-base-100 md:px-16 md:mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <div className="flex items-center gap-0">
      <img className="w-10  md:w-16" src="https://i.ibb.co/9NyQJ8g/watercolor.png" alt="" />
    <a className="btn text-xl btn-ghost font-extrabold md:text-4xl">ArtisticVista</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">

{
  user ?<>
   <div className="tooltip flex dropdown-end" data-tip={user?.displayName || 'user name not found'}>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user?.photoURL  || 'https://i.ibb.co/sgsSHth/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg'} />
      </div>
    </label>
   
  </div>
  <div>
  <button
          onClick={handleLogout}
          className="btn p-1 text-[12px] md:text-[17px] md:p-4 bg-[#990000] hover:bg-[#7a1c1c] text-[#ecf0f1]">Logout</button>
  </div>
  </>
    :
    <Link to='/login'>
      <button className="btn  bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1]">Login</button>
    </Link>
}
</div>
</div>
    );
};

export default Navbar;