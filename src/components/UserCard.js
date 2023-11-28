import React, { useEffect, useState } from "react";
import useReq from "../hooks/useReq";

function UserCard({ items }) {
  const { login, avatar_url } = items;
  const [data, setData] = useState([]);
  const fetchData = useReq();
  useEffect(() => {
    fetchData(items.url).then((res) => setData(res));
  }, []);
  const { public_repos, followers, following } = data;

  return (
    <div className="col-md-4">
      <div className="card p-2">
        <div className="align-items-center">
          <div className="image">
            <img
              src={avatar_url}
              className="rounded"
              width="100%"
              alt=""
            />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0 textLeft text-center">{login}</h4>
            <div className="p-1 mt-1 bg-secondary w-100 d-flex justify-content-between rounded text-white">
              <div className="d-flex flex-column ">
                <span className="articles">Articles</span>
                <span className="number1">{public_repos}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="followers">Followers</span>
                <span className="number2">{followers}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rating">Following</span>
                <span className="number3">{following}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
