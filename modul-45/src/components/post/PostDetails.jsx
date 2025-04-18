import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <h2>{data.id} </h2>
      <h1 className="font-bold text-xl">{data.title}</h1>
      <p>{data.body}</p>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
