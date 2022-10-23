import MainLayout from "../../layouts/MainLayout";
import AboutBanner from "../../components/AboutBanner";
import AboutEmployee from "../../components/AboutEmployee";

function About() {
    return (
        <MainLayout>
            <AboutBanner />
            <AboutEmployee />
        </MainLayout>
    );
}

export default About;
