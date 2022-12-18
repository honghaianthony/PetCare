import MainLayout from "../../layouts/MainLayout";
import NotFound from "../../components/404";
import SEO from "../../components/SEO";

function Page404() {
    return (
        <MainLayout>
            <SEO
                title="404 Not Found"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <NotFound />
        </MainLayout>
    );
}

export default Page404;
