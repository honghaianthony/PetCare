import "./ProductForm.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ProductForm = ({ closeForm, addProduct }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  useEffect(() => {
    const x = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(x);
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addProduct(data);
    setShow(false);
    setTimeout(() => closeForm(), 500);
  };
  return (
    <div className="add-product-container">
      <div className="layer"></div>
      <div className={`add-product-form-container ${show ? "show" : ""}`}>
        <div className="heading">
          <h4 className="title">Thông tin sản phẩm</h4>
          <Icon
            icon="ci:close-big"
            onClick={() => {
              setShow(false);
              setTimeout(() => closeForm(), 500);
            }}
          />
        </div>
        <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="product-img">
            <label>Ảnh sản phẩm</label>
            {selectedFile && <img src={preview} alt="" />}
            <input
              type="file"
              onChange={onSelectFile}
              {...register("product_img")}
            />
          </div>
          <div className="product-name">
            <label>Tên sản phẩm</label>
            <input defaultValue="" {...register("product_name")} />
          </div>
          <div className="product-tag">
            <label>Danh mục</label>
            <input {...register("exampleRequired")} />
          </div>
          <div className="product-amount">
            <label>Số lượng</label>
            <input {...register("product_stock")} />
          </div>
          <div className="product-price">
            <label>Giá</label>
            <input {...register("product_price")} />
          </div>
          <div className="product-discount">
            <label>Giảm giá</label>
            <input {...register("exampleRequired")} />
          </div>
          <div className="product-depot">
            <label>Kho hàng</label>
            <input {...register("exampleRequired")} />
          </div>
          <div className="product-address">
            <label>Địa chỉ</label>
            <input {...register("exampleRequired")} />
          </div>
          <div className="product-description">
            <label>Mô tả</label>
            <textarea {...register("exampleRequired")} rows="8" />
          </div>
          <div className="product-instruction">
            <label>Hướng dẫn sử dụng</label>
            <textarea {...register("exampleRequired")} rows="8" />
          </div>

          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          {/* <input type="submit" /> */}
          <div className="button-group">
            <input type="submit" value="Thêm sản phẩm" />
            <input
              type="submit"
              value="Hủy"
              onClick={() => {
                setShow(false);
                setTimeout(() => closeForm(), 500);
              }}
              className="cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProductForm;
