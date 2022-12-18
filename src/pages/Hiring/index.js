import React from "react";
import MainLayout from "../../layouts/MainLayout";
import HiringBanner from "../../components/HiringBanner";
import HiringMain from "../../components/HiringMain";
import SEO from "../../components/SEO";

function Hiring() {
    return (
        <MainLayout>
            <SEO
                title="Tuyển dụng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HiringBanner />
            <HiringMain />
        </MainLayout>
    );
}

export default Hiring;
