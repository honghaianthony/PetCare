import AuthLayout from "../../layouts/AuthLayout";
import AuthRegister from "../../components/Auth/AuthRegister";
import SEO from "../../components/SEO";

function Register() {
    return (
        <AuthLayout>
            <SEO
                title="Đăng ký"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <AuthRegister />
        </AuthLayout>
    );
}

export default Register;
