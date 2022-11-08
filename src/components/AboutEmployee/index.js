import React from "react";
import "./AboutEmployee.css";

function AboutEmployee() {
    return (
        <section className="about-employee-container">
            <div className="about-employee-container-detail">
                <div className="about-employee-content-main">
                    <h2>NHÂN VIÊN TẠI PETCARE</h2>
                    <div className="about-employee-detail">
                        <div className="about-employee-info">
                            <img
                                src="/assets/images/about/hai_pic.jpg"
                                alt="Employee Avatar"
                            />
                            <p>Đặng Ngô Hồng Hải</p>
                            <span>Quản lý</span>
                        </div>
                        <div className="about-employee-info">
                            <img
                                src="/assets/images/about/giao_pic.jpg"
                                alt="Employee Avatar"
                            />
                            <p>Trần Ngọc Giao</p>
                            <span>Nhân viên</span>
                        </div>
                        <div className="about-employee-info">
                            <img
                                src="/assets/images/about/duyen_pic.png"
                                alt="Employee Avatar"
                            />
                            <p>Trương Mỹ Duyên</p>
                            <span>Nhân viên</span>
                        </div>
                        <div className="about-employee-info">
                            <img
                                src="/assets/images/about/chuong_pic.jpg"
                                alt="Employee Avatar"
                            />
                            <p>Trần Bình Chương</p>
                            <span>Nhân viên</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-employee-container-detail-second">
                <h2>Nhân viên tại PetCare</h2>
                <div className="about-employee-detail">
                    <div className="about-employee-info">
                        <img
                            src="/assets/images/about/hai_new.png"
                            alt="Employee Avatar"
                        />
                        <div className="about-employee-name">
                            <p>Đặng Ngô Hồng Hải</p>
                            <span>Quản lý</span>
                        </div>
                    </div>
                    <div className="about-employee-info">
                        <img
                            src="/assets/images/about/giao_new.png"
                            alt="Employee Avatar"
                        />
                        <div className="about-employee-name">
                            <p>Trần Ngọc Giao</p>
                            <span>Nhân viên</span>
                        </div>
                    </div>
                    <div className="about-employee-info">
                        <img
                            src="/assets/images/about/duyen_new.png"
                            alt="Employee Avatar"
                        />
                        <div className="about-employee-name">
                            <p>Trương Mỹ Duyên</p>
                            <span>Nhân viên</span>
                        </div>
                    </div>
                    <div className="about-employee-info">
                        <img
                            src="/assets/images/about/chuong_new.png"
                            alt="Employee Avatar"
                        />
                        <div className="about-employee-name">
                            <p>Trần Bình Chương</p>
                            <span>Nhân viên</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutEmployee;
