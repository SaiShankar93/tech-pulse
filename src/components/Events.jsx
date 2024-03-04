import React from 'react';
import Card from './Card'; 
import BB from '../images/BugBash.jpg'
import NFS from '../images/NeedforSpeed.jpg'
import QW from '../images/QuizWizard.jpg'
import SINI from '../images/SeeItNameIt.jpg'

const cardData = [
  {
    eventid: 1,
    imageSrc: BB,
    title: 'BUGBASH  (12:00 PM)',
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
    imageSrc: SINI,
    title: 'SEE IT , NAME IT'  (11:00 AM),
    description: `A Thrilling Logo Identification Competition .Test Your Brand Recognition Skills`,
    rules :`join us for an exciting journey through the world of brands with our 'SEE IT, NAME IT' event! Are you a master at recognising logos and deciphering brand identities? Put your skills to the test in this thrilling competition where participants will compete head-to-head to identify famous logos from various industries. From iconic symbols to hidden gems, challenge yourself and your friends to see who can correctly guess the most logos within the time limit. Whether you're a marketing enthusiast, design aficionado, or simply love a good brain teaser, this event is for you! Get ready for an evening of fun, laughter, and friendly competition as we celebrate the power of branding. Bring your A-game and join us for a chance to showcase your logo knowledge and win exciting prizes! Don't miss out - RSVP now and let the guessing games begin!

    RULES:
    1.Embrace the challenge as the lone participant, showcasing unmatched expertise in recognizing and deciphering logos from various industries with precision and speed.     
    2.Master of brand recognition under the ticking clock.                  
    3.Efficient at managing time while cracking logo mysteries.`
  },
  {
    eventid: 3,
    imageSrc: NFS,
    title: `NEED FOR SPEED  (12:30 PM)`,
    description: `Get Ready to Race: Typing Competition for Testing Your Limits.`,
    rules : `Rev up your keyboards and put your typing skills to the ultimate test in our 'Need for Speed' event! Are you the fastest typist in town? Join us for an adrenaline-fueled competition where participants will race against the clock to type out as many words as possible in just one minute. Whether you're a seasoned typist or looking to improve your speed, this event is perfect for all skill levels. Compete against friends and classmates to see who can achieve the highest words-per-minute score and claim the title of typing champion. With thrilling challenges, fast-paced action, and bragging rights on the line, this is an event you won't want to miss! So, gear up, get your fingers limber, and let the typing games begin! Register now to secure your spot in the race to typing glory!"

    RULES:
    1.Compete individually in a timed challenge to achieve the highest words-per-minute (WPM) score.
    2.Aim to type as many words accurately within the allotted one-minute timeframe.     
    3.Utilize every second wisely to achieve peak typing performance and claim victory.`
  },
  {
    eventid: 4,
    imageSrc: QW,
    title: 'QUIZ WIZARD  (11:30 AM)',
    description: 'Compete for Tech Supremacy: Quiz Wizard Technical Extravaganza!',
    rules : `Prepare to unlock the secrets of the digital realm in our 'Quiz Wizard' technical extravaganza! Calling all tech enthusiasts, computer whizzes, and networking wizards - are you ready to test your knowledge and claim the title of Quiz Wizard? Dive deep into the world of computers, technology, networking, and operating systems as you navigate through challenging trivia rounds designed to challenge even the most seasoned tech aficionados. From coding conundrums to network protocols, hardware to software, this event covers it all.Gather your fellow tech enthusiasts and join us for an evening of intense competition and exhilarating brain teasers. With thrilling challenges, exciting twists, and prestigious prizes awaiting the winners, this is your chance to showcase your technical prowess and prove yourself as the ultimate Quiz Wizard! Don't miss out on the opportunity to be crowned the champion of the tech universe. Register now and embark on your quest for technical supremacy!"

    RULES:
    1.Demonstrate mastery by providing accurate answers to a range of technical questions. 
    2.Compete against peers to secure a top-ranking position by answering questions swiftly and accurately.  
    3. Compete against peers to secure a top-ranking position by answering questions swiftly and accurately.         
    4.Strategically manage time to ensure optimal performance and maximize points.`
  },
];

const CardList = () => {
  return (
    <div className="my-20">
     <h1 className="text-6xl font-black text-center mb-10 tracking-tight text-gray-900 sm:text-5xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">
     Competitions
      </h1>
      <p className="my-10 text-lg lg:px-20 px-10">
              TechPulse'24 is not just about learning and networking; it's also about putting your skills to the test in our exhilarating competitions. Whether you thrive on solving complex problems, crave the adrenaline rush of coding challenges, or enjoy showcasing your tech knowledge, we have something for everyone. Here's a glimpse of the competitions awaiting you:
            </p>
        <div className="flex justify-center mb-10" id="events">
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-self-center">
        {cardData.map((card,index) => (
          <div key={card.id} className={card.id === 4 ? 'pb-12' : 'pb-2'}>
            <Card
              eventid={card.eventid}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              rules={card.rules}
            />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default CardList;
