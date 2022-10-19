import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import ProductsBanner from '../../components/ProductsBanner';
import ProductsContent from '../../components/ProductsContent';
const Products = () => {
  return (
    <MainLayout>
        <ProductsBanner/>
        <ProductsContent/>
    </MainLayout>
  )
}

export default Products