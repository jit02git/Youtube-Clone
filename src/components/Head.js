import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8"
          alt="menu"
          src="https://imgs.search.brave.com/861qOMRSwIKx9_EOvO14rElWhWuv7m-4EW8x9GAGzqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://imgs.search.brave.com/k8zT8vPB_g0lEWfLLX-YqgbteXk-3dnf-eJRICrHCYg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw.jpeg"
        />
      </div>
      <div className="col-span-10 text-center px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" name="search" />
        <button className="border border-gray-400 bg-gray-200 px-5 py-2 rounded-r-full">search</button>
      </div>
      <div>
        <img
          className="h-12"
          alt="user-icon"
          src="https://imgs.search.brave.com/s1EhAM_gouhgQucFACzjfxfSsWte05jEIA37oLJHBHc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA2LzU1LzIy/LzM2MF9GXzUwNjU1/MjIzOF9qM1k0b3E0/cnJsTEVnelZHMzBB/ZEVlMFRhUklOdFVL/ci5qcGc"
        />
      </div>
    </div>
  );
};
export default Head;
