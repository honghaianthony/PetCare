import "./ProductForm.css";
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="product-form-container">
      <h1 className="title">Thông tin sản phẩm</h1>
      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="product-name">
          <label>Tên sản phẩm</label>
          <input defaultValue="test" {...register("example")} />
        </div>
        <div className="product-tag">
          <label>Danh mục</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-amount">
          <label>Số lượng</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-price">
          <label>Đơn giá</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-discount">
          <label>Giảm giá</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-depot">
          <label>Kho hàng</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-address">
          <label>Địa chỉ</label>
          <input {...register("exampleRequired", { required: true })} />
        </div>
        <div className="product-description">
          <label>Mô tả</label>
          <textarea
            {...register("exampleRequired", { required: true })}
            rows="8"
          />
        </div>
        <div className="product-instruction">
          <label>Hướng dẫn sử dụng</label>
          <textarea
            {...register("exampleRequired", { required: true })}
            rows="8"
          />
        </div>

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        {/* <input type="submit" /> */}
        <div className="button-group">
          <input type="submit" value="Thêm sản phẩm" />
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
