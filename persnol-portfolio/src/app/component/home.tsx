import React from 'react'

export default function MyHome() {
  return (
    <section className="text-gray-600 body-font bg-slate-700">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="rounded-full shadow-x1 shadow-black lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="https://www.linkedin.com/in/aleee-bukhari-170545317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 from-black  text-gray-900">
        <h1 className="font-bold mb-2 text-white" >I am Syed Alee</h1>
        <h2 className="font-black mb-6 text-yellow-400 ">Web Developer</h2>
        
      </h1>
      <p className="mb-8 leading-relaxed text-white">
        On-site Student at The Governor Initative for Applied Generative Ai,web 3.0, Metaveraw,Typescript
        ,javascript,html5,Css,|Foucsed on Next.js Possionate About Al,Blockchain,and the future of technology
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-black font-serif font-bold bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
          Hire me
        </button>
        <button className="ml-4 inline-flex text-black font-serif font-bold bg-gray-50 border-0 py-2 px-6 focus:outline-none hover:bg-slate-300 rounded text-lg">
          View My Cv
        </button>
      </div>
    </div>
  </div>
</section>
  )
}
