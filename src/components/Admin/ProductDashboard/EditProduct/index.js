import "./EditProduct.css";
import { useForm } from "react-hook-form";

const EditProduct = ({ data, close, changeData }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (product_info) => {
    changeData({ id: data.id, ...product_info });
    close();
  };

  return (
    <div className="edit-product-container">
      <div className="layer"></div>
      <div className="edit-product-form-container">
        <div className="product-form-container">
          <h1 className="title">Thông tin sản phẩm</h1>
          <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="product-name">
              <label>Tên sản phẩm</label>
              <input defaultValue={data.title} {...register("title")} />
            </div>
            <div className="product-tag">
              <label>Danh mục</label>
              <input
                defaultValue="123"
                {...register("example2", { required: true })}
              />
            </div>
            <div className="product-amount">
              <label>Số lượng</label>
              <input
                defaultValue="123"
                {...register("example3", { required: true })}
              />
            </div>
            <div className="product-price">
              <label>Đơn giá</label>
              <input
                defaultValue={data.origin_price}
                {...register("origin_price", { required: true })}
              />
            </div>
            <div className="product-discount">
              <label>Giảm giá</label>
              <input
                defaultValue={data.discount}
                {...register("discount", { required: true })}
              />
            </div>
            <div className="product-depot">
              <label>Kho hàng</label>
              <input
                defaultValue="123"
                {...register("example6", { required: true })}
              />
            </div>
            <div className="product-address">
              <label>Địa chỉ</label>
              <input
                defaultValue="123"
                {...register("example7", { required: true })}
              />
            </div>
            <div className="product-description">
              <label>Mô tả</label>
              <textarea
                defaultValue="123"
                {...register("example8", { required: true })}
                rows="8"
              />
            </div>
            <div className="product-instruction">
              <label>Hướng dẫn sử dụng</label>
              <textarea
                defaultValue="123"
                {...register("example9", { required: true })}
                rows="8"
              />
            </div>

            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            {/* <input type="submit" /> */}
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

export default EditProduct;
