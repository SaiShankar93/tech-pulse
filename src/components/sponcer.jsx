import '../styles/glow.css'
import image from '../images/icompass.png'

export default function Example() {
    return (
      
      <div className="bg-white" id='about'>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" id="glow">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true">
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className= "mt-10 mb-5 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10">
                Our Sponcer
              </h2>
            <img
              className=" my-auto  mx-auto  w-[20rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 lg:left-40  transition-all duration-700 hover:scale-105"
              src={image}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left  mb-10 ">

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-10">
                iCompass

              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iste. Facere, sed voluptatibus laborum quidem aperiam commodi laboriosam facilis expedita a consectetur odit reiciendis voluptates porro deserunt, temporibus sunt reprehenderit.
              </p>
            </div>

          </div>
          </div>  
        </div>
    )
  }
  