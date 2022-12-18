import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Icon } from "@iconify/react";
import "./Policy.css";
import SEO from "../../components/SEO";

function Policy() {
    return (
        <MainLayout>
            <SEO
                title="Điều khoản & Chính sách"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <div className="Policy">
                <div className="Policy-Banner">
                    <img
                        src="https://i.postimg.cc/gc943F91/Banner-Policy1.png"
                        alt="banner"
                        className="Policy-Banner-A"
                    />
                    <img
                        src="https://i.postimg.cc/JrNqzyyv/Banner-Policy2.png"
                        alt="banner"
                        className="Policy-Banner-B"
                    />
                </div>
                <div className="Policy-Content">
                    <div className="Policy-Content-Container">
                        <h2>Chính sách thành viên thân thiết</h2>
                        <hr />
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Mỗi người dùng đăng ký tài khoản trên website
                                PetCare đều là thành viên của PetCare.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Với những người dùng đã sử dụng dịch vụ hoặc mua
                                sản phẩm có tổng hóa đơn trên 1 triệu vnđ sẽ trở
                                thành thành viên thân thiết của PetCare.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Thành viên thân thiết của PetCare được xếp vào 3
                                hạng theo thứ tự tăng dần là bạc, vàng, kim
                                cương. Mỗi một mức hạng sẽ có những ưu đãi riêng
                                cho người dùng.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Các ưu đãi khi trở thành thành viên thân thiết
                                của PetCare:
                            </span>
                        </p>
                        <ol>
                            <li>
                                Thành viên thân thiết được tích lũy điểm xếp
                                hạng khi sử dụng dịch vụ hoặc mua sản phẩm trên
                                website và trực tiếp tại cửa hàng.
                            </li>
                            <li>
                                Được nhận các ưu đãi đặc biệt tại các chương
                                trình được tổ chức hằng tháng ở cửa hàng.
                            </li>
                            <li>
                                Đối với thành viên hạng bạc: với mỗi hóa đơn
                                trên 1 triệu vnđ khách hàng sẽ nhận được voucher
                                giảm giá 5% cho hóa đơn tiếp theo. Để được lên
                                hạng bạc khách hàng cần tích lũy tối thiểu 5 lần
                                sử dụng dịch vụ hoặc mua sản phẩm tại PetCare và
                                tổng hóa đơn ít nhất là 3 triệu vnđ.
                            </li>
                            <li>
                                Đối với thành viên hạng vàng: với mỗi hóa đơn
                                trên 1 triệu vnđ khách hàng sẽ nhận được voucher
                                giảm giá 10% cho hóa đơn tiếp theo. Để được lên
                                hạng vàng khách hàng cần tích lũy tối thiểu 10
                                lần sử dụng dịch vụ hoặc mua sản phẩm tại
                                PetCare và tổng hóa đơn ít nhất là 10 triệu vnđ.
                            </li>
                            <li>
                                Đối với thành viên hạng kim cương: với mỗi hóa
                                đơn trên 1 triệu vnđ khách hàng sẽ nhận được
                                voucher giảm giá 15% cho hóa đơn tiếp theo. Đồng
                                thời khi sử dụng 5 lần dịch vụ hoặc 5 lần mua
                                sản phẩm, khách hàng sẽ được miễn phí sử dụng
                                một dịch vụ cho lần tiếp theo Để được lên hạng
                                vàng khách hàng cần tích lũy tối thiểu 20 lần sử
                                dụng dịch vụ hoặc mua sản phẩm tại PetCare và
                                tổng hóa đơn ít nhất là 20 triệu vnđ.
                            </li>
                        </ol>
                    </div>
                    <div className="Policy-Content-Container">
                        <h2>Chính sách thanh toán, đổi trả</h2>
                        <hr />
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Với khách hàng mua sản phẩm của PetCare tại
                                website, chúng tôi chỉ chấp nhận hình thức thanh
                                toán bằng tiền mặt ngay khi nhận hàng. Chúng tôi
                                sẽ cố gắng cải thiện điều này để phục vụ tốt
                                hơn.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Với những khách hàng mua sản phẩm cũng như sử
                                dụng dịch vụ tại cửa hàng, chúng tôi chấp nhận
                                hình thức thanh toán bằng tiền mặt, chuyển khoản
                                ngân hàng hoặc thanh toán bằng ví điện tử (momo,
                                zalopay,...). PetCare chỉ chấp nhận trường hợp
                                đổi trả hàng khi sản phẩm đã hết hạn so với ngày
                                mua trên hóa đơn.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Với những sản phẩm được khách hàng đánh giá về
                                chất lượng là không đúng, chúng tôi sẽ dựa vào
                                sự thẩm định của chuyên gia để xem xét từng
                                trường hợp. Nếu sản phẩm của chúng tôi thực sự
                                kém chất lượng, chúng tôi sẽ xin lỗi khách hàng
                                một cách chân thành nhất, chấp nhận đổi trả hàng
                                cũng như đền bù thiệt hại đã gây ra cho khách
                                hàng.
                            </span>
                        </p>
                    </div>
                    <div className="Policy-Content-Container">
                        <h2>Chính sách bảo vệ thông tin người dùng</h2>
                        <hr />
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                PetCare sẽ thu thập các thông tin của quý khách
                                thông qua các quá trình quý khách tương tác với
                                các kênh truyền thông tiếp thị như website, mạng
                                xã hội, thư hoặc cuộc gọi đóng góp ý kiến…
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Chúng tôi xin cam kết với khách hàng, toàn bộ
                                thông tin được quý khách cung cấp chỉ được sử
                                dụng với các mục đích: cung cấp thông tin quảng
                                bá, khuyến mãi, xác nhận các đơn hàng, lịch sử
                                dụng dịch vụ của khách hàng.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Thông tin khách hàng sẽ được lưu trữ trong hệ
                                thống quản lý một cách an toàn và bảo mật toàn
                                bộ thông tin bằng các công cụ và giải pháp bảo
                                mật tốt nhất.
                            </span>
                        </p>
                        <p>
                            <Icon icon="icons8:cat-footprint" />{" "}
                            <span>
                                Trong trường hợp khách hàng có ý kiến đóng góp,
                                khiếu nại liên quan vấn đề thông tin cá nhân
                                hoặc bất kỳ khiếu nại khác về sản phẩm cũng như
                                dịch vụ của PetCare, quý khách hàng vui lòng
                                liên hệ đường dây chăm sóc khách hàng của chúng
                                tôi: 1969.69.69.69
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Policy;
