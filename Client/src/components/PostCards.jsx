import { Card } from "flowbite-react";
"use client";






function postsCards({ posts }) {
  return (
    <div className="flex flex-col items-center w-1/2 mx-auto">
      {posts.map((post) => (
  <Card key={post._id} className="w-full mb-6">
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-6">
        <img
          alt="profile picture"
          height="128"
          src={post.user.pfp || "/defaultpfp.PNG"}
          width="128"
          className="rounded-full shadow-lg"
        />
        <h5 className="mt-3 text-2xl font-medium text-gray-900 text-center">
          {post.user.userName}
        </h5>
      </div>
      <div className="flex-grow">
        <h5 className="mb-2 text-2xl font-medium text-gray-900">
          {post.title}
        </h5>
        <span className="text-base text-gray-900">
          {post.text}
        </span>
      </div>
    </div>
  </Card>
))}
    </div>
  );
}

export default postsCards;
