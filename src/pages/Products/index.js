import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ProductsBanner from "../../components/ProductsBanner";
import ProductsContent from "../../components/ProductsContent";
import SEO from "../../components/SEO";
const Products = () => {
    return (
        <MainLayout>
            <SEO
                title="Sản phẩm"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <ProductsBanner />
            <ProductsContent />
        </MainLayout>
    );
};

export default Products;
