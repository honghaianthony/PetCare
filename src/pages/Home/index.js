import HomeLayout from "../../layouts/HomeLayout";
import HomeBanner from "../../components/HomeBanner";
import HomeService from "../../components/HomeService";
import Introduction from "../../components/Introduction";

function Home() {
    return (
        <>
            <HomeLayout>
                <HomeBanner />
                <HomeService />
                <Introduction />
            </HomeLayout>
        </>
    );
}

export default Home;
