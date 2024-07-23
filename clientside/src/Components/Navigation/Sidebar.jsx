import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside
            id="logo-sidebar"
            className="fixed shadow top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            to="/dashboard"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 21"
                            >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/plans"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M11.3 1.046a1.429 1.429 0 0 0-2.598 0l-8.5 16A1.429 1.429 0 0 0 1.429 19.5h17.142a1.429 1.429 0 0 0 1.227-2.035l-8.5-16ZM11 14.5a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v4Zm-1-6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Subscription</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/referrals"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m17 6.999-5-5v3a1 1 0 0 0 1 1h4ZM13 12V7h-2v5H9l3.999 4L17 12h-4ZM4 4h5V2H3.5A1.5 1.5 0 0 0 2 3.5v13A1.5 1.5 0 0 0 3.5 18H9v-2H4V4Zm1 8h3V9H5v3Zm0 5h6v-2H5v2ZM5 8h3V5H5v3Zm10 2h-2v3h2v-3Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Referrals</span>
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/wallet"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286C10 17.169 10.831 18 11.857 18h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signout"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5ZM2 4a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V4Zm11-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3ZM15 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3Zm1 1h1v10h-1V3Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
