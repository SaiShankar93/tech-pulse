import React, { useState, useRef, useEffect } from 'react'
import bugsmash from '../images/bugsmash.jpeg'

const cardData = [
  {
    eventid: 1,
    imageSrc: bugsmash,
    title: 'BUGBASH',
    description: 'Gear Up for the Bug Bash: Debugging Marathon in Python, Java, and C!',
    rules: `Bug Bash technical event would typically involve students from computer science or related fields coming together to identify and fix bugs in the given code. During the event, participant would work collaboratively to review code, run tests, and debug issues to improve the quality of the code. This hands-on experience allows students to apply their knowledge in a practical setting, gain valuable problem-solving skills, and learn about software development best practices. Overall, Bug Bashes provide students with an opportunity to sharpen their technical skills, work in teams, and contribute to real-world projects.

    RULES:
    1.Solo participants race against time to debug software.
    2.Essential role of dedicated timekeepers in Bug Bash. 
    3.Integral part of Bug Bash for comprehensive solutions.
    4.Timing:
    5.Programming languages:Python,Java,C programming language`
  },
  {
    eventid: 2,
    imageSrc: bugsmash,
    title: 'SEE IT , NAME IT',
    description: `A Thrilling Logo Identification Competition .Test Your Brand Recognition Skills`,
    rules: `join us for an exciting journey through the world of brands with our 'SEE IT, NAME IT' event! Are you a master at recognising logos and deciphering brand identities? Put your skills to the test in this thrilling competition where participants will compete head-to-head to identify famous logos from various industries. From iconic symbols to hidden gems, challenge yourself and your friends to see who can correctly guess the most logos within the time limit. Whether you're a marketing enthusiast, design aficionado, or simply love a good brain teaser, this event is for you! Get ready for an evening of fun, laughter, and friendly competition as we celebrate the power of branding. Bring your A-game and join us for a chance to showcase your logo knowledge and win exciting prizes! Don't miss out - RSVP now and let the guessing games begin!

    RULES:
    1.Embrace the challenge as the lone participant, showcasing unmatched expertise in recognizing and deciphering logos from various industries with precision and speed.     
    2.Master of brand recognition under the ticking clock.                  
    3.Efficient at managing time while cracking logo mysteries.`
  },
  {
    eventid: 3,
    imageSrc: bugsmash,
    title: `NEED FOR SPEED`,
    description: `Get Ready to Race: Typing Competition for Testing Your Limits.`,
    rules: `Rev up your keyboards and put your typing skills to the ultimate test in our 'Need for Speed' event! Are you the fastest typist in town? Join us for an adrenaline-fueled competition where participants will race against the clock to type out as many words as possible in just one minute. Whether you're a seasoned typist or looking to improve your speed, this event is perfect for all skill levels. Compete against friends and classmates to see who can achieve the highest words-per-minute score and claim the title of typing champion. With thrilling challenges, fast-paced action, and bragging rights on the line, this is an event you won't want to miss! So, gear up, get your fingers limber, and let the typing games begin! Register now to secure your spot in the race to typing glory!"

    RULES:
    1.Compete individually in a timed challenge to achieve the highest words-per-minute (WPM) score.
    2.Aim to type as many words accurately within the allotted one-minute timeframe.     
    3.Utilize every second wisely to achieve peak typing performance and claim victory.`
  },
  {
    eventid: 4,
    imageSrc: bugsmash,
    title: 'QUIZ WIZARD',
    description: 'Compete for Tech Supremacy: Quiz Wizard Technical Extravaganza!',
    rules: `Prepare to unlock the secrets of the digital realm in our 'Quiz Wizard' technical extravaganza! Calling all tech enthusiasts, computer whizzes, and networking wizards - are you ready to test your knowledge and claim the title of Quiz Wizard? Dive deep into the world of computers, technology, networking, and operating systems as you navigate through challenging trivia rounds designed to challenge even the most seasoned tech aficionados. From coding conundrums to network protocols, hardware to software, this event covers it all.Gather your fellow tech enthusiasts and join us for an evening of intense competition and exhilarating brain teasers. With thrilling challenges, exciting twists, and prestigious prizes awaiting the winners, this is your chance to showcase your technical prowess and prove yourself as the ultimate Quiz Wizard! Don't miss out on the opportunity to be crowned the champion of the tech universe. Register now and embark on your quest for technical supremacy!"

    RULES:
    1.Demonstrate mastery by providing accurate answers to a range of technical questions. 
    2.Compete against peers to secure a top-ranking position by answering questions swiftly and accurately.  
    3. Compete against peers to secure a top-ranking position by answering questions swiftly and accurately.         
    4.Strategically manage time to ensure optimal performance and maximize points.`
  },
];

function Dialog({ eventid, title, rules,close }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    document.getElementById('modal-container').classList.add('out');
    document.body.classList.remove('modal-active');
  }, [isOpen]);

  useEffect(() => {
    handleButtonClick();
  }, [])
  const handleModalContainerClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      document.getElementById('modal-container').classList.add('out');
      document.body.classList.remove('modal-active');
      close()
    }
  };

  const handleButtonClick = (e) => {
    // const buttonId = e.currentTarget.id;
    // console.log(buttonId)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.removeAttribute('class');
    modalContainer.classList.add("one");
    document.body.classList.add('modal-active');
  };
  // const h2 = document.getElementById('modal-title');
  // const p = document.getElementById('modal-rules');
  // h2.innerText = title;
  // p.innerText = rules;
  return (
    <div id="modal-container" onClick={handleModalContainerClick} data-id="">
      <div className="modal-background">
        <div ref={modalRef} className={`modal ${isOpen ? '' : ''} lg:mx-24 rounded-lg`}>
          {
            cardData.map((card) => {
              if (card.eventid === eventid) {
                return (
                  <>
                    <div className="overflow-y-scroll max-h-80 sm:overflow-y-scroll text-start px-1 pt-1 rounded-lg">
                      <h2 id='modal-title' className='font-bold' >{title}</h2>
                      <p id='modal-rules' className='whitespace-pre-line'>{rules}</p>
                    </div>
                    <div className="flex justify-between mt-10">
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={close}>
                        close
                      </button>
                      <a
                        href="https://saishankar93.github.io/Payment-gateway/" target="_blank"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Register now!
                      </a>
                    </div>
                  </>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Dialog;
