import React from 'react';
import Video1 from "@videos/home-page/slide-1.webp";
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
import DataSupportPage from "@query/support-page";
const SupportDetail = () => {
    const data = DataSupportPage();
    const posts = data.dataAgriculturalMaterialNorm.edges.splice(0, 3);
    return (
        <div className="news-page-body container-wrap">
            <div className="news-page-body-in-left">
                <div className="news-page-time"><span className="fs-16 fw-bold">Sliving</span> <span className="time-post">đăng vào lúc 24/05/2021 - 15:29</span></div>
                {/* <div dangerouslySetInnerHTML={{ __html: content.html }} /> */}
                <div className="news-page-content">
                    <div className="news-page-titles">
                        <span className="fw-bold fs-24">SMART MANAGEMENT - QUẢN LÝ THÔNG MINH</span>
                    </div>
                    <div className="news-page-title">
                        <span>Tích hợp đa hệ thống:</span>
                    </div>
                    <div className="news-page-description">
                        <span>
                            Cho phép tích hợp và trao đổi thông tin giữa nhiều hệ thống (CAD, GIS, CCTV, SCADA, EAM…),
                            giúp chia sẻ dữ liệu và đồng vận hành hệ thống một cách dễ dàng và nhanh chóng
                        </span>
                    </div>
                    <div className="news-page-title">
                        <span>Kết nối không giới hạn:</span>
                    </div>
                    <div className="news-page-description">
                        <span> SMART-MANAGEMENT tích hợp các lớp thông tin từ tất cả các định dạng dữ liệu hiện nay như dạng giấy, dạng text,
                            hình ảnh hay dữ liệu số dạng CAD hay GIS (vector và raster) nhằm cung cấp cái nhìn tổng quan đầy đủ với các thông tin chính xác,
                            phục vụ tốt quá trình phân tích và ra quyết định kịp thời.</span>
                    </div>
                    <div className="news-page-title">
                        <span>Đa nền tảng ứng dụng:</span>
                    </div>
                    <div className="news-page-description">
                        <span>
                            Nhờ khả năng chuyển đổi mạnh mẽ giữa nền tảng ứng dụng web và mobile,
                            SMART MANAGEMENT giúp dễ dàng chia sẻ và phân phối linh hoạt thông tin giữa các cấp quản lý,
                            phòng ban hay các sở ngành có liên quan, tạo khả năng tương tác, trao đổi,
                            cập nhật và thu thập thông tin 2 chiều giữa các đơn vị quản lý với nhau và với cộng đồng.
                            <br />
                            Giải pháp kiểm soát ra vào chính là việc xây dựng một hệ thống kiểm soát cửa.
                            Một hệ thống an ninh kiểm soát bằng điện tử hiện đại nhất hiện nay thông qua việc chứng thực bằng dấu vân tay, thẻ cảm ứng,
                            mật khẩu hoặc khuôn mặt… Được xây dựng với mục đích kiểm soát các lượt ra vào của từng người.
                            Đảm bảo phát huy tính năng bảo mật cao, giúp người dùng quản lý kiểm soát ra vào tại cửa dễ dàng và hiện đại hơn.
                        </span>
                    </div>
                    <div className="news-page-title">
                        <span>Kiểm soát ra vào thông minh:</span>
                    </div>
                    <div className="news-page-description">
                        <span>
                            Vấn đề an ninh và tự động hoá ngày càng được các doanh nghiệp coi trọng hơn.
                            Giải pháp kiểm soát ra vào thông minh bằng các thiết bị công nghệ là một giải pháp hiện đại, an toàn,
                            toàn diện phục vụ các mục đích như kiểm soát ra vào, giám sát kỷ luật giờ giấc, tự động hóa nghiệp vụ chấm công,
                            tính lương, và hơn hết là tạo dựng môi trường hiện đại – chuyên nghiệp đối với khách tham quan.
                        </span>
                    </div>
                    <div className="news-page-title">
                        <span>Dịch vụ khách:</span>
                    </div>
                    <div className="news-page-description">
                        <span>
                            <span>- Thiết Kế Mạch</span>
                            <span>- Lập Trình App</span>
                            <span> - Lắp Đặt & Vận Hành Thương Mại</span>
                        </span>
                    </div>
                </div>
                <div className="news-page-body-in-left-video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video1} type="video/webp" />
                    </video>
                </div>
            </div>
            <div className="news-page-body-in-right">
                <span className="news-page-body-in-right-title fs-32 fw-bold">News</span>
                {
                    posts.map((post) => {
                        return (
                            <div kry={post}> <CardHorizonal slug={post.node.frontmatter.slug} isVideo={post.node.isVideo}
                                imgUrl={post.node.frontmatter.featuredImage.childImageSharp.fluid.src} data={posts} /></div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default SupportDetail;
