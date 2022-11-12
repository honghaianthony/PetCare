// import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Servicebanner from '../../components/ServiceBanner'
import ServiceChoice from '../../components/ServiceChoice'
import ServiceCare from '../../components/ServiceCare'
import ProductListService from '../../components/ProductListService'
import ServiceForm from '../../components/ServiceForm'
import HomeCommunity from '../../components/HomeCommunity'
import { useRef } from 'react'

const Service = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // window.scrollTo({
    //   left: 0,
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // })
  };
  return (
    <MainLayout>
        <Servicebanner/>
        <ServiceChoice handleClick={handleClick} />
        <ServiceCare/>
        <ProductListService/>
        <HomeCommunity />
        <div className="Service_form" ref={ref}>
           <ServiceForm callback={handleClick}/>
        </div>
    </MainLayout>
  )
}

export default Service