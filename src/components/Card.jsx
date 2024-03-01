import React, { useState, useRef, useEffect } from 'react';
import '../styles/sass.scss';

const Card = ({ imageSrc, title, description, rules,id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    document.getElementById('modal-container').classList.add('out');
    document.body.classList.remove('modal-active');
  }, [isOpen]);

  const handleModalContainerClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      document.getElementById('modal-container').classList.add('out');
      document.body.classList.remove('modal-active');
    }
  };

  const handleButtonClick = (e) => {
    const buttonId = e.currentTarget.id;
    console.log(buttonId)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.removeAttribute('class');
    modalContainer.classList.add(buttonId);
    document.body.classList.add('modal-active');
  };

  return (
    <>
    
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-500 hover:shadow-blue-700 hover:scale-102 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={imageSrc} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 h-12 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <button id='one' onClick={handleButtonClick} className="button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Know rules
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>


      <div id="modal-container" onClick={handleModalContainerClick} data-id="">
        <div className="modal-background">
          <div ref={modalRef} className={`modal ${isOpen ? '' : ''}`}>
            <div className="overflow-y-scroll">
            <h2>{title}</h2>
            <p>{rules}</p>
            </div>

            <div className="flex justify-between mt-5">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={toggleOverlay}>
              close
            </button>
            <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
