import React, { useEffect, useState } from "react";
import Github from "../components/Github";
import useReq from "../hooks/useReq";
import Loading from "../assets/loading.gif";

const Home = () => {
  const [users, setUsers] = useState([]);
  const data = useReq();

  useEffect(() => {
    data("https://api.github.com/users").then((res) => setUsers(res));
  }, []);

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
            users &&
            users.map((items, index) => <Github items={items} key={items.id} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
