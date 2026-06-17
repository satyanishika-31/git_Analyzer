import React from "react";

function ProfileCard({ avatar, name, bio, followers, following, repos, link }) {
  return (
    <div className=" m-5 bg-[#b1b1b137]  p-5 rounded-xl">
      <div className="flex items-center gap-6">
        <img
          src={
            avatar ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={name}
          className="w-30 h-30 rounded-full border-4 border-mauve-500 shadow-md"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {name || "No name provided"}
          </h2>
          <p className="text-gray-600 mt-2">{bio || "No bio available"}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-mauve-800 font-semibold hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 text-center ">
        <div className="bg-mauve-500 rounded-lg p-3 shadow">
          <p className=" text-white text-xs font-semibold">Followers</p>
          <p className="text-xl font-bold">{followers || "0"}</p>
        </div>
        <div className="bg-mauve-400 rounded-lg p-3 shadow">
          <p className=" font-semibold text-xs">Following</p>
          <p className="text-xl font-bold">{following || "0"}</p>
        </div>
        <div className="bg-mauve-500 rounded-lg p-3 shadow">
          <p className=" text-white text-xs font-semibold">Repos</p>
          <p className="text-xl font-bold">{repos || "0"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
