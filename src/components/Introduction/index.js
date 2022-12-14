import React, { useEffect } from "react";
import "./Introduction.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Collapse, Text } from "@nextui-org/react";

function Introduction() {
    const boxLeftVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: -100 },
    };

    const boxRightVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: 200 },
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
    var imageIndex = 0;
    ImageSlider();

    function ImageSlider() {
        var introInfo = document.getElementsByClassName("intro-active");
        var imageEvent = document.getElementsByClassName("image-active");
        var contentActivity = document.getElementsByClassName("content-active");

        var i;

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[i].style.display = "none";
            contentActivity[i].style.display = "none";
        }

        imageIndex++;
        if (imageIndex > imageEvent.length) {
            imageIndex = 1;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[i].className = introInfo[i].className.replace(
                " active-intro",
                ""
            );
        }

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[imageIndex - 1].style.display = "block";
            contentActivity[imageIndex - 1].style.display = "block";
            break;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[imageIndex - 1].className += " active-intro";
            break;
        }

        setTimeout(ImageSlider, 2000);
    }
    return (
        <section className="introduction-container">
            <div className="introduction-container-detail">
                <div className="introduction-main">
                    <motion.div
                        className="introduction-left"
                        ref={ref}
                        variants={boxLeftVariant}
                        initial="hidden"
                        animate={control}
                    >
                        <h2>Gi???i thi???u v??? PetCare</h2>
                        <p>
                            PetCare l?? m???t d???ch v??? chuy??n v??? th?? c??ng. M???i kh??
                            kh??n c???a b???n ?????i v???i th?? c??ng s??? ????p ???ng m???t c??ch
                            ?????y ????? t???i PetCare
                        </p>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>S???n ph???m ??a d???ng</h4>
                            <p className="content-active">
                                Th???c ??n d??nh cho th?? c??ng lu??n c?? ??? ch??ng t??i
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Nh??n vi??n nhi???t t??nh</h4>
                            <p className="content-active">
                                Nh??n vi??n t???i PetCare ?????ng h??nh c??ng kh??ch h??ng
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>B??i vi???t ?????y ?????</h4>
                            <p className="content-active">
                                B??i vi???t v??? PetCare lu??n ???????c c???p nh???t li??n t???c
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="introduction-right"
                        ref={ref}
                        variants={boxRightVariant}
                        initial="hidden"
                        animate={control}
                    >
                        <img
                            src="/assets/images/home/Vector.png"
                            alt="Vector"
                        />
                        <div className="introduction-right-image">
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="introduction-main-second">
                    <div className="introduction-main-title-second">
                        <h4>Gi???i thi???u</h4>
                        <hr />
                    </div>
                    <div className="introduction-main-detail-second">
                        <div className="introduction-main-left-second">
                            <div className="introduction-main-content-second">
                                <p>
                                    PetCare l?? m???t d???ch v??? chuy??n v??? th?? c??ng.
                                    M???i kh?? kh??n c???a b???n ?????i v???i th?? c??ng s??? ????p
                                    ???ng m???t c??ch ?????y ????? t???i PetCare
                                </p>
                            </div>
                            <div className="introduction-main-content-collapse">
                                <Collapse.Group>
                                    <Collapse title="S???n ph???m ??a d???ng">
                                        <Text>
                                            Th???c ??n c???a th?? c??ng lu??n c?? ??? ch??ng
                                            t??i
                                        </Text>
                                    </Collapse>
                                    <Collapse title="Nh??n vi??n nhi???t t??nh">
                                        <Text>
                                            Nh??n vi??n t???i PetCare ?????ng h??nh c??ng
                                            kh??ch h??ng
                                        </Text>
                                    </Collapse>
                                    <Collapse title="B??i vi???t ?????y ?????">
                                        <Text>
                                            B??i vi???t v??? PetCare lu??n ???????c c???p
                                            nh???t li??n t???c
                                        </Text>
                                    </Collapse>
                                </Collapse.Group>
                            </div>
                        </div>
                        <div className="introduction-main-content-right">
                            <img
                                src="/assets/images/home/intro-pet.png"
                                alt="Gi???i thi???u"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Introduction;
