'use client'

import { useState  } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Auth from '../utils/auth';


function NavTabs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
    <div className="bg-white ">
    <header className="absolute inset-x-0 top-0 z-50 bg-black rounded-b-xl">
      <nav aria-label="Global" className="flex items-center justify-between lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-6 ">
            <span className="sr-only">DevNest</span>
            <img
              alt="DevNest Logo"
              src="/Logo.png"
              className="h-40 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {Auth.loggedIn() ? (
            <> 
            <button onClick={Auth.logout()}> 
            <a href="/Profile" className="text-sm mr-3 font-semibold leading-6 text-white">
            Logout 
          </a>
          </button>
          <a href="/Profile" className="text-sm font-semibold leading-6 text-white">
          Profile <span aria-hidden="true">&rarr;</span>
        </a>
        </>
          ) : (
          <a href="/SignIn" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/DevNestLogo.PNG"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
            
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
  );
}

export default NavTabs;
