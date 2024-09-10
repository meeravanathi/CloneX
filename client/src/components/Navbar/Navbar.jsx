import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
const Navbar = () => {
  return (
    
    <div className=" grid grid-cols-1 md:grid-cols-4 justify-center">
      <div className="mx-auto md:mx-0">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
          alt="X Logo"
          width={"35px"}
          className="mt-5 ml-9"
        />
      </div>

      <div className="col-span-2 md:border-x-2 md:border-zinc-900 md:px-6 my-6 md:my-0 mt-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Home</h2>
          <StarBorderPurple500Icon style={{ fill: '#ffff' }} className='mt-6'/>
        </div>
      </div>

      <div className="px-0 md:px-15 mx-auto relative mt-5">
        <SearchIcon className="absolute m-2" />
        <input
          type="text"
          className="bg-gray-200 rounded-full py-2 px-8 pl-10" // Add padding to avoid text overlapping with icon
          placeholder="Search"
        />
      </div>
    </div>
    
  );
};

export default Navbar;
