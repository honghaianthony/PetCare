import "./EditUser.css";
import { useForm } from "react-hook-form";

const EditUser = ({ data, close }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  return (
    <div className="edit-user-container">
      <div className="layer"></div>
      <div className="edit-user-form-container">
        <div className="user-form-container">
          <h1 className="title">Thông tin người dùng</h1>
          <form
            className="user-form"
            onSubmit={handleSubmit((info) => {
              console.log("summited");
            })}
          >
            <div className="user-name">
              <label>Họ và tên người dùng</label>
              <input defaultValue="xxx" {...register("title")} />
            </div>
            <div className="user-tag">
              <label>Giới tính</label>
              <select
                defaultValue="Nam"
                {...register("example2", { required: true })}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="user-amount">
              <label>Tài khoản</label>
              <input
                defaultValue="123"
                {...register("example3", { required: true })}
              />
            </div>
            <div className="user-price">
              <label>Mật khẩu</label>
              <input {...register("origin_price", { required: true })} />
            </div>
            <div className="user-discount">
              <label>Số điện thoại</label>
              <input {...register("discount", { required: true })} />
            </div>
            <div className="user-depot">
              <label>Vai trò</label>
              <select
                defaultValue="User"
                {...register("examplen", { required: true })}
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="button-group">
              <input type="submit" value="Cập nhật thông tin" />
              <input
                type="submit"
                value="Hủy"
                className="cancel-edit"
                onClick={close}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
