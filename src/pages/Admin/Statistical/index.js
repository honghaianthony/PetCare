import AdminLayout from "../../../layouts/AdminLayout";
import Statistic from "../../../components/Statistic";
import SEO from "../../../components/SEO";

function Statistical() {
    return (
        <AdminLayout>
            <SEO
                title="Thống kê"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <Statistic />
        </AdminLayout>
    );
}
export default Statistical;
