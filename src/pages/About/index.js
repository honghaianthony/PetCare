import MainLayout from "../../layouts/MainLayout";
import AboutBanner from "../../components/AboutBanner";
import AboutEmployee from "../../components/AboutEmployee";
import SEO from "../../components/SEO";

function About() {
    return (
        <MainLayout>
            <SEO
                title="Về chúng tôi"
                description="Nhân viên tại PetCare"
                name="PetCare"
                type="article"
            />
            <AboutBanner />
            <AboutEmployee />
        </MainLayout>
    );
}

export default About;
