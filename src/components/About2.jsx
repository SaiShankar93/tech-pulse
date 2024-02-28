import  '../styles/App.css';
import Date from './Date';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'


const About2 = ()=> {
  return (
    <div className="relative isolate overflow-hidden animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
      <div className="mx-auto max-w-7xl py-10">
            <div className="mx-10 ">  
                    <Date day="14" className="" month="March" subtxt="th"/>

                    <h1 className="text-3xl md:text-6xl  text-center mt-10 ">
                    JBIET Main block

                    </h1>
            
            <br />
                <h1 className="text-center mt-10  text-4xl md:text-6xl">
                    It's Show time
                </h1>
            </div>
            {/* <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg> */}
      {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </div>
    </div>

  )
}


export default About2;
