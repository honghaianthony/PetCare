import { Icon } from "@iconify/react";
import { useState } from "react";
import EditProduct from "../EditProduct";
import "./ProductItem.css";

const ProductItem = ({ data }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [productInfo, setProductInfo] = useState(data);
  return (
    <>
      <div className="product-item">
        <div className="product-item-body">
          <div className="product-item-image">
            <img
              src="https://pyxis.nymag.com/v1/imgs/54c/950/eff84c687e50d533f210c2582ffd570142-31-cat-food.jpg"
              alt=""
            />
          </div>
          <div className="product-info">
            <p className="product-id">#{productInfo.id}</p>
            <h4 className="product-title">{productInfo.title}</h4>
            <p className="product-price">
              đ{productInfo.origin_price * (1 - productInfo.discount)}
            </p>
            <p>
              <span className="product-origin-price">
                đ{productInfo.origin_price}
              </span>
              <span className="product-discount">
                &nbsp;-{productInfo.discount * 100}%
              </span>
            </p>
          </div>
          <div className="product-icon-edit">
            <Icon
              className="edit"
              icon="bxs:edit"
              onClick={() => setEditOpen(true)}
            />
          </div>
        </div>
      </div>
      {editOpen && (
        <EditProduct
          data={productInfo}
          close={() => setEditOpen(false)}
          changeData={(value) => setProductInfo(value)}
        />
      )}
    </>
  );
};
export default ProductItem;
