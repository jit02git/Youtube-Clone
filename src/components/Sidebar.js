import React from "react";
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-2 w-60">
      <ul>
        <li className="my-2 text-xl"><Link to="/">Home</Link></li>
        <li className="my-2 text-xl">Shorts</li>
        <li className="my-2 text-xl">Subscription</li>
      </ul>
      <hr />
      <ul>
        <li className="my-2 text-xl">You</li>
        <li className="my-2 text-xl">History</li>
      </ul>
      <hr />
      <h1 className="font-bold text-2xl py-2">Explore</h1>
      <ul className="">
        <li className="py-2 text-xl">Trending</li>
        <li className="py-2 text-xl">Shopping</li>
        <li className="py-2 text-xl">Music</li>
        <li className="py-2 text-xl">Movies</li>
        <li className="py-2 text-xl">Live</li>
        <li className="py-2 text-xl">Gaming</li>
        <li className="py-2 text-xl">News</li>
        <li className="py-2 text-xl">Sports</li>
        <li className="py-2 text-xl">Courses</li>
        <li className="py-2 text-xl">Fashion & Beauty</li>
        <li className="py-2 text-xl">Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
