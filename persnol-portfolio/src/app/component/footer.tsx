import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-slate-700">
  <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
    <a  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img
      className='h-10 rounded-full' src="https://media.licdn.com/dms/image/v2/D4E03AQF6yiEfwrl0bA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727098514348?e=1733356800&v=beta&t=pTFOdzZ7P-YtOLAfkU9Yh8hVZ86IBR_xJkZkCTSZ6Hc" alt="" />
      <span className="ml-3 text-xl font-bold text-white ">Aleee</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      Junior
      <a
        
        className="text-gray-600 ml-1 text-white"
        rel="noopener noreferrer"
        target="_blank"
  
      >
        web developer
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://www.facebook.com/profile.php?id=100067717985638&mibextid=ZbWKwL' className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a href='https://x.com/syed25873717499?t=ogHlXZm3KErl_j2ZxKikkw&s=09' className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a href='https://www.instagram.com/aleeee_313?igsh=MXFxY20wOW5lNXZ2eQ==' className="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a href='https://www.linkedin.com/in/aleee-bukhari-170545317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>

  )
}
