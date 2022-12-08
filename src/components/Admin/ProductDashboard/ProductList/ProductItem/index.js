import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import EditProduct from "../../EditProduct";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../../redux/product.slice";
import {
  deleteProduct,
  deleteProductDetail,
} from "../../../../../apis/productApi";

const ProductItem = ({ data, needUpdate }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEidt] = useState(false);
  // useEffect(() => setProductDetail(data), [data]);
  return (
    <>
      <tr>
        <td>
          <span className="product-title">{data.product.name}</span>
        </td>
        <td>
          <span>đ{data.product.price}</span>
        </td>
        <td>
          {Number(data.numOfProductsInStock) === 0 ? (
            <span style={{ color: "#de135c" }}>Hết hàng</span>
          ) : (
            <span>{data.numOfProductsInStock}</span>
          )}
        </td>
        <td>
          <div className="method">
            <Icon icon="akar-icons:eye-open" className="see-detail" />
            <EditProduct
              needUpdate={() => needUpdate()}
              idProduct={data.product._id}
            />
            <Icon
              icon="fluent:delete-24-regular"
              className="delete-product"
              onClick={async () => {
                await deleteProductDetail(data.product._id);
                await deleteProduct(data.product._id);
                needUpdate();
              }}
            />
          </div>
        </td>
      </tr>
      {showEdit && (
        <EditProduct
          data={data}
          closeForm={() => setShowEidt(false)}
          // updateData={(a) => setProductDetail(a)}
        />
      )}
    </>
  );
};
export default ProductItem;
