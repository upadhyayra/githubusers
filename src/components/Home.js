import React from "react";
import Github from "./Github";
import useFetch from "../hooks/useFetch";
import Loading from "../assets/loading.gif"

const Home = () => {

       const [data]=useFetch("https://api.github.com/users")

  return (
    <>
      <h2 className="bg-secondary mt-2 p-2 w-50 m-auto text-center rounded">
        List of GitHub Users
      </h2>
      <div className="container mt-5 ">
        <div className="row">
          {data == "" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
              }}
            >
              <img
                src={Loading}
                alt=""
                style={{ width: "10%", height: "20%" }}
              />
            </div>
          ) : (
            
            data && data.map((items) => <Github items={items} />)
          )}
        </div>
      </div>
    </>
  );
}


export default Home;
 