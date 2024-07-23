// DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from '../Navigation/Sidebar.jsx';
import Navbar from '../Navigation/Navbar.jsx';


const DashboardLayout = () => {

    return (
        <div className="">
            <Navbar />
            <Sidebar />
        </div>
    );
};

export default DashboardLayout;
