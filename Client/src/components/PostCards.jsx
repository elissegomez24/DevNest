import { Card } from "flowbite-react";

"use client";

function postsCards({ posts }) {
  return (
    <div className="flex flex-col items-center w-1/2 mx-auto">
      {posts.map((posts) => (
        <Card key={posts._id} className="w-full mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-6">
              <img
                alt="profile picture"
                height="128"
                src={posts.Img}
                width="128"
                className="rounded-full shadow-lg"
              />
              <h5 className="mt-3 text-2xl font-medium text-gray-900 text-center">
                {posts.user}
              </h5>
            </div>
            <div className="flex-grow">
              <h5 className="mb-2 text-2xl font-medium text-gray-900">
                {posts.Title}
              </h5>
              <span className="text-base text-gray-900">
                {posts.Text}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default postsCards;