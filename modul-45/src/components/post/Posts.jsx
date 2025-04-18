import React from "react";
import { useLoaderData } from "react-router";
import Post from "./post";

const Posts = () => {
  const post = useLoaderData();

  return (
    <div className="mx-auto">
      <h1 className="mt-20 text-5xl text-center">This is post</h1>
      <div>
        {post.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}{" "}
      </div>
    </div>
  );
};

export default Posts;
