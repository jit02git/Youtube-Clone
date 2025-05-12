import React from "react";
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-2 w-60">
      <ul>
        <li className="my-2 text-xl"><Link to="/">Home</Link></li>
        <li className="my-2 text-xl"><Link to="/">Shorts</Link></li>
        <li className="my-2 text-xl"><Link to="/">Subscription</Link></li>
      </ul>
      <hr />
      <ul>
        <li className="my-2 text-xl"><Link to="/">You</Link></li>
        <li className="my-2 text-xl"><Link to="/">History</Link></li>
      </ul>
      <hr />
      <h1 className="font-bold text-2xl py-2"><Link to="/">Explore</Link></h1>
      <ul className="">
        <li className="py-2 text-xl"><Link to="/">Trending</Link></li>
        <li className="py-2 text-xl"><Link to="/">Shopping</Link></li>
        <li className="py-2 text-xl"><Link to="/">Music</Link></li>
        <li className="py-2 text-xl"><Link to="/">Movies</Link></li>
        <li className="py-2 text-xl"><Link to="/">Live</Link></li>
        <li className="py-2 text-xl"><Link to="/">Gaming</Link></li>
        <li className="py-2 text-xl"><Link to="/">News</Link></li>
        <li className="py-2 text-xl"><Link to="/">Sports</Link></li>
        <li className="py-2 text-xl"><Link to="/">Courses</Link></li>
        <li className="py-2 text-xl"><Link to="/">Fashion & Beauty</Link></li>
        <li className="py-2 text-xl"><Link to="/">Podcasts</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
