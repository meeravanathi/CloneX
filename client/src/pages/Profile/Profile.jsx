import React, { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import EditProfile from "../../components/EditProfile/EditProfile";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "../../components/Tweet/Tweet";

import { following } from "../../redux/userSlice";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [userTweets, setUserTweets] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTweets = await axios.get(`/tweets/user/all/${id}`);
        const userProfile = await axios.get(`/users/find/${id}`);

        setUserTweets(userTweets.data);
        setUserProfile(userProfile.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser, id]);

  const handleFollow = async () => {
    if (!currentUser.following.includes(id)) {
      try {
        await axios.put(`/users/follow/${id}`, {
          id: currentUser._id,
        });
        dispatch(following(id));
      } catch (err) {
        console.log("error", err);
      }
    } else {
      try {
        await axios.put(`/users/unfollow/${id}`, {
          id: currentUser._id,
        });
        dispatch(following(id));
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 text-white">
        <div className="px-6">
          <LeftSidebar />
        </div>
        <div className="col-span-2 border-x-2 border-zinc-900 px-6">
          <div className="flex flex-col ">
            <div className="flex space-x-4">
              <img
                src={userProfile?.profilePicture}
                alt="Pfp"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-bold text-xl">{userProfile?.username}</p>
                <p className="text-gray-400 mt-2 ">
                  <span className="font-bold px-5 py-10">{userProfile?.followers || 0} Followers</span> 
            
                  <span className="font-bold">{userProfile?.following.length || 0} Following</span>
                </p>
              </div>
            </div>

            <div className="flex mt-4 space-x-4">
              {currentUser._id === id ? (
                <button
                  className="px-4 py-2 bg-zinc-200 rounded-full text-black"
                  onClick={() => setOpen(true)}
                >
                  Edit Profile
                </button>
              ) : currentUser.following.includes(id) ? (
                <button
                  className="px-4 py-2 bg-zinc-900 rounded-full text-white"
                  onClick={handleFollow}
                >
                  Following
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-zinc-900 rounded-full text-white"
                  onClick={handleFollow}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <div className="mt-6">
            {userTweets &&
              userTweets.map((tweet) => (
                <div className="p-2" key={tweet._id}>
                  <Tweet tweet={tweet} setData={setUserTweets} />
                </div>
              ))}
          </div>
        </div>

        <div className="px-6">
          <RightSidebar />
        </div>
      </div>
      {open && <EditProfile setOpen={setOpen} />}
    </>
  );
};

export default Profile;
