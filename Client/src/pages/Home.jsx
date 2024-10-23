
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import PostCards from "../components/PostCards"


'use client'


export default function Home() {
  

  const [posts, setPosts] = useState([
    {
      _id: "1",
      Img: "/devpfp1.PNG",
      Title: "title",
      Text: "I just got a new job!!!",
      user: "Aden"
    },
    {
      _id: "2",
      Img: "/devpfp2.PNG",
      Title: "title",
      Text: "bmfbhjgbnfoijgurjbrf",
      user: "Abigail"
    }
  ]);

  const addPost = (event) => {
    event.preventDefault();
    const title = event.target.Title.value;
    const text = event.target.Text.value;
    const newPost = {
      _id: Date.now().toString(),
      Img: "/defaultpfp.PNG",
      Title: title,
      Text: text,
      user: "Current User" // You might want to replace this with the actual logged-in user
    };
    setPosts([newPost, ...posts]);
    event.target.reset();
  };

  return (
    <>
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
        </div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to DevNest
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A job hub for developers like you
          </p>
          
        </div>
        
      </div>
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <hr></hr>
    <div className="text-center mb-10 mt-11">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Start Your New Career Now
          </h1>
    </div>
    
<div className="mt-10 mb-10 flex items-center justify-center gap-x-6">
          
            <Link
              to="/Jobs"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Developer Job Board!
            </Link>
          </div>
          
    <hr />
    <div>
    </div>
    <hr />

    <div className="text-center p-10 mt-10 mb-10">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Share Your Thoughts With The World
          </h1>
    </div>
      {/* input */}
      <div className="flex justify-center items-center">
  <div className="w-full max-w-md">
    <form onSubmit={addPost}>
    <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900 text-center">
  Title:
</label>
<div className="relative mt-2 rounded-md shadow-sm">
  <input
    id="Title"
    name="Title"
    type="text"
    placeholder="Enter your title"
    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  />
</div>

<label htmlFor="Text" className="block text-sm font-medium leading-6 text-gray-900 text-center mt-4">
  Text:
</label>
<div className="relative mt-2 rounded-md shadow-sm">
  <textarea
    id="Text"
    name="Text"
    placeholder="Share your thoughts..."
    rows="4"
    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  ></textarea>
</div>
<div className="mt-6 mb-16 flex items-center justify-center">
  <button
    type="submit"
    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Post
  </button>
</div>
    </form>
  </div>
</div>
      
      {/* posts */}
      <section>
      <PostCards posts={posts}/>
      </section>
    </div>
    </>
  );
}
