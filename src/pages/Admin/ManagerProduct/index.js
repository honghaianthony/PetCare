import ProductDashBoard from "../../../components/Admin/ProductDashboard";
import AdminLayout from "../../../layouts/AdminLayout";
import SEO from "../../../components/SEO";

function ManagerUser() {
    return (
        <AdminLayout>
            <SEO
                title="Quản lý sản phẩm"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <ProductDashBoard />
        </AdminLayout>
    );
}
export default ManagerUser;
