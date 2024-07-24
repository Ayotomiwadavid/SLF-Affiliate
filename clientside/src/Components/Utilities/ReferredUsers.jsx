import React, { useState } from 'react';

const ReferredUsersTable = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const users = [
        {
            id: 1,
            name: 'Neil Sims',
            email: 'neil.sims@flowbite.com',
            position: 'React Developer',
            status: 'Online',
            avatar: '/docs/images/people/profile-picture-1.jpg',
        },
        {
            id: 2,
            name: 'Bonnie Green',
            email: 'bonnie@flowbite.com',
            position: 'Designer',
            status: 'Online',
            avatar: '/docs/images/people/profile-picture-3.jpg',
        },
        {
            id: 3,
            name: 'Jese Leos',
            email: 'jese@flowbite.com',
            position: 'Vue JS Developer',
            status: 'Online',
            avatar: '/docs/images/people/profile-picture-2.jpg',
        },
        {
            id: 4,
            name: 'Thomas Lean',
            email: 'thomes@flowbite.com',
            position: 'UI/UX Engineer',
            status: 'Online',
            avatar: '/docs/images/people/profile-picture-5.jpg',
        },
        {
            id: 5,
            name: 'Leslie Livingston',
            email: 'leslie@flowbite.com',
            position: 'SEO Specialist',
            status: 'Offline',
            avatar: '/docs/images/people/profile-picture-4.jpg',
        },
    ];

    return (
        <div className="relative overflow-x-auto border mb-4 shadow-md sm:rounded-lg">
           
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Level
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Status
                        </th> */}
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="bg-white border-b  hover:bg-purple-100"
                        >
                           
                            <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {/* <img className="w-10 h-10 rounded-full" src={user.avatar} alt={`${user.name} image`} /> */}
                                <div className="ps-3">
                                    <div className="text-base text-gray-900 font-semibold">{user.name}</div>
                                    <div className="font-normal text-gray-500">{user.email}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">{user.position}</td>
                            {/* <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div
                                        className={`h-2.5 w-2.5 rounded-full ${user.status === 'Online' ? 'bg-green-500' : 'bg-red-500'
                                            } me-2`}
                                    ></div>{' '}
                                    {user.status}
                                </div>
                            </td> */}
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit user
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReferredUsersTable;
