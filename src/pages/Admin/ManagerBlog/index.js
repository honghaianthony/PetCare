import BlogDashboard from "../../../components/Admin/BlogDashboard";
import AdminLayout from "../../../layouts/AdminLayout";
import SEO from "../../../components/SEO";

function ManagerBlog() {
    return (
        <AdminLayout>
            <SEO
                title="Quản lý blog"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <BlogDashboard />
        </AdminLayout>
    );
}
export default ManagerBlog;
