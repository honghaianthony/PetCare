import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import "./BlogDetail.css";
import BlogContent from "../../components/BlogContent";
import AuthorBlog from "../../components/AuthorBlog";
import HighlightBlog from "../../components/HighlightBlog";
import BlogTrending from "../../components/BlogTrending";

function BlogDetail() {
    const blog = {
        blogId: "1",
        name: "Kinh nghiệm chăm sóc thú cưng cho người mới bắt đầu",
        author: "Anthony Hai",
        time: "21:28 28/09/2022",
        img: "/assets/images/blog/blog-image.png",
        authorImage: "/assets/images/about/hai_pic.jpg",
        content:
            "<p>Việc sở hữu thú cưng và được chăm sóc thú cưng là điều mà nhiều người mong muốn bởi chính các bé sẽ đem lại niềm vui và chia sẻ những nhọc nhằn trong cuộc sống hằng ngày.</p>\n<p>Tuy nhiên nhiều bạn trẻ đang còn bở ngỡ và lo lắng việc mình có thể chăm sóc thú cưng được hay không, đừng lo các bạn nhé, sau đây chúng tôi sẽ chỉ cho những người mới chăm sóc thú cưng những kinh nghiệm đảm bảo thành công ngay từ lần đầu tiên.\n  Lựa chọn giống nuôi phù hợp với điều kiện chăm sóc\nMôi giống chó hoặc mèo khác nhau sẽ đòi hỏi một cách chăm sóc khác nhau đòi hỏi chủ nuôi trước khi lựa chọn phải hiểu bản thân mình có điều kiện chăm sóc như thế nào.</p>\n<p>Điều kiện đó bao gồm thời gian, tiền bạc, không gian sống và nhu cầu của bản thân. Bởi vì có nhiều giống thú cưng đòi hỏi thức ăn rất cầu kỳ khiến chủ nuôi đầu tư 1 khoản kha khá và cả chi phí đi spa chăm sóc nữa, nên đối với những chủ nuôi không có điều kiện kinh tế hãy lựa chọn thú cưng dễ nuôi hơn.</p>\n <p>Chuẩn bị không gian sống cho thú cưng</p>\n<p>Để chăm sóc thú cưng được tốt sau khi đưa chúng về nhà, trước đó chủ nuôi cần chuẩn bị một không gian sống lý tưởng cho các bé. Lý tưởng ở đây tuỳ thuộc vào mỗi con vật, ví dụ như bạn đưa về một bé chuột Hamster thì phải chuẩn bị chuồng, còn với một chú mèo nhút nhát thì nên chuẩn bị trước một căn phòng riêng biệt cho bé trú ẩn ngày mới về nhà lạ lẫm.</p>\n<p>Đối với những chú chó thì dễ hơn nhưng vẫn nên đảm bảo đầy đủ các vật dụng cho thú cưng như khay ăn, khay nước uống, hộp vệ sinh,…</p>\n<p>Tìm hiểu về nhu cầu thức ăn của thú cưng</p>\n<p>Mỗi thú cưng cần có một chế độ chăm sóc thú cưng riêng do đó chủ nuôi cần phải tìm hiểu trước khi mang các bé về nhà. Hãy cố gắng hỏi chủ cũ về thực đơn của các bé và duy trì nó ít nhất là 1 tháng sau khi đưa về nhà rồi mới thay đổi dần dần sau đó. Đặc biệt là những chú mèo có hệ tiêu hóa kém việc thay đổi thức ăn đột ngột có thể bị tiêu chảy rất khó chữa.</p>\n Hãy cố gắng tìm hiểu trước khi quyết định mang chúng về nhà kể cả vấn đề kinh tế của bạn, vì có những thú cưng đòi hỏi nhu cầu thức ăn cao mà bạn không thể đáp ứng được.<p>Việc sở hữu thú cưng và được chăm sóc thú cưng là điều mà nhiều người mong muốn bởi chính các bé sẽ đem lại niềm vui và chia sẻ những nhọc nhằn trong cuộc sống hằng ngày.</p>\n<p>Tuy nhiên nhiều bạn trẻ đang còn bở ngỡ và lo lắng việc mình có thể chăm sóc thú cưng được hay không, đừng lo các bạn nhé, sau đây chúng tôi sẽ chỉ cho những người mới chăm sóc thú cưng những kinh nghiệm đảm bảo thành công ngay từ lần đầu tiên.\n  Lựa chọn giống nuôi phù hợp với điều kiện chăm sóc\nMôi giống chó hoặc mèo khác nhau sẽ đòi hỏi một cách chăm sóc khác nhau đòi hỏi chủ nuôi trước khi lựa chọn phải hiểu bản thân mình có điều kiện chăm sóc như thế nào.</p>\n<p>Điều kiện đó bao gồm thời gian, tiền bạc, không gian sống và nhu cầu của bản thân. Bởi vì có nhiều giống thú cưng đòi hỏi thức ăn rất cầu kỳ khiến chủ nuôi đầu tư 1 khoản kha khá và cả chi phí đi spa chăm sóc nữa, nên đối với những chủ nuôi không có điều kiện kinh tế hãy lựa chọn thú cưng dễ nuôi hơn.</p>\n <p>Chuẩn bị không gian sống cho thú cưng</p>\n<p>Để chăm sóc thú cưng được tốt sau khi đưa chúng về nhà, trước đó chủ nuôi cần chuẩn bị một không gian sống lý tưởng cho các bé. Lý tưởng ở đây tuỳ thuộc vào mỗi con vật, ví dụ như bạn đưa về một bé chuột Hamster thì phải chuẩn bị chuồng, còn với một chú mèo nhút nhát thì nên chuẩn bị trước một căn phòng riêng biệt cho bé trú ẩn ngày mới về nhà lạ lẫm.</p>\n<p>Đối với những chú chó thì dễ hơn nhưng vẫn nên đảm bảo đầy đủ các vật dụng cho thú cưng như khay ăn, khay nước uống, hộp vệ sinh,…</p>\n<p>Tìm hiểu về nhu cầu thức ăn của thú cưng</p>\n<p>Mỗi thú cưng cần có một chế độ chăm sóc thú cưng riêng do đó chủ nuôi cần phải tìm hiểu trước khi mang các bé về nhà. Hãy cố gắng hỏi chủ cũ về thực đơn của các bé và duy trì nó ít nhất là 1 tháng sau khi đưa về nhà rồi mới thay đổi dần dần sau đó. Đặc biệt là những chú mèo có hệ tiêu hóa kém việc thay đổi thức ăn đột ngột có thể bị tiêu chảy rất khó chữa.</p>\n Hãy cố gắng tìm hiểu trước khi quyết định mang chúng về nhà kể cả vấn đề kinh tế của bạn, vì có những thú cưng đòi hỏi nhu cầu thức ăn cao mà bạn không thể đáp ứng được.",
    };
    return (
        <MainLayout>
            <div className="blog-detail-container">
                <div className="blog-detail-container-detail">
                    <div className="blog-detail-link">
                        <p>
                            <Link to="/">Petcare</Link>
                            &nbsp; &#62; &nbsp;
                            <Link to="/">Sản phẩm</Link>
                            &nbsp; &#62; &nbsp;
                            <Link to="/">Thức ăn</Link>
                            &nbsp; &#62; &nbsp; {blog.name}
                        </p>
                    </div>
                    <div className="blog-detail-main">
                        <BlogContent
                            title={blog.name}
                            time={blog.time}
                            content={blog.content}
                            author={blog.author}
                        />
                        <div className="blog-detail-main-right">
                            <AuthorBlog
                                author={blog.author}
                                authorImage={blog.authorImage}
                            />
                            <HighlightBlog />
                        </div>
                    </div>
                    <div className="blog-detail-trending">
                        <BlogTrending />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default BlogDetail;
