import React from 'react';
import Car from '../../assets/images/car rent/car.png'
import Building from '../../assets/images/car rent/bulindin.png'

const RentCar = () => {
    return (
        <>
            <div className=" -mt-4" >
                <div className="m-auto justify-start overflow-hidden mx-4 lg:mt-4 p-2 md:p-12 min-h-[800.81px]" data-aos="zoom-in">
                    <div className=" flex-col lg:flex-row py-8  justify-between sm:justify-center text-center lg:text-left">

                        <div className="flex justify-end mt-8 w-full" data-aos="fade-up" data-aos-delay="700">
                            <h1 className='text-9xl  font-bold text-gray-master opacity-5 mr-80'>Car Rental</h1>
                            <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="32.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="57.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="82.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="7.5" cy="107.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="32.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="57.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="82.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="32.5" cy="107.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="32.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="57.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="82.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="57.5" cy="107.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="32.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="57.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="82.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="82.5" cy="107.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="7.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="32.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="57.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="82.5" r="7.5" fill="#F1C6C3" />
                                    <circle cx="107.5" cy="107.5" r="7.5" fill="#F1C6C3" />
                                </g>
                            </svg>
                        </div>
                        <div className='flex flex-wrap mt-4'>
                            <div className='w-1/3'>
                                <img className='' src={Building}></img>
                                <img className='absolute  w-96 h-60 -mt-40 ml-10' src={Car}></img>
                                <svg className='-mt-60 -ml-20 ' width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="168" cy="168" r="158" stroke="#FF9800" stroke-opacity="0.1" stroke-width="20" />
                                </svg>
                                <svg className='-mt-10' width="54" height="54" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_0_917)">
                                        <circle cx="43" cy="35" r="27" fill="#F6931C" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_0_917" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="8" />
                                            <feGaussianBlur stdDeviation="8" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.964706 0 0 0 0 0.576471 0 0 0 0 0.109804 0 0 0 0.24 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_917" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_917" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>


                            </div>
                            <div className=' flex flex-wrap justify-start w-2/3 p-20'>
                                <div className='flex-col grid lg:grid-cols-1'>
                                    <h1 className='text-4xl	font-bold'>Rent cars from us !
                                    </h1>
                                    <h6 className='my-1 '>Get a nice car for city ride </h6>
                                    <div className='mt-4 h-1 w-16  bg-[#F6931C]'></div>
                                    <h3 className='text-lg max-w-lg min-w-lg min-w-96 '>
                                        Drive in style with our high-quality
                                        car rentals. Whether you need a vehicle
                                        for a road trip or a corporate event,
                                        we have a wide range of cars to suit your needs.
                                        Our competitive prices, convenient locations, and superior customer
                                        service make us the top choice for all your car rental needs. Book today and
                                        experience the freedom of the open road with us!
                                    </h3>
                                    <button type="button" class="flex justify-between mt-16 flex items-center text-white rounded-full h-14 w-40  bg-orange-master max-w-[190.69px] max-h-[56.14px] focus:ring-4 focus:outline-none focus:ring-orange-master font-medium  text-sm px-4 py-2 text-center "
                                    >Check our cars
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.31512 16.0551L12.7485 11.612L8.31512 7.16895L9.67999 5.80408L15.4879 11.612L9.67999 17.42L8.31512 16.0551Z" fill="white" />
                                        </svg>

                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default RentCar;