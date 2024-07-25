import React from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import Footer from '../../Components/Navigation/Footer';
import Breadcrumb from '../../Components/Navigation/BreadCrumb';




const Profile = () => {
    return (
        <div>
            <DashboardLayout />

            <div className="min-h-screen sm:ml-64 md:pt-20 bg-gray-100 py-10">
                <div className="p-4 mt-8">
                    <Breadcrumb />
                </div>
                <div className="max-w-full mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-cover bg-center h-80 bg-purple-600" 
                    style={{ backgroundImage: "url('https://flowbite.com/docs/images/people/profile-picture-4.jpg')" }}
                    ></div>
                    <div className="p-8">
                        <div className="relative flex items-center">
                            <div className="w-30 h-30 bg-white rounded-full border-4 border-white absolute -top-28 left-1/2 transform -translate-x-1/2">
                                <img className="w-full h-full rounded-full object-cover" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Profile" />
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
                            <p className="text-gray-600">Software Developer</p>
                            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <div className="flex space-x-4">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-gray-800">150</h3>
                                    <p className="text-gray-600">Refferals</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-gray-800">300</h3>
                                    <p className="text-gray-600">Wallet Balance</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-gray-800">180</h3>
                                    <p className="text-gray-600">Following</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-8">
                            <h3 className="text-xl font-medium text-gray-800">Recent Activities</h3>
                            <ul className="mt-4 space-y-2">
                                <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <p className="text-gray-800">Started a new project on GitHub</p>
                                    <p className="text-gray-600 text-sm">2 hours ago</p>
                                </li>
                                <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <p className="text-gray-800">Published a new article on Medium</p>
                                    <p className="text-gray-600 text-sm">5 hours ago</p>
                                </li>
                                <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <p className="text-gray-800">Joined a new group on LinkedIn</p>
                                    <p className="text-gray-600 text-sm">1 day ago</p>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="p-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Profile;
