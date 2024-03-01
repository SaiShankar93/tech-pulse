import React, { useState, useRef, useEffect } from 'react';
import '../styles/sass.scss';

// const Card = ({ imageSrc, title, description, rules,id }) => {
  const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef(null);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  }
//   useEffect(() => {
//     document.getElementById('modal-container').classList.add('out');
//     document.body.classList.remove('modal-active');
//   }, [isOpen]);

  const handleModalContainerClick = (e) => {
      document.getElementById('modal-container').classList.add('out');
      document.body.classList.remove('modal-active');
  };

const Dialog=()=>{
  return (
    <>
      <div id="modal-container" onClick={handleModalContainerClick}>
        <div className="modal-background">
          <div className="">
            <h2>hhhh</h2>
            <p>rrrr</p>
            <button onClick={toggleOverlay}>close</button>
          </div>
        </div>
      </div>
    </>
  );
  }

export default Dialog;
