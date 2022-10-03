import HomeLayout from "../../layouts/HomeLayout";
import HomeBanner from "../../components/HomeBanner";
import HomeService from "../../components/HomeService";
import Introduction from "../../components/Introduction";
import HomeReason from "../../components/HomeReason";
import HomeCommunity from "../../components/HomeCommunity";

function Home() {
    return (
        <>
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
