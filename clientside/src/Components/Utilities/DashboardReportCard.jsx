import React from 'react';

const DashboardReportCard = ({ report }) => {
    return (
        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
            <div className="p-2 bg-gray-100 rounded-md">
                {report.icon}
            </div>
            <div>
                <h3 className="text-xl font-normal">{report.title}</h3>
                <p className='font-bold text-xl'>{report.value}</p>
            </div>
        </div>
    );
};

export default DashboardReportCard;
