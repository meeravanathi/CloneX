import React from "react";

const RightSidebar = () => {
  return (
    <div className="p-6 bg-black border-2 border-zinc-900 rounded-lg mx-3 space-y-4 mt-5 ">
      <h2 className="text-white font-bold text-2xl">What's happening </h2>
      <p  className="text-white font-semibold"><p className="text-zinc-600 font-">Trending in politics</p>#TVK<p className="text-zinc-600 font-">405k posts</p></p>
      <p className="text-white font-semibold"><p className="text-zinc-600 font-">Trending in Cinema</p>#GOAT<p className="text-zinc-600 font-">102k posts</p></p>
      <p className="text-white font-semibold"><p className="text-zinc-600 font-">Trending in Entertaintment</p>#Vijay<p className="text-zinc-600 font-">50k posts</p></p>
      <p className="text-white font-semibold"><p className="text-zinc-600 font-">Global</p>#Thalapathy <p className="text-zinc-700 font-">Global</p></p>
    </div>
  );
};

export default RightSidebar;