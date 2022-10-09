import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Servicebanner from '../../components/ServiceBanner'
import ServiceChoice from '../../components/ServiceChoice'
import ServiceCare from '../../components/ServiceCare'
import ProductListService from '../../components/ProductListService'
import ServiceForm from '../../components/ServiceForm'
const Service = () => {
  return (
    <MainLayout>
        <Servicebanner/>
        <ServiceChoice/>
        <ServiceCare/>
        <ProductListService/>
        <ServiceForm/>
    </MainLayout>
  )
}

export default Service