import UserDashboard from "../../../components/Admin/UserDashboard";
import AdminLayout from "../../../layouts/AdminLayout";
import SEO from "../../../components/SEO";

function ManagerUser() {
    return (
        <AdminLayout>
            <SEO
                title="Quản lý người dùng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <UserDashboard />
        </AdminLayout>
    );
}
export default ManagerUser;
