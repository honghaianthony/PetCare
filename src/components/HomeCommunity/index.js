import React, { useEffect } from "react";
import "./HomeCommunity.css";

import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeCommunity() {
  const boxVariant = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("open");
    } else {
      control.start("closed");
    }
  }, [control, inView]);
  return (
    <section className="home-community-container">
      <div className="home-community-container-detail">
        <div className="home-community-title">
          <h2>THAM GIA CỘNG ĐỒNG KHÁCH HÀNG</h2>
          <h5>Những đánh giá của khách hàng đối với PetCare</h5>
        </div>
        <div className="home-community-comment-container">
          <motion.div
            className="home-community-comment-slider"
            ref={ref}
            variants={boxVariant}
            animate={control}
            initial="closed"
          >
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/hai_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Dang Ngo Hong Hai
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @anthony.haidang
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Rất hài lòng khi đến với PetCare, ở đây mình được tận
                        thấy quy trình chăm sóc thú cưng ở đây.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/giao_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Ngoc Giao
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @hishirokaiyashi
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Thú cưng của mình đã có một trải nghiệm cực kỳ tốt ở
                        đây. Từ việc cho ăn đến tắm rửa đều được làm một cách
                        chu đáo, sạch sẽ. Chắc chắn mình sẽ quay lại
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/duyen_ava.png"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Truong My Duyen
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @duyentm
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Việc huấn luyện ở PetCare là vô cùng tốt. Những trò chơi
                        như bắt dĩa hay bắt bóng tennis đều được PetCare chỉ dạy
                        một cách chu đáo và tận tình. Bên cạnh đó việc cắt tỉa
                        lông thú cưng cũng là điều mình ưng ý ở đây. Sau khi cắt
                        xong thú cưng của mình trông rất sạch sẽ và gọn gàng ^^
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/chuong_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Binh Chuong
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @else.vn
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Mình cực kì vui khi thú cưng nhà mình được tiêm vaccine
                        đầy đủ theo chỉ định của bác sĩ thú y. Thật sự rất cảm
                        ơn PetCare vì dịch vụ này!
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/hai_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Dang Ngo Hong Hai
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @anthony.haidang
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Rất hài lòng khi đến với PetCare, ở đây mình được tận
                        thấy quy trình chăm sóc thú cưng ở đây.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/giao_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Ngoc Giao
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @hishirokaiyashi
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Thú cưng của mình đã có một trải nghiệm cực kỳ tốt ở
                        đây. Từ việc cho ăn đến tắm rửa đều được làm một cách
                        chu đáo, sạch sẽ. Chắc chắn mình sẽ quay lại
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/duyen_ava.png"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Truong My Duyen
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @duyentm
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Việc huấn luyện ở PetCare là vô cùng tốt. Những trò chơi
                        như bắt dĩa hay bắt bóng tennis đều được PetCare chỉ dạy
                        một cách chu đáo và tận tình. Bên cạnh đó việc cắt tỉa
                        lông thú cưng cũng là điều mình ưng ý ở đây. Sau khi cắt
                        xong thú cưng của mình trông rất sạch sẽ và gọn gàng ^^
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/chuong_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Binh Chuong
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @else.vn
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Mình cực kì vui khi thú cưng nhà mình được tiêm vaccine
                        đầy đủ theo chỉ định của bác sĩ thú y. Thật sự rất cảm
                        ơn PetCare vì dịch vụ này!
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
      <div className="home-community-container-detail-second">
        <div className="home-community-title-second">
          <h4>Cộng đồng khách hàng</h4>
          <hr />
        </div>
        <div className="home-community-comment-container">
          <div className="home-community-comment-slider">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/hai_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Dang Ngo Hong Hai
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @anthony.haidang
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Rất hài lòng khi đến với PetCare, ở đây mình được tận
                        thấy quy trình chăm sóc thú cưng ở đây.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/giao_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Ngoc Giao
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @hishirokaiyashi
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Thú cưng của mình đã có một trải nghiệm cực kỳ tốt ở
                        đây. Từ việc cho ăn đến tắm rửa đều được làm một cách
                        chu đáo, sạch sẽ. Chắc chắn mình sẽ quay lại
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/duyen_ava.png"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Truong My Duyen
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @duyentm
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Việc huấn luyện ở PetCare là vô cùng tốt. Những trò chơi
                        như bắt dĩa hay bắt bóng tennis đều được PetCare chỉ dạy
                        một cách chu đáo và tận tình. Bên cạnh đó việc cắt tỉa
                        lông thú cưng cũng là điều mình ưng ý ở đây. Sau khi cắt
                        xong thú cưng của mình trông rất sạch sẽ và gọn gàng ^^
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/chuong_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Binh Chuong
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @else.vn
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Mình cực kì vui khi thú cưng nhà mình được tiêm vaccine
                        đầy đủ theo chỉ định của bác sĩ thú y. Thật sự rất cảm
                        ơn PetCare vì dịch vụ này!
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/hai_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Dang Ngo Hong Hai
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @anthony.haidang
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Rất hài lòng khi đến với PetCare, ở đây mình được tận
                        thấy quy trình chăm sóc thú cưng ở đây.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/giao_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Ngoc Giao
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @hishirokaiyashi
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Thú cưng của mình đã có một trải nghiệm cực kỳ tốt ở
                        đây. Từ việc cho ăn đến tắm rửa đều được làm một cách
                        chu đáo, sạch sẽ. Chắc chắn mình sẽ quay lại
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space ">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/duyen_ava.png"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Truong My Duyen
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @duyentm
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Việc huấn luyện ở PetCare là vô cùng tốt. Những trò chơi
                        như bắt dĩa hay bắt bóng tennis đều được PetCare chỉ dạy
                        một cách chu đáo và tận tình. Bên cạnh đó việc cắt tỉa
                        lông thú cưng cũng là điều mình ưng ý ở đây. Sau khi cắt
                        xong thú cưng của mình trông rất sạch sẽ và gọn gàng ^^
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-community-slide-space">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <div className="home-community-slide-box">
                      <div className="home-community-slide-info">
                        <div className="home-community-slide-avatar">
                          <div className="home-community-slide-round">
                            <img
                              src="/assets/images/home/chuong_ava.jpg"
                              alt="Review Avatar"
                            />
                          </div>
                          <div className="home-community-slide-name">
                            <p className="home-community-slide-name-detail">
                              Tran Binh Chuong
                            </p>
                            <p className="home-community-slide-name-detail-link">
                              @else.vn
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="home-community-content">
                        Mình cực kì vui khi thú cưng nhà mình được tiêm vaccine
                        đầy đủ theo chỉ định của bác sĩ thú y. Thật sự rất cảm
                        ơn PetCare vì dịch vụ này!
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCommunity;
