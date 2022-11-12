import "./EditProduct.css";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const EditProduct = ({ data, closeForm, updateData }) => {
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
  const onSubmit = (product_info) => {
    updateData(product_info);
    setShow(false);
    setTimeout(() => closeForm(), 500);
  };

  return (
    <div className="edit-product-container">
      <div className="layer"></div>
      <div className={`edit-product-form-container ${show ? "show" : ""}`}>
        <div className="product-form-container">
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
              <input type="file" onChange={onSelectFile} />
            </div>
            <div className="product-name">
              <label>Tên sản phẩm</label>
              <input
                defaultValue={data.product_name}
                {...register("product_name")}
              />
            </div>
            <div className="product-tag">
              <label>Danh mục</label>
              <input defaultValue="Thức ăn" {...register("example2")} />
            </div>
            <div className="product-amount">
              <label>Số lượng</label>
              <input
                defaultValue={data.product_stock}
                {...register("product_stock")}
              />
            </div>
            <div className="product-price">
              <label>Giá</label>
              <input
                defaultValue={data.product_price}
                {...register("product_price")}
              />
            </div>
            <div className="product-discount">
              <label>Giảm giá</label>
              <input defaultValue={data.discount} {...register("discount")} />
            </div>
            <div className="product-depot">
              <label>Kho hàng</label>
              <input
                defaultValue={data.title || ""}
                {...register("example6")}
              />
            </div>
            <div className="product-address">
              <label>Địa chỉ</label>
              <input
                defaultValue={data.title || ""}
                {...register("example7")}
              />
            </div>
            <div className="product-description">
              <label>Mô tả</label>
              <textarea
                defaultValue={data.title || ""}
                {...register("example8")}
                rows="8"
              />
            </div>
            <div className="product-instruction">
              <label>Hướng dẫn sử dụng</label>
              <textarea
                defaultValue={data.title || ""}
                {...register("example9")}
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
                onClick={closeForm}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
