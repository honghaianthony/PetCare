import HistoryOrderDashboard from "../../../components/Admin/HistoryOrderDashboard";
import SellEmployeeLayout from "../../../layouts/SellEmployeeLayout";
import SEO from "../../../components/SEO";

function ManagerHistoryOrder() {
    return (
        <SellEmployeeLayout>
            <SEO
                title="Quản lý lịch sử đặt hàng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HistoryOrderDashboard />
        </SellEmployeeLayout>
    );
}
export default ManagerHistoryOrder;
