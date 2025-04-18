import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation(`/post/${post.id}`);
  }; // console.log(post);
  return (
    <div className="text-center p-5 m-5 border-2">
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p>{post.body}</p>
      <Link className="btn" to={`/post/${post.id}`}>
        Show Details
      </Link>
      <button onClick={handleNavigation} className="btn">
        Details of - {post.id}
      </button>
    </div>
  );
};

export default Post;
