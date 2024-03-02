import '../styles/glow.css'
import image from '../images/icompass.png'

export default function Example() {
    return (
      
      <div className="bg-white" id='about'>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex justify-between lg:gap-x-20 lg:px-24 lg:pt-0" id="glow">
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
                Our Sponsor
              </h2>
            <img
              className=" my-auto  mx-auto  w-[20rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 lg:left-40  transition-all duration-700 hover:scale-105"
              src={image}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
            <div className="mx-auto max-w-auto text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left  mb-10 grow-2">

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-10">
                iCompaas

              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                iCompaas - infrastructure Compliance and Security as a Service

Security events and compliance vulnerabilities can critically slow and pause operations, often at pivotal times for startups and small businesses. iCompaas services are maintaining Compliance and Security standards for your cloud infrastructure. We provide services of a Cloud Security Specialist, a Compliance Specialist and a Cloud Architect all rolled into one tool.

iCompaas Services helps companies focus on faster time to market by taking care of the cloud infrastructure security and compliance roadblocks by providing remediation reports for Certifications, Regulations (HIPAA) and Frameworks (CIS) for your Cloud infrastructure. We help enforcement of compliance standards for public cloud infrastructure using real-time, secure, agent-less auditing, notification and remediation.
              </p>
            </div>

          </div>
          </div>  
        </div>
    )
  }
  
