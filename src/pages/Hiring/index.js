import React from "react";
import MainLayout from "../../layouts/MainLayout";
import HiringBanner from "../../components/HiringBanner";
import HiringMain from "../../components/HiringMain";

function Hiring() {
    return (
        <MainLayout>
            <HiringBanner />
            <HiringMain />
        </MainLayout>
    );
}

export default Hiring;
