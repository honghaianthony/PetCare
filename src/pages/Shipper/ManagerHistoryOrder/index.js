import HistoryOrderDashboard from "../../../components/Admin/HistoryOrderDashboard";
import ShipperLayout from "../../../layouts/ShipperLayout";
import SEO from "../../../components/SEO";

function ManagerHistoryOrder() {
    return (
        <ShipperLayout>
            <SEO
                title="Quản lý lịch sử đặt hàng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HistoryOrderDashboard />
        </ShipperLayout>
    );
}
export default ManagerHistoryOrder;
