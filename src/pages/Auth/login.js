import AuthLayout from "../../layouts/AuthLayout";
import AuthLogin from "../../components/Auth/AuthLogin";
import SEO from "../../components/SEO";

function Login() {
    return (
        <AuthLayout>
            <SEO
                title="Đăng nhập"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <AuthLogin />
        </AuthLayout>
    );
}

export default Login;
