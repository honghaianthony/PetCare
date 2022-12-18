import HistoryOrderDashboard from "../../../components/Admin/HistoryOrderDashboard";
import AdminLayout from "../../../layouts/AdminLayout";
import SEO from "../../../components/SEO";

function ManagerHistoryOrder() {
    return (
        <AdminLayout>
            <SEO
                title="Quản lý lịch sử đặt hàng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HistoryOrderDashboard />
        </AdminLayout>
    );
}
export default ManagerHistoryOrder;
