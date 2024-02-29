import  '../styles/App.css';
import Date from './Date';

const About2 = () => {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 w-full sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 " id="glow">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto">
                <div className="mx-auto text-center">
                    <Date day="14" month="🗓️ March" subtxt="th" />
                </div>
                <div className="mx-auto text-center">
                    <h1 className="text-white venue">📍JBIET, Main block</h1>
                </div>
            <br />
            <div className="timer_container text-center">
                <h1 className="title">
                    It's Show<span>time</span>
                </h1>
            </div>
        
        </div>
        </div> </div>
        </div>
    );
}

export default About2;
