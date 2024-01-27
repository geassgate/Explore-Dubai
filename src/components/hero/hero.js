import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="hero mt-20 " >
                <div className="m-auto overflow-hidden mx-4 lg:mt-4 p-2 md:p-12 min-h-[800.81px]" data-aos="zoom-in">
                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/12 flex items-start flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.597">
                                    <path d="M25.4438 51.4598C39.4079 51.4598 50.728 40.1397 50.728 26.1756C50.728 12.2115 39.4079 0.891357 25.4438 0.891357C11.4797 0.891357 0.159546 12.2115 0.159546 26.1756C0.159546 40.1397 11.4797 51.4598 25.4438 51.4598Z" fill="#F2F7F4" />
                                    <path d="M30.2509 34.2644L22.8687 26.8658L30.2509 19.4673L27.9785 17.1948L18.3074 26.8658L27.9785 36.5369L30.2509 34.2644Z" fill="#747474" />
                                </g>
                            </svg>

                        </div>

                        <div className="lg:w-8/12 flex mt-14 flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h6 className=" text-md  text-[#FFFFFF]">Welcome to </h6>
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-[#FFFFFF]	">
                                {/* We build digital solutions to help businesses scale */}
                                The best visa service provider in the UAE.
                            </h1>
                            <h6 className=" text-sm lg:max-w-sm text-[#FFFFFF]">Your bus stop for Tourist Visa, Visa change, freelance Visa,
                                flights & Hotel reservation. </h6>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">

                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                {/* <Link to="/contact" className="text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                            Angebot Anfragen
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link> */}
                            </div>
                            <div className='flex'>
                                <button type="button" class="flex text-xs text-white bg-[#1B161C] bg-opacity-50  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2">
                                    <spn>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2462 2.00024C13.832 2.00024 16.7494 4.93968 16.7494 8.55309C16.7494 12.995 11.6604 17.3714 10.2462 17.3714C8.83207 17.3714 3.74303 12.995 3.74303 8.55309C3.74303 4.93968 6.6604 2.00024 10.2462 2.00024ZM10.2462 3.18264C7.3123 3.18264 4.92543 5.59237 4.92543 8.55309C4.92543 12.3202 9.35863 15.9904 10.2462 16.1859C11.1338 15.9896 15.567 12.3194 15.567 8.55309C15.567 5.59237 13.1801 3.18264 10.2462 3.18264ZM10.247 5.94157C11.6596 5.94157 12.8089 7.09086 12.8089 8.50422C12.8089 9.91679 11.6596 11.0653 10.247 11.0653C8.83444 11.0653 7.68515 9.91679 7.68515 8.50422C7.68515 7.09086 8.83444 5.94157 10.247 5.94157ZM10.247 7.12397C9.48633 7.12397 8.86755 7.74276 8.86755 8.50422C8.86755 9.26489 9.48633 9.88289 10.247 9.88289C11.0077 9.88289 11.6265 9.26489 11.6265 8.50422C11.6265 7.74276 11.0077 7.12397 10.247 7.12397Z" fill="white" />
                                        </svg>

                                    </spn>
                                    United Arab Emirates
                                </button>
                                <button type="button" class="flex text-xs   text-white bg-[#1B161C] bg-opacity-50  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2">
                                    <spn>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2462 2.00024C13.832 2.00024 16.7494 4.93968 16.7494 8.55309C16.7494 12.995 11.6604 17.3714 10.2462 17.3714C8.83207 17.3714 3.74303 12.995 3.74303 8.55309C3.74303 4.93968 6.6604 2.00024 10.2462 2.00024ZM10.2462 3.18264C7.3123 3.18264 4.92543 5.59237 4.92543 8.55309C4.92543 12.3202 9.35863 15.9904 10.2462 16.1859C11.1338 15.9896 15.567 12.3194 15.567 8.55309C15.567 5.59237 13.1801 3.18264 10.2462 3.18264ZM10.247 5.94157C11.6596 5.94157 12.8089 7.09086 12.8089 8.50422C12.8089 9.91679 11.6596 11.0653 10.247 11.0653C8.83444 11.0653 7.68515 9.91679 7.68515 8.50422C7.68515 7.09086 8.83444 5.94157 10.247 5.94157ZM10.247 7.12397C9.48633 7.12397 8.86755 7.74276 8.86755 8.50422C8.86755 9.26489 9.48633 9.88289 10.247 9.88289C11.0077 9.88289 11.6265 9.26489 11.6265 8.50422C11.6265 7.74276 11.0077 7.12397 10.247 7.12397Z" fill="white" />
                                        </svg>

                                    </spn>
                                    Saudi  Arabia
                                </button>
                                <button type="button" class="flex text-xs text-white bg-[#1B161C] bg-opacity-50  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2">
                                    <spn>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2462 2.00024C13.832 2.00024 16.7494 4.93968 16.7494 8.55309C16.7494 12.995 11.6604 17.3714 10.2462 17.3714C8.83207 17.3714 3.74303 12.995 3.74303 8.55309C3.74303 4.93968 6.6604 2.00024 10.2462 2.00024ZM10.2462 3.18264C7.3123 3.18264 4.92543 5.59237 4.92543 8.55309C4.92543 12.3202 9.35863 15.9904 10.2462 16.1859C11.1338 15.9896 15.567 12.3194 15.567 8.55309C15.567 5.59237 13.1801 3.18264 10.2462 3.18264ZM10.247 5.94157C11.6596 5.94157 12.8089 7.09086 12.8089 8.50422C12.8089 9.91679 11.6596 11.0653 10.247 11.0653C8.83444 11.0653 7.68515 9.91679 7.68515 8.50422C7.68515 7.09086 8.83444 5.94157 10.247 5.94157ZM10.247 7.12397C9.48633 7.12397 8.86755 7.74276 8.86755 8.50422C8.86755 9.26489 9.48633 9.88289 10.247 9.88289C11.0077 9.88289 11.6265 9.26489 11.6265 8.50422C11.6265 7.74276 11.0077 7.12397 10.247 7.12397Z" fill="white" />
                                        </svg>

                                    </spn>
                                    Zimbabwe
                                </button>

                            </div>
                            <div className='flex items-center mt-8'>
                                <button type="button" class="flex items-center text-white rounded-full bg-orange-master max-w-28 max-h-14 focus:ring-4 focus:outline-none focus:ring-orange-master font-medium  text-sm px-4 py-2 text-center ">Our services</button>
                                <div className='flex items-center ml-4'>
                                    <svg width="70.98" height="70.98" viewBox="0 0 101 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50.0683" cy="48.8584" r="47.9887" fill="white" fill-opacity="0.2" />
                                        <circle cx="50.0683" cy="48.8583" r="39.9906" fill="white" />
                                        <g filter="url(#filter0_d_0_195)">
                                            <circle cx="50.0683" cy="48.8585" r="33.992" fill="#C20F0F" />
                                        </g>
                                        <path d="M42.0701 48.859V45.2998C42.0701 40.8809 45.1994 39.0713 49.0285 41.2808L52.1178 43.0603L55.2071 44.8399C59.0362 47.0494 59.0362 50.6686 55.2071 52.878L52.1178 54.6576L49.0285 56.4372C45.1994 58.6467 42.0701 56.8371 42.0701 52.4181V48.859Z" stroke="white" stroke-width="1.49965" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <defs>
                                            <filter id="filter0_d_0_195" x="0.0800018" y="6.86833" width="99.9765" height="99.9766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="7.99812" />
                                                <feGaussianBlur stdDeviation="7.99812" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_195" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_195" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <span className='ml-2 text-xs text-gray-50	'>Watch Video</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:justify-end mt-8 w-full lg:w-3/6" data-aos="fade-up" data-aos-delay="700">
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className='flex justify-end'>
                                    <div class="w-12 h-12 bg-[#454B4F] rounded-full"></div>
                                </div>

                                <a href="#">
                                    <h5 class="mb-2 text-2xl max-w-56 font-bold tracking-tight text-gray-900 dark:text-white">Get your visa in few steps now !</h5>
                                    <div className='h-2 rounded-full w-12 bg-[#F6931C]'></div>
                                </a>
                                <p class="mb-3 font-normal mt-2 text-gray-700 dark:text-gray-400">
                                    We made it more easier for you in order to provide you with the best service, our system has been optimisez to make sure we give you satisfactory visa service. Please select your option below and proceed.
                                </p>
                                <a href="#" class="inline-flex w-full justify-center items-center px-6 py-3.5 text-lg font-medium font-medium text-center text-white bg-gradient-to-r from-[#FC9C0D] to-[#F6931C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Get my tourist UAE Visa
                                    <svg className='ml-2' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4025 12.3859C18.781 12.4144 19.0642 12.7452 19.0358 13.1237L18.8616 15.4231C18.7177 17.3201 17.1167 18.8057 15.2151 18.8057H4.58423C2.68259 18.8057 1.08155 17.3201 0.937669 15.4231L0.763543 13.1237C0.735133 12.7452 1.01923 12.4144 1.39773 12.3859C1.77805 12.3722 2.10614 12.6407 2.13547 13.0201L2.30868 15.3186C2.39849 16.5026 3.39743 17.431 4.58423 17.431H15.2151C16.4019 17.431 17.4017 16.5026 17.4906 15.3186L17.6647 13.0201C17.6941 12.6407 18.0304 12.3713 18.4025 12.3859ZM11.0821 0.714844C12.4594 0.714844 13.6005 1.74701 13.7724 3.0784L15.5773 3.0792C17.4982 3.0792 19.0599 4.64541 19.0599 6.57179V9.72347C19.0599 9.96816 18.9297 10.1936 18.7199 10.3164C16.4578 11.6411 13.5922 12.4138 10.5868 12.5169L10.5872 14.1652C10.5872 14.5446 10.2792 14.8526 9.89983 14.8526C9.52042 14.8526 9.21249 14.5446 9.21249 14.1652L9.2119 12.5171C6.20954 12.415 3.34377 11.6421 1.07999 10.3164C0.86921 10.1936 0.73999 9.96816 0.73999 9.72347V6.56263C0.73999 4.64175 2.30621 3.0792 4.23167 3.0792L6.02728 3.0784C6.19915 1.74701 7.34024 0.714844 8.71761 0.714844H11.0821ZM15.5773 4.45387H4.23167C3.06411 4.45387 2.11467 5.39965 2.11467 6.56263V9.32298C4.29006 10.505 7.03256 11.1528 9.88709 11.154L9.89983 11.1529L9.91 11.1532L10.3464 11.1487C13.0461 11.0844 15.6214 10.4438 17.6852 9.32298V6.57179C17.6852 5.40332 16.7403 4.45387 15.5773 4.45387ZM11.0821 2.08952H8.71761C8.10052 2.08952 7.57961 2.50951 7.42573 3.07863H12.3739C12.22 2.50951 11.6991 2.08952 11.0821 2.08952Z" fill="white" fill-opacity="0.6" />
                                    </svg>

                                </a>
                                <a href="#" class="mt-4 bg-opacity-5 text-black inline-flex w-full justify-center items-center px-6 py-3.5 text-lg font-medium font-medium text-center text-white bg-[#2C2C2C] rounded-lg hover:bg-opacity-25 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-opacity-5 dark:focus:ring-blue-800">
                                Check out our tours </a>
                            </div>

                        </div>

                        <svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.384 14.4541L31.5543 15.4393L31.384 14.4541ZM69.3751 78.4392L69.1827 77.4581L69.3751 78.4392ZM106.901 10.3002C107.368 10.005 107.506 9.38743 107.211 8.92081L102.401 1.31689C102.105 0.850276 101.488 0.711321 101.021 1.00653C100.555 1.30173 100.416 1.91931 100.711 2.38592L104.987 9.14497L98.228 13.4211C97.7614 13.7163 97.6224 14.3339 97.9176 14.8005C98.2128 15.2671 98.8304 15.4061 99.297 15.1109L106.901 10.3002ZM3.86061 69.1988C1.89111 61.3207 0.94202 49.1738 4.44178 38.3564C7.91754 27.6131 15.7723 18.1671 31.5543 15.4393L31.2137 13.469C14.6033 16.3399 6.21189 26.3893 2.53934 37.7409C-1.10923 49.0182 -0.108773 61.5655 1.92078 69.6837L3.86061 69.1988ZM31.5543 15.4393C51.1518 12.0521 66.6816 26.3097 74.2187 42.3724C77.9767 50.3813 79.6642 58.6891 78.8953 65.2318C78.5116 68.4969 77.5229 71.2719 75.9283 73.3609C74.3464 75.4333 72.1327 76.8796 69.1827 77.4581L69.5675 79.4202C72.991 78.749 75.6355 77.0398 77.5177 74.5742C79.3871 72.1252 80.4682 68.9797 80.8812 65.4652C81.7057 58.4485 79.894 49.7603 76.0288 41.523C68.3195 25.0933 52.1068 9.85785 31.2137 13.469L31.5543 15.4393ZM69.1827 77.4581C66.4903 77.986 64.1763 77.2471 62.228 75.5313C60.2465 73.7863 58.6211 71.0037 57.478 67.4546C55.1933 60.3609 54.9376 50.5161 57.2867 40.8998C59.6344 31.2894 64.5528 22.03 72.487 16.0024C80.3888 9.9995 91.3982 7.11226 106.147 10.4307L106.586 8.47995C91.3416 5.05 79.7105 8.00372 71.2775 14.4102C62.877 20.792 57.7664 30.5104 55.3443 40.4253C52.9237 50.3342 53.1574 60.5621 55.5748 68.0676C56.7827 71.8181 58.5615 74.9667 60.9065 77.0319C63.2847 79.1263 66.2196 80.0767 69.5675 79.4202L69.1827 77.4581Z" fill="url(#paint0_linear_0_166)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_166" x1="78.373" y1="9.95524" x2="28.8846" y2="74.4401" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='-ml-5'>
                            <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_di_0_174)">
                                    <circle cx="42.8599" cy="34.9536" r="25.9939" fill="white" />
                                </g>
                                <g filter="url(#filter1_d_0_174)">
                                    <circle cx="42.8599" cy="34.9536" r="18.9955" fill="url(#paint0_linear_0_174)" shape-rendering="crispEdges" />
                                </g>
                                <g clip-path="url(#clip0_0_174)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.941 38.4231C49.2079 38.5373 49.3309 38.8467 49.2167 39.1136L48.5216 40.7342C47.9481 42.0712 46.422 42.7499 45.0461 42.2793L37.354 39.6485C35.9781 39.1779 35.1873 37.7068 35.5526 36.2986L35.9957 34.5918C36.0688 34.3109 36.3562 34.1418 36.6371 34.2149C36.9157 34.2991 37.0866 34.5746 37.014 34.8563L36.5705 36.5623C36.3425 37.4412 36.8355 38.3602 37.6942 38.6539L45.3862 41.2847C46.245 41.5784 47.1982 41.1541 47.5555 40.3193L48.2503 38.6994C48.3654 38.4321 48.6754 38.3204 48.941 38.4231ZM46.5325 28.1668C47.5291 28.5076 48.0993 29.5368 47.8942 30.5427L49.2 30.99C50.5899 31.4653 51.3322 32.985 50.8555 34.3789L50.0755 36.6593C50.015 36.8363 49.865 36.9673 49.6828 37.0042C47.7182 37.4029 45.4536 37.2528 43.2536 36.5837L42.8459 37.7764C42.752 38.051 42.453 38.1976 42.1785 38.1037C41.9039 38.0098 41.7573 37.7108 41.8512 37.4362L42.2586 36.2436C40.1115 35.4267 38.2293 34.1583 36.9194 32.6388C36.7972 32.4978 36.7595 32.3027 36.8201 32.1257L37.6023 29.8386C38.0777 28.4488 39.5976 27.7058 40.9908 28.1823L42.2902 28.626C42.744 27.7052 43.8251 27.2408 44.8217 27.5816L46.5325 28.1668ZM48.8598 31.9846L40.6506 29.1769C39.8058 28.888 38.8847 29.3373 38.5969 30.1788L37.9138 32.1761C39.1954 33.5697 41.0194 34.7171 43.0845 35.4244L43.094 35.4267L43.1013 35.4295L43.4182 35.5342C45.3874 36.1557 47.4094 36.3296 49.18 36.0293L49.8608 34.0387C50.15 33.1932 49.7013 32.2724 48.8598 31.9846ZM46.1923 29.1614L44.4815 28.5763C44.035 28.4236 43.5542 28.5986 43.302 28.9723L46.8823 30.1968C46.9118 29.7469 46.6388 29.3141 46.1923 29.1614Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_di_0_174" x="0.86972" y="0.961594" width="83.9803" height="83.9803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="7.99812" />
                                        <feGaussianBlur stdDeviation="7.99812" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_174" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_174" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.99906" />
                                        <feGaussianBlur stdDeviation="3.99906" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.341177 0 0 0 0 0.658824 0 0 0 0.21 0" />
                                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_174" />
                                    </filter>
                                    <filter id="filter1_d_0_174" x="15.8663" y="11.9589" width="53.9873" height="53.9872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.99906" />
                                        <feGaussianBlur stdDeviation="3.99906" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.345098 0 0 0 0 0.658824 0 0 0 0.19 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_174" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_174" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_0_174" x1="23.8644" y1="51.6877" x2="64.5691" y2="25.4558" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FBA525" stop-opacity="0.67" />
                                        <stop offset="1" stop-color="#F6931C" />
                                    </linearGradient>
                                    <clipPath id="clip0_0_174">
                                        <rect width="16.8196" height="16.8196" fill="white" transform="translate(38.1769 23.8276) rotate(18.8816)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero;