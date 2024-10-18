import React from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = React.useState(
    "https://via.placeholder.com/1500x400"
  );
  const [profileUrl, setProfileUrl] = React.useState(
    "https://via.placeholder.com/150"
  );
  function handleBannerChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  }
  function handleProfileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  }
  return (
    <>
      <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
          <img
            src={bannerUrl}
            alt="background image"
            className="w-full h-60 object-cover"
          />

          <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="banner-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              name=""
              id="banner-upload"
              accept="image/*"
              className="hidden"
              onChange={handleBannerChange}
            />
          </button>
        </div>
        <div className="flex items-center ml-4 mt-[2rem]">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-40 h-40 object-cover rounded-full border-white relative"
          />
          <button className="absolute ml-[3.8rem] z-100 mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer ">
              <FaCamera size={18} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
          <div className="ml-4 mt-4 ">
            <h1 className="text-2xl font-bold text-black ">Amiyo</h1>
            <p className="">1M</p>
            <p className="mt-2 ">This is a Short Description</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
          </div>
         
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default Profile;
