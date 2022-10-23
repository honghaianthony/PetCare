import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import ProductsBanner from '../../components/ProductsBanner';
import ProductsContent from '../../components/ProductsContent';
import ProductsMenu from '../../components/ProductsMenu';
const Products = () => {
  return (
    <MainLayout>
        <ProductsBanner/>
        <ProductsMenu/>
        {/* <Route exact path="/doan">
          <ProductsContent/>
        </Route>
        <Route exact path="/quanao">
          <ProductsContent/>
        </Route> */}
    </MainLayout>
  )
}

export default Products