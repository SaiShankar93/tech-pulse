import React, { useState, useRef, useEffect } from 'react';
import '../styles/sass.scss';

// const Card = ({ imageSrc, title, description, rules,id }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef(null);
//   const toggleOverlay = () => {
//     setIsOpen(!isOpen);
//   }
//   useEffect(() => {
//     document.getElementById('modal-container').classList.add('out');
//     document.body.classList.remove('modal-active');
//   }, [isOpen]);

//   const handleModalContainerClick = (e) => {
//     if (!modalRef.current.contains(e.target)) {
//       document.getElementById('modal-container').classList.add('out');
//       document.body.classList.remove('modal-active');
//     }
//   };

  return (
    <>
      <div id="modal-container" onClick={handleModalContainerClick} data-id="">
        <div className="modal-background">
          <div ref={modalRef} className={`modal ${isOpen ? '' : ''}`}>
            <h2>{title}</h2>
            <p>{rules}</p>
            <button onClick={toggleOverlay}>close</button>
          </div>
        </div>
      </div>
    </>
  );


export default dialog;
