import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { changeProfile, logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";

const EditProfile = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [img, setImg] = useState(null);
  const [imgUploadProgress, setImgUploadProgress] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uploadImg = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgUploadProgress(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            const updateProfile = await axios.put(`/users/${currentUser._id}`, {
              profilePicture: downloadURL,
            });

            console.log(updateProfile);
          } catch (error) {
            console.log(error);
          }

          console.log("downloaded " + downloadURL);
          dispatch(changeProfile(downloadURL));
        });
      }
    );
  };

  const handleDelete = async () => {
    const deleteProfile = await axios.delete(`/users/${currentUser._id}`);
    dispatch(logout());
    navigate("/signin");
  };

  useEffect(() => {
    img && uploadImg(img);
  }, [img]);

  return (
    <div className="absolute w-full height-100% top-3 left-0 bg-transparent flex items-center justify-center">
      <div className="w-[600px] h-[300px] bg-black border border-white rounded p-2 rounded-lg p-8 flex flex-col gap-4 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 cursor-pointer text-white"
        >
          X
        </button>
        <h2 className="font-bold text-xl text-white">Edit Profile</h2>
        <p className=" text-white">Choose a new profile picture</p>
        {imgUploadProgress > 0 ? (
  <span style={{ color: 'white' }}>
    Uploading {imgUploadProgress}%
  </span>
) : (
  <input
    type="file"
    className="bg-transparent border border-white rounded p-2"
    accept="image/*"
    onChange={(e) => setImg(e.target.files[0])}
  />
)}

        <p className="text-white">Delete Account??</p>
        <button
          className="bg-red-700 text-white py-2 rounded-full"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default EditProfile;