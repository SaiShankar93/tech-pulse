import React, { useEffect, useState } from 'react';
import '../styles/intro.css'


const Intro = () => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowIntro(false);
        }, 5000);
        return () => clearTimeout(timeoutId);
    }, []); 
    return (
        <div className={showIntro ? 'container' : 'hidden'} >
            <div className="textWrapper">
                <div className="text3 text">Tech Pulse</div>
                <div className="text4 text">Tech Pulse</div>
                <div className="text5 text">Tech Pulse</div>
                <div className="text6 text">Tech Pulse</div>
                <div className="text7 text">Tech Pulse</div>
                <div className="text8 text">Tech Pulse</div>
                <div className="text9 text">Tech Pulse</div>
            </div>
        </div>
    );
};

export default Intro;
