import React, { useState } from 'react';

const Card = ({ imageSrc, title, description }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-700 hover:shadow-blue-700 hover:scale-101 dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={imageSrc} alt="" />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 h-12 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <button onClick={toggleOverlay} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
      
      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden" onClick={toggleOverlay}>
          <div className="bg-white px-10 py-5 rounded-lg w-full lg:w-1/2 ">
            <div className="flex justify-between text-2xl mb-5">
            <h1>Overlay Content</h1>
            <button onClick={toggleOverlay} ><svg viewBox="0 -0.5 8 8" className="h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close_mini [#1522]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -206.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="close_mini-[#1522]" points="334.6 49.5 337 51.6 335.4 53 333 50.9 330.6 53 329 51.6 331.4 49.5 329 47.4 330.6 46 333 48.1 335.4 46 337 47.4"> </polygon> </g> </g> </g> </g></svg></button>
            </div>
            <div className="content p-5  mb-5 overflow-scroll max-h-64 lg:overflow-x-hidden">

            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequi quibusdam magnam in voluptatibus assumenda repudiandae dolores nisi suscipit provident quidem corporis nemo animi nam rem eius debitis, illum fuga! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis repellat eius delectus fuga, commodi unde illo sunt. Vel neque dicta sapiente magnam hic architecto illum voluptatem qui aliquid natus.</p>
            </div>
            <div className="flex justify-end">
              <a href="#"
                className="rounded-md text-xs bg-indigo-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register now!
              </a>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
