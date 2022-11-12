import React from 'react'
import "./ServiceBanner.css"
import "@fontsource/nunito"
const Servicebanner = () => {
    return (
        <>
            <section className='service__banner_container'>
                <div className="service__banner_container_detail">
                    <h1>
                        Dịch Vụ
                    </h1>
                    <h1>
                        Của Chúng Tôi
                    </h1>
                </div>
            </section>
            <section className='service__banner_container_second'>
                <div className="service__banner_container_detail_second">
                    <div className='service__banner_container_detail_second_left'>
                        <div className="service__banner_container_detail_second_left_top">
                            <h1>Pet Care</h1>
                        </div>
                        <div className="service__banner_container_detail_second_left_middle">
                            {/* <div className="service__banner_container_detail_second_left_middle_imgcontainer"> */}
                                 <img src="/assets/images/Service/—Pngtree—paw icon_3581506.png" className='service__banner_container_detail_second_left_middle_img' alt="service_banner_desc" />
                            {/* </div> */}
                            <h2>Dịch vụ chăm sóc thú cưng toàn diện</h2>
                        </div>
                        <div className="service__banner_container_detail_second_left_bottom">
                            <button className='service__banner_container_detail_second_left_bottom_button'>Tìm hiểu thêm</button>
                        </div>
                    </div>
                    <div className="service__banner_container_detail_second_right">
                        <img src="/assets/images/Service/—Pngtree—stack of puppies_5410304.png" alt="service__banner_container_detail_second_right" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicebanner