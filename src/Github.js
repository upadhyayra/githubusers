import React, { useEffect, useState } from "react";
import axios from "axios";

function Github({items}) {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get(items.url).then((data) => {
      const tempObj = {
        company: data.data.company,
        followers: data.data.followers,
        following: data.data.following,
        articles: data.data.public_repos,
      };
      setData(tempObj);
    }, []);
  });

  return (
    <>
            <div className="col-md-4">
              <div className="card p-2">
                <div className="align-items-center">
                  <div className="image">
                    <img
                      src={items.avatar_url}
                      className="rounded"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft">{items.login}</h4>
                    <div className="p-1 mt-1 bg-secondary w-100 d-flex justify-content-between rounded text-white">
                      <div className="d-flex flex-column ">
                        <span className="articles">Articles</span>
                        <span className="number1">{data.articles}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="followers">Followers</span>
                        <span className="number2">{data.followers}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="rating">Following</span>
                        <span className="number3">{data.following}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}

export default Github;
