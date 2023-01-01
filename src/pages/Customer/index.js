import React from "react";
import MainLayout from "../../layouts/MainLayout";
import CustomerBanner from "../../components/CustomerBanner";
import CustomerDetail from "../../components/CustomerDetail";
import SEO from "../../components/SEO";

const Customer = () => {
    return (
        <MainLayout>
            <SEO
                title="Hình ảnh khách hàng"
                description="Khách hàng tại PetCare"
                name="PetCare"
                type="article"
            />
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
    );
};

export default Customer;
