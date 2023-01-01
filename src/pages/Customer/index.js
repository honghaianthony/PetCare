import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import CustomerBanner from '../../components/CustomerBanner';
import CustomerDetail from '../../components/CustomerDetail';

const Customer = () => {
    return (
        <MainLayout>
            <div className="customer_container">
                <div className="customer_container_detail">
                    <CustomerBanner />
                    <CustomerDetail />
                </div>

            </div>
            {/* <div className="customer_container_second">
                <div className="customer_container_detail_second">

                </div>
            </div> */}
        </MainLayout>
    )
}

export default Customer