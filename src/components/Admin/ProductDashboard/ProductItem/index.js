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
          <p className="product-id">#{productInfo.id}</p>
          <Icon
            className="edit"
            icon="bxs:edit"
            onClick={() => setEditOpen(true)}
          />
          <img
            src="http://cdn-img-v2.webbnc.net/uploadv2/web/12/12107/product/2019/10/17/04/14/1571285687_thuc-an-meo-catsrang-400g-nhap-khau-han-quoc.jpg"
            alt=""
          />
          <div className="product-info">
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
