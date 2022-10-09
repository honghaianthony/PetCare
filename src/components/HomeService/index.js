import React, { useEffect } from "react";
import "./HomeService.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeService() {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();

    
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <section className="home-service-container">
            <motion.div
                className="home-service-container-detail"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
                <div className="home-service-main">
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/grooming.jpg"
                            alt="Cắt tỉa lông thú cưng"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Cắt tỉa lông thú cưng</h6>
                            <p>
                                Dịch vụ cắt tỉa gọn lông thú cưng được thực hiện
                                trực tiếp
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/healthcare.jpg"
                            alt="Chăm sóc sức khỏe thú cưng"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Chăm sóc sức khỏe thú cưng</h6>
                            <p>
                                Dịch vụ chăm sóc sức khỏe được thực hiện bởi
                                những nhân viên có kinh nghiệm
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/daycare.jpg"
                            alt="Thức ăn dinh dưỡng"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Thức ăn dinh dưỡng</h6>
                            <p>
                                Dịch vụ cắt tỉa gọn lông thú cưng được thực hiện
                                trực tiếp
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/training.jpg"
                            alt="Huấn luyện"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Huấn luyện</h6>
                            <p>
                                Các nhà huấn luyện chúng tôi sẽ giúp thú cưng
                                của bạn ngoan ngoãn hơn
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/hyginic.jpeg"
                            alt="Tắm rửa"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Tắm rửa</h6>
                            <p>
                                Thú cưng của bạn sẽ được tắm rửa sạch sẽ khi đến
                                với PetCare
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                    <div className="home-service-overlay">
                        <img
                            src="/assets/images/home/vaccine.jpg"
                            alt="Chích ngừa"
                        />
                        <div className="home-service-overlay-content">
                            <h6>Chích ngừa</h6>
                            <p>
                                Thú cưng sẽ được thông báo tiêm vaccine để có
                                sức khỏe tốt nhất
                            </p>
                        </div>

                        <div className="overlay"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default HomeService;
