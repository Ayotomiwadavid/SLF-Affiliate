// DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from '../Navigation/Sidebar.jsx';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col">

            {/* Top Bar */}
            <div className="bg-white m-0 p-0">
                <header className="bg-white shadow-md text-white mx-4 mt-2 rounded-md py-4 px-6 fixed top-0 left-0 right-0 z-10 flex justify-between items-center">
                    <h1 className="text-2xl text-gray-900 font-semibold">Dashboard</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-900 hover:text-gray-200">Home</a></li>
                            <li><a href="#" className="text-gray-900 hover:text-gray-200">Profile</a></li>
                            <li><a href="#" className="text-gray-900 hover:text-gray-200">Settings</a></li>
                        </ul>
                    </nav>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </header>
            </div>

            {/* Sidebar and Main Content Wrapper */}
            <div className="flex flex-grow mt-16">
                <Sidebar isOpen={sidebarOpen} />
                <main className="flex-grow p-8 bg-white ml-0 md:ml-64 transition-all duration-300 ease-in-out">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
