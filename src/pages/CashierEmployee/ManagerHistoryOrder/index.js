import HistoryOrderDashboard from "../../../components/Admin/HistoryOrderDashboard";
import CashierEmployeeLayout from "../../../layouts/CashierLayout";
import SEO from "../../../components/SEO";

function ManagerHistoryOrder() {
    return (
        <CashierEmployeeLayout>
            <SEO
                title="Quản lý lịch sử đặt hàng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HistoryOrderDashboard />
        </CashierEmployeeLayout>
    );
}
export default ManagerHistoryOrder;
