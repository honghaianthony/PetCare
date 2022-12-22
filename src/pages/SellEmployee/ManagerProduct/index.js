import ProductDashBoard from "../../../components/Admin/ProductDashboard";
import SellEmployeeLayout from "../../../layouts/SellEmployeeLayout";
import SEO from "../../../components/SEO";

function ManagerUser() {
    return (
        <SellEmployeeLayout>
            <SEO
                title="Quản lý sản phẩm"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <ProductDashBoard />
        </SellEmployeeLayout>
    );
}
export default ManagerUser;
