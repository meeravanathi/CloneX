import React from "react";
import { Link } from "react-router-dom";


import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch , useSelector} from "react-redux";
import { logout } from "../../redux/userSlice";
const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-zinc-900 rounded-full cursor-pointer">
            <HomeIcon style={{ fill: '#ffff' }} fontSize="large" />
            <p className="text-white">Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-zinc-900 rounded-full cursor-pointer">
            <TagIcon style={{ fill: '#ffff' }} fontSize="large" />
            <p className="text-white">Explore</p>
          </div>
        </Link>
        <Link to={`/profile/${currentUser._id}`}>
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-zinc-900 rounded-full cursor-pointer">
            <PersonIcon style={{ fill: '#ffff' }} fontSize="large" />
            <p className="text-white">Profile</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-white font-bold py-2 ">{currentUser.username} <span className="text-zinc-600 font-semi-bold">@{currentUser.username}</span></p>
         
        </div>
        <div>
          <Link to="signin">
            <button
              className="bg-blue-400 px-6 py-2 text-white rounded-full mb-5 "
              onClick={handleLogout}

            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;