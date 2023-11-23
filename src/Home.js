import React from "react";
import Github from "./Github";
import useFetch from "./useFetch";

const Home = () => {

       const [data]=useFetch("https://api.github.com/users")

  return (
    <>
      <h2 className="bg-secondary mt-2 p-2 w-50 m-auto rounded">List of GitHub Users</h2>
      <div className="container mt-5 ">
        <div className="row">
          {
              
          data && data.map((items) => <Github items={items} />
            )}
        </div>
      </div>
    </>
  );
}


export default Home;
 