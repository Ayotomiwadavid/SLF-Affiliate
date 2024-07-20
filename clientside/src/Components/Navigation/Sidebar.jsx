import React from 'react';

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`w-64 bg-white text-gray-900 shadow border p-6 fixed top-16 bottom-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out m-4 rounded-lg`}>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <a href="/my-account" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 3l9 9h-3v7h-12v-7h-3l9-9zm-4 14h8v-6h-8v6zm-2-8h12v-2h-12v2z" fill="currentColor" />
                            </svg>

                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/deposit" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H7m0 0l5 5m-5-5l5-5" />
                            </svg>
                            Deposit
                        </a>
                    </li>
                    <li>
                        <a href="/plans" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H7m0 0l5 5m-5-5l5-5" />
                            </svg>
                            Plans
                        </a>
                    </li>
                    <li>
                        <a href="/referrals" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Referrals
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17a4 4 0 01-8 0m8 0a4 4 0 01-8 0m10-4v6m4-6v6m-4-10h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m4-10h-4m0 0v6m0-6h-4m4 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6m4-6v6" />
                            </svg>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
