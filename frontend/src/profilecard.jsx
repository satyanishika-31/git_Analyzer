import React from "react";

function ProfileCard({ avatar, name, bio, followers, following, repos, link }) {
  return (
    <div className="w-full shadow-2xl shadow-mauve-300 rounded-3xl bg-mauve-100 p-10">
      <div className="flex items-center gap-6">
        <img
          src={
            avatar ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={name}
          className="w-40 h-40 rounded-full border-4 border-mauve-500 shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
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

      <div className="grid grid-cols-3 gap-4 mt-8 text-center">
        <div className="bg-mauve-500 rounded-lg p-3 shadow">
          <p className="text-lg text-white font-semibold">Followers</p>
          <p className="text-xl font-bold">{followers || "0"}</p>
        </div>
        <div className="bg-mauve-400 rounded-lg p-3 shadow">
          <p className="text-lg font-semibold">Following</p>
          <p className="text-xl font-bold">{following || "0"}</p>
        </div>
        <div className="bg-mauve-500 rounded-lg p-3 shadow">
          <p className="text-lg text-white font-semibold">Repos</p>
          <p className="text-xl font-bold">{repos || "0"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
