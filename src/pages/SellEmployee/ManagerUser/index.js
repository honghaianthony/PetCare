import CustomerDashboard from "../CustomerDashboard";
import SellEmployeeLayout from "../../../layouts/SellEmployeeLayout";
import SEO from "../../../components/SEO";

function ManagerUser() {
    return (
        <SellEmployeeLayout>
            <SEO
                title="Quản lý người dùng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <CustomerDashboard />
        </SellEmployeeLayout>
    );
}
export default ManagerUser;
