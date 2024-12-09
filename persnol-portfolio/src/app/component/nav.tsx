import React from 'react'

export default function Nav() {
  return (
    
<header className="text-white bg-black   body-font">
  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='h-8 rounded-full' src="https://media.licdn.com/dms/image/v2/D4E03AQF6yiEfwrl0bA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727098514427?e=1733356800&v=beta&t=HVzMIkiD6M0kAHVsPktSuhaIumFBZ0ObkLyzT02jMWM" alt="" />
      
      <span className="ml-3 text-xl text-neutral-300">Syed Aleee Portfolio</span>
    </a>
    <nav className="button rounded-full m-1  text-white justify-center  boreder-1 py-1 px-6 py-1   foucsout:line-one rounded-s-full text-lg   md:ml-auto flex flex-wrap items-center text-base  cursor-pointer">
      <a href='/' className=" ml-2 px-6 rounded-2xl bg-gray-400 py-1 font-bold font-serif  shadow-sm shadow-white   hover:text-gray-900">Home</a>
      <a href='./about' className=" ml-2 px-6 rounded-2xl bg-gray-400 py-1 font-bold font-serif   shadow-sm shadow-white  hover:text-gray-900">About</a>
      <a href='./team' className="  ml-2 px-6 rounded-2xl bg-gray-400 py-1 font-bold font-serif  shadow-sm shadow-white   hover:text-gray-900">Team</a>
      <a href='./contact' className="   ml-2 px-6 rounded-2xl bg-gray-400 py-1 font-bold font-serif  shadow-sm shadow-white  hover:text-gray-900">Contact</a>
    </nav>
    <button className="inline-flex  items-center  bg-gray-400 border-1 py-1 px-3 mr-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <button className="inline-flex items-center bg-gray-400 border-1 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}
