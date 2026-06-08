
import { useState, useEffect } from "react";
import ProfileCard from "./profilecard";
function App() {

  const [info, setinfo] = useState(null)//for the data
  const [username, setUsername] = useState("")//for user name 
  const [loading, setLoading] = useState(false);//for the spnning 
  const [error, setError] = useState("");

  function handlesubmit(e) {
    e.preventDefault(); // stop page reload
    setLoading(true);
    setError("");
    console.log("user name submited", username);
    const url = ` https://api.github.com/users/${username}`;  //api stored in the url
    fetch(url).then(response => {  //fetch function returns the promiss
      if (!response.ok) {
        throw new Error("user not found")

      }
      return response.json()

    })
      .then(data => { setinfo(data); setLoading(false); })


      .catch(error => { setError(err.message);
        setLoading(false)});


  }



  return (
    <div className=" p-10 m-10">
      <div className=" p-10  w-full " >

        <form onSubmit={handlesubmit}>
          <p className="text-xl sm:text-2xl md:text-4xl text-mauve-600 font-extrabold mb-4 capitalize">
            Users GitHub Details Analyzer
          </p>

          <div className=" w-fit rounded-2xl h-fit">

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" pw-full  sm:max-w-xs md:max-w-md lg:max-w-lg p-2  bg-white text-base  sm:text-lg  rounded-2xl text-mauve-800  font-bold    border-2 "
            />
            <button
              type="submit"
              className="w-full sm:w-fit p-3 bg-mauve-900 ml-1 sm:max-w-xl rounded-2xl text-lg sm:text-xl font-bold text-white" >
              Submit
            </button>
          </div>
        </form>
        {/* Spinner while loading */}
        {loading && (
          <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-mauve-600"></div>
          </div>
        )}
        {/* Error message */}
        {error && <p className="text-red-600">{error}</p>}

      </div>
      {info && !loading && !error && (
        <ProfileCard
          avatar={info.avatar_url}
          name={info.name || info.login}
          bio={info.bio || "No bio available"}
          followers={info.followers}
          following={info.following}
          repos={info.public_repos}
          link={info.html_url}
        />
      )}
    </div>
  )
}

export default App
