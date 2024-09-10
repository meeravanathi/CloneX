import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainTweet from "../../components/MainTweet/MainTweet";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { useSelector } from "react-redux";
import Signin from "../Signin/Signin";
const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    {!currentUser ? (
      <Signin />
    ) : (
  <div className="grid grid-cols-1 md:grid-cols-4">
  <div>
    <LeftSidebar /> </div>
    <div className="col-span-2 border-x-2 border-zinc-900 px-6">
            <MainTweet />
          </div>
          <div className="px-6">
            <RightSidebar />
          </div>
    </div>
    )}
      </>
  );
};

export default Home;
