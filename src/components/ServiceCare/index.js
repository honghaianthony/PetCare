import React from 'react'
import './ServiceCare.css'
const ServiceCare = () => {
    return (
        <section className='Service__Care__container'>
            <div className="Service__Care__container__detail">
                <div className="Service__Care__container__left">
                    <h3 className='Service__Care__content__text'>
                        Pet cưng của bạn sẽ được chăm sóc như thế nào ở PetCare?
                    </h3>
                    <div className="underline__service__care"></div>
                    <p>
                        Cùng với đội ngũ nhân viên chuyên nghiệp và được đào tạo chăm sóc thú cưng trong nước và ngoài nước. Với những kĩ năng và kiến thức chúng tôi đang có, chúng tôi đảm bảo có thể đáp ứng toàn bộ những yêu cầu của bạn về nhu cầu làm đẹp dành cho thú cưng của mình.
                        Ngoài ra, nhân viên của chúng tôi đã được trang bị một khóa thấu hiểu cảm xúc của loài vật. Chúng tôi đảm bảo sẽ cung cấp dịch vụ chăm sóc chuyên nghiệp và hiệu quả nhất.
                    </p>
                </div>
                <div className="Service__Care__container__right">
                    <img
                        src="/assets/images/Service/Care_service.jpg"
                        alt="Care_service"
                        className='Care_service'
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceCare