import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import EditProduct from "../../EditProduct";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../../redux/product.slice";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(data);
  const [showEdit, setShowEidt] = useState(false);
  useEffect(() => setProductDetail(data), [data]);
  return (
    <>
      <tr>
        <td>
          <span className="product-title">{productDetail.product_name}</span>
        </td>
        <td>
          <span>đ{productDetail.product_price}</span>
        </td>
        <td>
          {productDetail.product_stock === 0 ? (
            <span style={{ color: "#de135c" }}>Hết hàng</span>
          ) : (
            <span>{productDetail.product_stock}</span>
          )}
        </td>
        <td>
          <div>
            <Icon icon="akar-icons:eye-open" className="see-detail" />
            <Icon
              icon="akar-icons:edit"
              className="edit-product"
              onClick={() => setShowEidt(true)}
            />
            <Icon
              icon="fluent:delete-24-regular"
              className="delete-product"
              onClick={() => dispatch(removeProduct(productDetail.product_id))}
            />
          </div>
        </td>
      </tr>
      {showEdit && (
        <EditProduct
          data={productDetail}
          closeForm={() => setShowEidt(false)}
          updateData={(a) => setProductDetail(a)}
        />
      )}
    </>
  );
};
export default ProductItem;
