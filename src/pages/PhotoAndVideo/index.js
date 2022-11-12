import React from "react";
import MainLayout from "../../layouts/MainLayout";
import GalleryBanner from "../../components/GalleryBanner";
import GalleryMain from "../../components/GalleryMain";

function PhotoAndVideo() {
    return (
        <MainLayout>
            <GalleryBanner />
            <GalleryMain />
        </MainLayout>
    );
}

export default PhotoAndVideo;
