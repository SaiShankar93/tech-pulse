import React from "react";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";
import TelegramIcon from "../images/telegram.svg";
import LinkedInIcon from "../images/linkedin.svg";
import GmailIcon from "../images/gmail.svg";

function Footer() {
    return (
        <footer className="bg-blue-300" id="contact">
            <div className="container  bg-blue-300  max-w-screen-xl  py-6 lg:py-8 flex flex-row justify-between  flex-wrap ">
                <div className="mb-6 md:mb-0  w-1/2">
                    <a href="/" className="flex flex-col items-center">
                        <img
                            src="https://images-codehub.vercel.app/Images/Codehub.png"
                            className="h-24 mb-0"
                            alt="CodeHub"
                        />
                        <span className="self-center text-xl whitespace-nowrap text-black">
                            CodeHub
                        </span>
                    </a>
                </div>

{/*                 <div className="flex flex-col lg:w-1/2 justify-center items-center">
                    <ul className="text-black mx-auto md:mx-0 max-w-screen-md">
                        <li className="mb-4">
                            <a href="" className="hover:underline">
                                About us
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:underline">
                                Contact us
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Team Members
                            </a>
                        </li>
                    </ul>
                </div> */}

                <div className="flex flex-col mt-4 sm:justify-center md:mt-0 space-y-2 rtl:space-x-reverse w-1/2">
                    <a
                        href="https://www.instagram.com/codehub_jbiet/"
                        className="text-black hover:text-gray-700 flex items-center"
                    >
                        <img src={InstagramIcon} className="w-6 h-6" alt="Instagram" />
                        <span className="sr-only">Instagram</span>
                        <span className="ml-2">Instagram</span>
                    </a>
                    <a
                        href="https://www.youtube.com/c/CodeHubb/featured"
                        className="text-black hover:text-gray-700 flex items-center"
                    >
                        <img src={YoutubeIcon} className="w-6 h-6" alt="Youtube" />
                        <span className="sr-only">Youtube</span>
                        <span className="ml-2">Youtube</span>
                    </a>
                    <a
                        href="https://t.me/joinchat/RoqVlQw4ACxdRg83"
                        className="text-black hover:text-gray-700 flex items-center"
                    >
                        <img src={TelegramIcon} className="w-6 h-6" alt="Telegram" />
                        <span className="sr-only">Telegram</span>
                        <span className="ml-2">Telegram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/c0dehub/"
                        className="text-black hover:text-gray-700 flex items-center"
                    >
                        <img src={LinkedInIcon} className="w-6 h-6" alt="LinkedIn" />
                        <span className="sr-only">LinkedIn</span>
                        <span className="ml-2">LinkedIn</span>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/#search/codehubcse%40jbiet.edu.in?compose=new"
                        className="text-black hover:text-gray-900 dark:hover:text-white flex items-center"
                    >
                        <img src={GmailIcon} className="w-6 h-6" alt="Gmail" />
                        <span className="sr-only">Gmail</span>
                        <span className="ml-2">Gmail</span>
                    </a>
                </div>

            </div> 
            <div className="w-full text-center">
                Contact Info :
                <div className="flex justify-center pt-4 gap-6">
                    <p>
                        Ramesh babu - Co-ordinator</br>
                        +91 9885203521
                    </p>
                    <p>
                        Mithun - president</br>
                        +91 7569855965
                        
                    </p>
                    <p>
                        Satyadeep - secratary</br>
                        +91 8919685350
                    </p>
                </div>
            </div>
            <div className="text-center bg-blue-200 text-black mt-4">
                <span>
                    &copy; {new Date().getFullYear()} CodeHub. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
