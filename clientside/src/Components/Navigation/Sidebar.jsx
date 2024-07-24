import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const sidebarItems = [
        {
            to: '/dashboard',
            label: 'Dashboard',
            icon: (


                <svg className="flex-shrink-0 w-6 h-6 text-pink-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093C5.724 22 7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012c1.175-1.012 1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083c-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2c-1.154 0-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd" /></svg>
            ),
        },
        {
            to: '/plans',
            label: 'Subscription',
            icon: (


                <svg className="flex-shrink-0 w-6 h-6 text-pink-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M10.213 2.538A5.499 5.499 0 0 0 1.595 8.01a.75.75 0 0 1-1.474.277a6.999 6.999 0 0 1 11.163-6.821l.612-.612a.5.5 0 0 1 .854.353V3.5a.5.5 0 0 1-.5.5H9.957a.5.5 0 0 1-.353-.853zm2.791 2.577a.75.75 0 0 1 .876.598a6.999 6.999 0 0 1-11.164 6.821l-.612.613a.5.5 0 0 1-.854-.354V10.5a.5.5 0 0 1 .5-.5h2.293a.5.5 0 0 1 .354.854l-.61.609a5.499 5.499 0 0 0 8.618-5.472a.75.75 0 0 1 .6-.876ZM7.627 3.657a.75.75 0 0 0-1.5 0V4a1.704 1.704 0 0 0-.085 3.346l1.26.275a.32.32 0 0 1-.068.63H6.52a.32.32 0 0 1-.3-.212a.75.75 0 0 0-1.415.5a1.822 1.822 0 0 0 1.321 1.17v.362a.75.75 0 0 0 1.5 0v-.362a1.82 1.82 0 0 0-.005-3.553l-1.26-.276a.204.204 0 0 1 .044-.403h.828a.316.316 0 0 1 .3.212a.75.75 0 0 0 1.415-.5a1.818 1.818 0 0 0-1.322-1.17v-.36Z" clip-rule="evenodd" /></svg>
            ),
        },
        {
            to: '/referrals',
            label: 'Referrals',
            icon: (

                <svg className="flex-shrink-0 w-6 h-6 text-pink-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="currentColor" d="M2 6H0v2h2v2h2V8h2V6H4V4H2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16z" /></svg>
            ),
        },
        {
            to: '/wallet',
            label: 'Profile',
            icon: (


                <svg className="flex-shrink-0 w-6 h-6 text-pink-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" /></svg>
            ),
        },
        {
            to: '/signout',
            label: 'Sign Out',
            icon: (


                <svg className="flex-shrink-0 w-6 h-6 text-pink-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3" /></svg>
            ),
        },
    ];

    const handleDismiss = () => {
        const element = document.getElementById('dropdown-cta');
        if (element) {
            element.style.display = 'none';
        }
    };

    return (
        <aside
            id="logo-sidebar"
            className="fixed shadow top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-6 font-medium">
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                className="flex items-center p-2 text-xl text-gray-900 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-700 group"
                            >
                                {item.icon}
                                <span className="ms-3">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-pink-100 " role="alert">
                    <div className="flex items-center mb-3">
                        <span className="bg-purple-500 text-white text-sm font-semibold me-2 px-2.5 py-0.5 rounded">
                            Premium
                        </span>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200"
                            onClick={handleDismiss}
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-2.5 h-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="mb-3 text-sm text-gray-800">
                        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                    </p>
                    <a
                        className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        href="#"
                    >
                        Turn new navigation off
                    </a>
                </div>
            </div>


        </aside>
    );
};

export default Sidebar;
