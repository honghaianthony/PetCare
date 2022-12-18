import HomeLayout from "../../layouts/HomeLayout";
import HomeBanner from "../../components/HomeBanner";
import HomeService from "../../components/HomeService";
import Introduction from "../../components/Introduction";
import HomeReason from "../../components/HomeReason";
import HomeCommunity from "../../components/HomeCommunity";
import SEO from "../../components/SEO";

function Home() {
    return (
        <>
            <SEO
                title="PetCare"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <HomeLayout>
                <HomeBanner />
                <HomeService />
                <Introduction />
                <HomeReason />
                <HomeCommunity />
            </HomeLayout>
        </>
    );
}

export default Home;
