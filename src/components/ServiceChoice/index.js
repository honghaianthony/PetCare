import React from 'react'
import "./ServiceChoice.css"
import { Icon } from '@iconify/react';
import "@fontsource/nunito"
const ServiceChoice = () => {
  return (
    <section className='service__choice__container'>
        <div className="service__choice__container__detail">
          <h3 className="text__header__choice">
               3 ĐIỀU KHIẾN CHO PETCARE TRỞ THÀNH LỰA CHỌN HÀNG ĐẦU CỦA BẠN:
          </h3>
          <div className="underline__service__choice"></div>
          <div className="service_choice_content_container">
            <div className="service_choice_content">
                 <Icon icon="ant-design:check-circle-twotone" color="white" className="icon__service"/>
                 <p className='text__choice__service'> 
                     LUÔN ĐẶT YÊU CẦU KHÁCH HÀNG Ở VỊ TRÍ CAO NHẤT
                 </p>
            </div>
            <div className="service_choice_content">
                   <Icon icon="icon-park-outline:good-two" color="white" className="icon__service"/>
                 <p className='text__choice__service'>
                 CHẤT LƯỢNG HÀNG ĐẦU TRONG THỊ TRƯỜNG
                 </p>
            </div>
            <div className="service_choice_content">
                   <Icon icon="dashicons:money-alt" color="white" className="icon__service"/>
                 <p className='text__choice__service'>
                 GIÁ THÀNH DỊCH VỤ Ở MỨC TỐT NHẤT
                 </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ServiceChoice