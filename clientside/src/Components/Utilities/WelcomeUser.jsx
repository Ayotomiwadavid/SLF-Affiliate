import React from 'react'
import TransactionButtonGroup from './TransactionButtonGroup'


const WelcomeUser = () => {
    let user = {
        username: "Johnny Deep"
    }
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2 mt-4">
            <div className="col-span-2 h-78 md:h-74 pb-10 flex justify-start items-center p-5 py-8 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
                <div className="">
                    {/* <h1 className="md:text-4xl lg:text-7xl flex gap-2 items-center pt-5 text-3xl text-white font-bold">
                        <span>Hello,</span>
                        {user.username ? (
                            <div>{user.username}!</div>
                        ) : (
                            <div>
                                <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                    </h1> */}
                    <div className="date font-semibold text-xs pt-4 sm:text-sm"> <span className="text-gray-300">Wednesday</span>, 14th June 2024</div>
                    <h1 className="text-9xl py-4 text-white font-medium">$0.0</h1>
                    <p className="text-gray-100 font-bold text-sm">Lorem ipsum dolor sit amet consectetur.</p>

                    <div className="mt-8">
                        <TransactionButtonGroup />
                    </div>
                </div>

                {/* <div className="md:block hidden img">
                    <img src="@/assets/img/hero-2.png" className="w-full object-fit -mt-0" alt="" />
                </div> */}
            </div>

            <div className="hidden md:block col bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 shadow-lg rounded">
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-lg font-semibold">Stats</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
                    {/* <h1 className="text-md">Stats</h1> */}
                </div>
                <div className="flex flex-col items-center p-5">
                    <div className=" bg-purple-200 rounded-full flex items-center justify-center mb-3">
                        <img
                            className="w-30 h-30 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="avatar"
                        />
                    </div>
                    <p className="text-xl text-white font-medium">Good Morning Johhny</p>
                    <p className="text-gray-300 text-md">Lorem ipsum dolor sit, amet consectetu.</p>
                </div>
            </div>



        </div>
    )
}

export default WelcomeUser