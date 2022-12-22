import ProductDashBoard from "../../../components/Admin/ProductDashboard";
import CashierEmployeeLayout from "../../../layouts/CashierLayout";
import SEO from "../../../components/SEO";

function ManagerUser() {
    return (
        <CashierEmployeeLayout>
            <SEO
                title="Quản lý sản phẩm"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <ProductDashBoard />
        </CashierEmployeeLayout>
    );
}
export default ManagerUser;
