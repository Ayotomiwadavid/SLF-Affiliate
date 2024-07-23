import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import InvestmentPlans from '../../Components/Utilities/InvesmentPlans'
import Footer from '../../Components/Navigation/Footer'
import Breadcrumb from '../../Components/Navigation/BreadCrumb'





const Plans = () => {
    return (
        <div>
            <DashboardLayout />
            <div className="sm:ml-64 mt-16">
                <div className="p-4">
                    <Breadcrumb />
                </div>
                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-800 mx-4 rounded-lg p-4 py-10">
                    <h1 className="sm:text-8xl text-4xl text-white text-center">
                        Plans
                    </h1>
                </div>
                <div className="my-8">
                    <InvestmentPlans />
                </div>



                <div className="m-4">
                    <Footer />
                </div>
            </div>



        </div>
    )
}

export default Plans