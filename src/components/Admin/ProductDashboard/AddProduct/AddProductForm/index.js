import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { uploadFile, deleteFile } from "../../../../../firebase/util";
import { Icon } from "@iconify/react";
import {
  createProduct,
  createProductDetail,
  getAllCategories,
} from "../../../../../apis/productApi";

export default function AddProductForm({ onClose, submitSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await getAllCategories();
      setDataCategory(res);
    }
    fetchCategories();
  }, []);
  useEffect(() => {
    if (selectedFile !== null)
      uploadFile(
        selectedFile,
        () => {},
        (url) => setUrl(url)
      );
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    async function addProduct() {
      const resAddProduct = await createProduct({
        ...data,
        img: url,
        categoryId: data.category,
        numOfProductsSold: 0,
        rate: 0,
      });
      const resAddProductDetaile = await createProductDetail({
        ...data,
        productId: resAddProduct.product._id,
        categoryId: data.category,
        numOfRate: 0,
        numOfProductsLove: 0,
        numOfProductsSold: 0,
      });
      submitSuccess();
      onClose();
    }
    addProduct();
  };
  return (
    <div className="add-product-container">
      <div className="layer"></div>
      <div className={`add-product-form-container`}>
        <div className="heading">
          <h4 className="title">Thông tin sản phẩm</h4>
          <Icon
            icon="ci:close-big"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="product-img">
            <label>Ảnh sản phẩm</label>
            {url && (
              <div
                style={{
                  position: "relative",
                  width: "fit-content",
                }}
                className="input-img-result"
              >
                <img src={url} alt="" />
                <Icon
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "#ff0000",
                    fontSize: "2em",
                  }}
                  icon="mdi:close-circle"
                  onClick={() => {
                    deleteFile(url, () => {
                      setUrl(null);
                      setSelectedFile(null);
                    });
                  }}
                />
              </div>
            )}
            {!url && (
              <div>
                <label
                  className="img-input-product"
                  htmlFor="img-input-product"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/petcare-ac6c0.appspot.com/o/images%2F1670408402420-791768-middle.png?alt=media&token=607b5d80-1a7a-464b-a10d-32ff8dd3be67"
                    alt=""
                  />
                </label>
                <input
                  style={{ display: "none" }}
                  id="img-input-product"
                  type="file"
                  accept="image/*"
                  name="coverImage"
                  value={url === null ? "" : url}
                  onChangeCapture={onSelectFile}
                  {...register("img")}
                />
              </div>
            )}
          </div>
          <div className="product-name">
            <label>Tên sản phẩm</label>
            <input
              defaultValue=""
              {...register("name", { required: true })}
              className={errors.name ? "invalid" : ""}
            />
            {errors.name && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>
          <div className="product-tag">
            <label>Danh mục</label>
            <select {...register("category")}>
              {dataCategory.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="product-amount">
            <label>Số lượng</label>
            <input
              {...register("numOfProductsInStock", { required: true })}
              className={errors.numOfProductsInStock ? "invalid" : ""}
            />
            {errors.numOfProductsInStock && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>
          <div className="product-price">
            <label>Giá</label>
            <input
              {...register("price", { required: true })}
              className={errors.price ? "invalid" : ""}
            />
            {errors.price && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>
          <div className="product-discount">
            <label>Giảm giá</label>
            <input
              {...register("sale", { required: true })}
              className={errors.sale ? "invalid" : ""}
            />
            {errors.sale && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>

          <div className="product-description">
            <label>Mô tả</label>
            <textarea
              {...register("description", { required: true })}
              rows="8"
              className={errors.description ? "invalid" : ""}
            />
            {errors.description && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>
          <div className="button-group">
            <input type="submit" value="Thêm sản phẩm" />
            <input
              type="submit"
              value="Hủy"
              onClick={() => {
                onClose();
              }}
              className="cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
