
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";


'use client'

export default function Home() {
  const [inputValue, setInputValue] = useState("Some initial value");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
    alert(`'${content}' was published with the '${button}' button`);
  }
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
    </div>
    <hr />
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
              Find Developer Jobs!
            </Link>
          </div>
          
    <hr />
    <div>

    <div className="text-center mb-10">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Share Your Thoughts With The World
          </h1>
    </div>
      {/* input */}
      <section>
      

      <form action={publish}>
        <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900">
        Title:
      </label>
      <div className="relative mt-2 rounded-md shadow-sm ">
        <input
          id="Title"
          name="Title"
          type="text"
          placeholder="Post Title"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>


      <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900">
        Text:
      </label>
      <div className="relative mt-2 rounded-md shadow-sm ">
        <input
          id="Title"
          name="Title"
          type="text"
          placeholder="Post Title"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <br />
      <div className="mt-1 flex items-center justify-start gap-x-6">
            <a
              href="/Jobs"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post
            </a>
          </div>
    </form>
      </section>

      {/* posts */}
      <section>
        
      </section>
    </div>
    </>
  );
}
