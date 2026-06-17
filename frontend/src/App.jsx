
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

1

  return (
    <div className="border-mauve-600  h-screen w-screen bg-mauve-100 ">
      <div className="   m-2  p-2 " >

        <form onSubmit={handlesubmit}>
          <p className="font-extrabold text-xl text-center  text-mauve-600">
            Users GitHub Details Analyzer
          </p>

          <div className="text-center border mt-4 m-auto rounded w-fit ">

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              className="  px-4 py-2 max-[394px]:px-2 max-[394px]:py-1 max-[394px]:text-xs max-[394px]:w-35 max-[394px]:h-6 "
            />
            <button
              type="submit"
              className=" bg-mauve-700 text-white rounded- px-4 py-2  " >
              Submit
            </button>
          </div>
        </form>
         {/* Error message */}
        {error && <p className="text-red-600">{error}</p>}

        {/* Spinner while loading */}
        {loading && (
          <div className="">
            <div className=" animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 m-auto mt-10"></div>
          </div>
        )}
       
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
