import React from 'react';
import navBarLogo from '../../assets/images/Easy Travel-Ex Logo 1.png'
const NavBar = () => {


    return (


        <nav class="bg-white dark:bg-gray-900 h-20 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={navBarLogo} class="h-16 w-26" alt="Flowbite Logo" />
                </a>
                <div className='flex flex-wrap items-center'>
                    <div class="flex ml-10 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="flex items-center text-white rounded-full bg-orange-master  focus:ring-4 focus:outline-none focus:ring-orange-master font-medium  text-sm px-4 py-2 text-center ">

                            Apply visa
                            <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.97638 12.7277L10.4922 9.20424L6.97638 5.68076L8.05875 4.59839L12.6646 9.20424L8.05875 13.8101L6.97638 12.7277Z" fill="white" />
                            </svg>
                            </span>
                        </button>

                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">

                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className='flex items-center '>

                                <div className='flex items-center'>
                                    <spam >
                                        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.02625 1.98999H11.0241" stroke="#F6931C" stroke-width="3.99906" stroke-linecap="round" />
                                        </svg>

                                    </spam>
                                    <a href="#" class="flex items-center  font-bold text-gray-900 ml-1 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500" aria-current="page">Home
                                        <spam className='-ml-7'>
                                            <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.0175476" y="-0.00561523" width="44.9894" height="39.9906" rx="11.9972" fill="#F6931C" fill-opacity="0.2" />
                                                <g filter="url(#filter0_d_0_135)">
                                                    <circle cx="44.0072" cy="19.9898" r="3.99906" fill="#F6931C" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_0_135" x="32.0101" y="11.9917" width="23.9944" height="23.9943" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="3.99906" />
                                                        <feGaussianBlur stdDeviation="3.99906" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.596078 0 0 0 0 0 0 0 0 0.19 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_135" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_135" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>

                                        </spam></a></div>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visas</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tour packages</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Car rental</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )

}


export default NavBar;
