
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import PostCards from "../components/PostCards"


'use client'


  

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
      </div>
      <div className="mx-auto m max-w-2xl py-32 sm:py-48 lg:py-56">
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
      
      
      <hr></hr>
      <section className="bg-center mt-24 mb-11 rounded-full bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">The Worlds First Developer Focued Job Hub</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at DevNest we focus on helping you start your new career and connect with your community.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/Jobs" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Job board
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            
        </div>
    </div>
</section>
    

          
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
  <div className="w-full max-w-md border-2 p-5 mb-9 bg-teal-600">
    <form onSubmit={addPost}>
    <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900 text-center">
  Title:
</label>
<div className="relative mt-2 rounded-md shadow-sm">
  <input
    id="Title"
    name="Title"
    type="text"
    placeholder="Enter your title..."
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