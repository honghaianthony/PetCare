import React from "react";
import MainLayout from "../../layouts/MainLayout";
import GalleryBanner from "../../components/GalleryBanner";
import GalleryMain from "../../components/GalleryMain";
import SEO from "../../components/SEO";

function PhotoAndVideo() {
    return (
        <MainLayout>
            <SEO
                title="Hình ảnh & Video"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <GalleryBanner />
            <GalleryMain />
        </MainLayout>
    );
}

export default PhotoAndVideo;
