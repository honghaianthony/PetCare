import "./ProductList.css";
import ProductItem from "../ProductItem";
import ProductForm from "../ProductForm";
import { useState } from "react";
import { Pagination } from "@nextui-org/react";

const ProductList = () => {
  const [onAddProductForm, setOnAddProductForm] = useState(false);
  const [data, setData] = useState([
    {
      id: 1001,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 1002,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 1003,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 1004,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
    {
      id: 1005,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 1006,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 1007,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 1008,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
    {
      id: 1009,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 1010,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 1011,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 1012,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
    {
      id: 1013,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 1014,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 1015,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 1016,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
  ]);
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="product-list-container">
        <div
          className="add-product-btn"
          onClick={() => setOnAddProductForm(true)}
        >
          <span>Thêm sản phẩm</span>
        </div>

        <div className="product-list">
          {data.map((item, idx) =>
            idx < page * 6 && idx >= (page - 1) * 6 ? (
              <ProductItem data={item} key={idx} />
            ) : (
              <></>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            total={(data.length + 5) / 6}
            initialPage={1}
            onChange={(number) => setPage(number)}
          />
        </div>
      </div>

      {onAddProductForm && (
        <ProductForm closeForm={() => setOnAddProductForm(false)} />
      )}
    </>
  );
};
export default ProductList;
