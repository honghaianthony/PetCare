import ServiceDashboard from "../../../components/Admin/ServiceDashboard";
import AdminLayout from "../../../layouts/AdminLayout";
import SEO from "../../../components/SEO";

function ManagerService() {
    return (
        <AdminLayout>
            <SEO
                title="Quản lý dịch vụ"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <ServiceDashboard />
        </AdminLayout>
    );
}
export default ManagerService;
