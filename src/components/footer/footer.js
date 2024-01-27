import React from 'react'
import footerLogo from '../../assets/images/footer logo.png'
export default function Footer() {
    return (
        <footer className="py-6 bg-[#1B161C] text-white ">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-3">
                        <a rel="noopener noreferrer" href="#" className="flex  justify-center space-x-3 md:justify-start">
                            <img src={footerLogo} />
                        </a>
                        <div className='max-w-60'>Qasimi Al waad</div>
                        <div className='max-w-60'>Muweila Building 3 - Office 2003
                            Sharjah - United Arab Emirates</div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Important links</p>
                        <ul>
                            <li>
                                <span>- </span>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Contact</a>
                            </li>
                            <li>
                                <span>- </span>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Terms & Conditions</a>
                            </li>
                            <li>
                                <span>- </span>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Privacy policies</a>
                            </li>
                            <li>
                                <span>- </span>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Projects</a>
                            </li>
                            <li>
                                <span>- </span>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Contacts us</p>
                        <ul>
                            <li className='flex items-center'>
                                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8824 1.66699C16.6574 1.66699 18.7499 3.93116 18.7499 6.93366V12.657C18.7499 14.1937 18.2066 15.582 17.2191 16.567C16.3333 17.4495 15.1841 17.917 13.8958 17.917H5.68492C4.39909 17.917 3.25075 17.4503 2.36409 16.567C1.37659 15.582 0.833252 14.1937 0.833252 12.657V6.93366C0.833252 3.93116 2.92575 1.66699 5.70075 1.66699H13.8824ZM13.8824 2.91699H5.70075C3.60492 2.91699 2.08325 4.60616 2.08325 6.93366V12.657C2.08325 13.8595 2.49659 14.9337 3.24659 15.6812C3.89325 16.327 4.73742 16.667 5.68742 16.667H13.8824C13.8841 16.6653 13.8908 16.667 13.8958 16.667C14.8466 16.667 15.6899 16.327 16.3366 15.6812C17.0874 14.9337 17.4999 13.8595 17.4999 12.657V6.93366C17.4999 4.60616 15.9783 2.91699 13.8824 2.91699ZM15.1958 6.77433C15.4133 7.04183 15.3724 7.43516 15.1049 7.65349L11.4016 10.6635C10.9333 11.0352 10.3733 11.221 9.81409 11.221C9.25659 11.221 8.70075 11.0368 8.23575 10.6685L4.49825 7.65516C4.22909 7.43849 4.18742 7.04433 4.40325 6.77599C4.62075 6.50849 5.01409 6.46599 5.28242 6.68183L9.01658 9.69182C9.48575 10.0635 10.1466 10.0635 10.6191 9.68849L14.3158 6.68349C14.5841 6.46433 14.9774 6.50599 15.1958 6.77433Z" fill="white" />
                                </svg>
                                </span>
                                <a rel="noopener noreferrer" href="#" className="ml-2 hover:dark:text-violet-400">contact@easytravelex.ae</a>
                            </li>
                            <li className='flex'>
                                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6329 4.21734C3.63457 4.21734 3.5929 4.26068 3.5404 4.31235C3.33874 4.50818 2.92124 4.91568 2.91703 5.76818C2.9104 6.96068 3.69457 9.17484 7.4704 12.9498C11.2287 16.7065 13.4396 17.4998 14.6346 17.4998H14.6521C15.5046 17.4957 15.9112 17.0773 16.1079 16.8765C16.1679 16.8148 16.2162 16.7698 16.2504 16.7415C17.0804 15.9065 17.5054 15.2848 17.5013 14.8865C17.4954 14.4798 16.9896 13.999 16.2904 13.334C16.0679 13.1223 15.8262 12.8923 15.5712 12.6373C14.9104 11.9782 14.5829 12.0907 13.8629 12.344C12.8671 12.6932 11.5004 13.1682 9.37707 11.044C7.2504 8.91901 7.72624 7.55401 8.07457 6.55818C8.32624 5.83818 8.44124 5.50985 7.77957 4.84818C7.5204 4.58984 7.2879 4.34485 7.07374 4.11985C6.4129 3.42485 5.93624 2.92235 5.53207 2.91651H5.5254C5.12624 2.91651 4.50624 3.34318 3.62874 4.22068C3.63124 4.21818 3.6329 4.21734 3.6329 4.21734ZM14.6354 18.7498C12.5587 18.7498 9.85124 17.0965 6.58707 13.834C3.3104 10.5582 1.65457 7.84234 1.667 5.76151C1.67457 4.38651 2.3954 3.68235 2.66624 3.41818C2.6804 3.40068 2.72874 3.35318 2.7454 3.33651C3.9404 2.14068 4.74624 1.65735 5.5479 1.66638C6.47874 1.67901 7.14124 2.37568 7.97957 3.25818C8.18707 3.47651 8.41207 3.71401 8.66291 3.96401C9.87957 5.18068 9.53291 6.17318 9.25457 6.96984C8.95124 7.83901 8.68874 8.58901 10.2604 10.1607C11.8337 11.7323 12.5837 11.4698 13.4496 11.164C14.2471 10.8857 15.2371 10.5373 16.4554 11.754C16.7021 12.0007 16.9362 12.2232 17.1521 12.429C18.0387 13.2715 18.7387 13.9373 18.7506 14.8707C18.7604 15.6665 18.2771 16.4773 17.0837 17.6715L16.5554 17.3132L17.0021 17.7498C16.7379 18.0207 16.0346 18.7423 14.6587 18.7498H14.6354Z" fill="white" />
                                </svg>
                                </span>
                                <a rel="noopener noreferrer" href="#" className="ml-2  hover:dark:text-violet-400">+971 50 600  1298</a>
                            </li>

                            <li>
                                <h1 rel="noopener noreferrer" href="#" className="font-bold text-xl hover:dark:text-violet-400">Get started today</h1>
                            </li>
                            <li>

                                <form class="max-w-72">
                                    <div class="relative bg-[#D9D9D933] rounded-lg flex mt-2  items-center	">
                                        <div class="absolute inset-y-0 start-0 flex items-center  ps-3.5 rounded-lg  pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="email-address-icon" class="bg-transparent  max-w[40px] text-white text-sm rounded-lg block  ps-10 p-2.5   " placeholder="name@flowbite.com" />
                                        <button type="button" class=" flex items-center mt-1 focus:outline-none text-white bg-gradient-to-r from-[#E06C00] to-[#E08700]  font-medium rounded-lg text-sm p-2   dark:focus:ring-yellow-900">Subscribe <span className='ml-1'><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21535 8.89205L8.67058 12.8753C8.778 13.0499 8.94585 13.0479 9.01366 13.0385C9.08147 13.0291 9.24461 12.9875 9.30369 12.7894L12.3739 2.41995C12.4276 2.23667 12.3289 2.11179 12.2846 2.06748C12.2416 2.02317 12.1188 1.9285 11.9409 1.97886L1.56404 5.01752C1.36732 5.07526 1.32435 5.24042 1.31495 5.30823C1.30555 5.37738 1.30287 5.54858 1.47676 5.65802L5.5057 8.1777L9.06535 4.58045C9.26073 4.38307 9.57963 4.38105 9.77769 4.57642C9.97574 4.77179 9.97709 5.09137 9.78172 5.28876L6.21535 8.89205ZM8.96129 14.0496C8.49401 14.0496 8.06567 13.8119 7.81323 13.4037L5.21029 9.18007L0.94301 6.51134C0.483115 6.22332 0.242762 5.71038 0.317285 5.17127C0.391136 4.63215 0.761066 4.20381 1.28071 4.0514L11.6575 1.01274C12.1349 0.873097 12.6465 1.00536 12.9983 1.35582C13.3501 1.70964 13.481 2.2266 13.3387 2.70596L10.2685 13.0747C10.1147 13.5964 9.68504 13.965 9.14726 14.0368C9.08415 14.0449 9.02306 14.0496 8.96129 14.0496Z" fill="white" />
                                        </svg>
                                        </span></button>

                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>


                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium font-bold">Find us on Gmaps</p>
                        <div class="relative w-[287px] h-[157px] rounded-lg">
                            <iframe class="absolute top-0 left-0 w-[287px] h-[157px] rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>

                    </div>

                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>Copyright 2023 | Easy Travelex. All Rights Reserved</span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.888672" width="34.2222" height="34.2222" rx="3.11111" fill="#D9D9D9" fill-opacity="0.2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9609 11H18.8609C17.9324 11 17.0425 11.3708 16.3863 12.0216C15.7294 12.68 15.3609 13.5692 15.3609 14.5V16.6H13.2609V19.4H15.3609V25H18.1609V19.4H20.9609V16.6H18.1609V14.5C18.1609 14.3108 18.2343 14.136 18.366 14.0028C18.4969 13.8772 18.6755 13.8 18.8609 13.8H20.9609V11Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.888672" width="34.2222" height="34.2222" rx="3.11111" fill="#D9D9D9" fill-opacity="0.2" />
                                <path d="M13.8305 11H20.3908C22.6838 11 24.111 12.6187 24.111 14.9094V21.0906C24.111 23.3813 22.6838 25 20.3901 25H13.8305C11.5375 25 10.111 23.3813 10.111 21.0906V14.9094C10.111 12.6187 11.5443 11 13.8305 11Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.9901 15.5303C15.4857 15.5303 14.2658 16.7502 14.2658 18.2546C14.2658 19.759 15.4857 20.9789 16.9901 20.9789C18.4946 20.9789 19.7145 19.759 19.7145 18.2546C19.7145 16.7502 18.4946 15.5303 16.9901 15.5303Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.8958 14.3955V14.4492M21.1151 14.4072C21.1151 14.5293 21.0163 14.6281 20.8942 14.6281C20.7721 14.6281 20.6725 14.5293 20.6725 14.4072C20.6725 14.2851 20.7721 14.1855 20.8942 14.1855C21.0163 14.1855 21.1151 14.2851 21.1151 14.4072Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.888672" width="34.2222" height="34.2222" rx="3.11111" fill="#949494" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5487 15.931C13.0445 15.931 11.0142 17.9561 11.0142 20.4655C11.0142 22.9749 13.0445 25 15.5487 25C18.0528 25 20.0831 22.9749 20.0831 20.4655V15.4225C20.0831 15.4225 21.6996 16.5932 23.2077 16.1898V13.6698C21.0434 13.4655 20.1861 11.7 19.953 11H17.8431V20.4019C17.8431 21.5635 16.9032 22.5019 15.7439 22.5019C14.5838 22.5019 13.6439 21.5635 13.6439 20.4019C13.6439 19.3122 14.4703 18.42 15.529 18.3125C15.529 17.6208 15.5487 15.931 15.5487 15.931Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.888672" width="34.2222" height="34.2222" rx="3.11111" fill="#D9D9D9" fill-opacity="0.2" />
                                <path d="M16.7379 11.1966C19.0029 10.9802 20.9084 12.7555 20.9084 14.9758C20.9084 18.2987 21.0734 19.9606 24.111 21.2902L24.1098 21.2908C22.7396 21.895 22.5776 21.9664 22.0254 23.1034C21.8816 23.4 21.5941 23.6173 21.2648 23.6437C19.32 23.8004 18.5473 24.819 17.111 24.819C15.6755 24.819 14.9028 23.8004 12.9579 23.6437C12.6288 23.6173 12.3412 23.4 12.1974 23.1034C11.6451 21.9663 11.4831 21.8949 10.1121 21.2907L10.111 21.2902C13.0979 19.9833 13.3076 18.3555 13.3144 15.1431C13.3182 13.1596 14.7628 11.385 16.7379 11.1966Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.9299 15.7695C11.7381 16.2274 12.4676 16.9538 13.1585 17.8097" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.2954 15.7695C22.4872 16.2274 21.7578 16.9538 21.0668 17.8097" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.777771" y="0.888672" width="34.2222" height="34.2222" rx="3.11111" fill="#D9D9D9" fill-opacity="0.2" />
                                <path d="M14.7383 24.2508C14.568 24.1653 14.3811 24.1358 14.1957 24.1797C13.5653 24.328 12.5483 24.5816 11.8082 24.7677C11.3874 24.8736 11.0045 24.499 11.1021 24.0768C11.286 23.2792 11.541 22.1698 11.6621 21.6151C11.7 21.4426 11.6765 21.2647 11.6016 21.105C11.1581 20.1554 10.8887 19.1043 10.8887 18.0002C10.8887 13.7132 14.7943 10.2943 19.2227 11.1252C22.0052 11.6473 24.2414 13.8843 24.7635 16.666C25.5944 21.0945 22.1755 25 17.8886 25C16.7921 25 15.6963 24.7352 14.7383 24.2508Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.2449 15.2462C14.1666 16.3299 14.9838 18.0514 16.4217 19.4892C17.8595 20.9271 19.5538 21.7171 20.6374 20.6388L20.7373 20.5388C21.1717 20.1052 21.1082 19.3841 20.6049 19.033C20.4422 18.9202 20.272 18.8006 20.0911 18.6743C19.6998 18.3995 19.1648 18.4419 18.8265 18.7786L18.6435 18.9603C17.8556 18.4911 17.4561 18.0401 16.9241 17.241L17.1057 17.0579C17.4417 16.7188 17.4841 16.1838 17.2102 15.7926C17.083 15.6117 16.9642 15.4415 16.8508 15.2788C16.5004 14.7755 15.7792 14.7127 15.3448 15.1463L15.2449 15.2462Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
