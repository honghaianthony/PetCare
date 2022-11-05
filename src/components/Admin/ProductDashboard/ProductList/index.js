import "./ProductList.css";
import ProductItem from "../ProductItem";
import ProductForm from "../ProductForm";
import { Icon } from "@iconify/react";
import { useState } from "react";

const ProductList = () => {
  const [onAddProductForm, setOnAddProductForm] = useState(false);
  const list = [
    {
      id: 1,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 2,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 3,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 4,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
    {
      id: 1,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 2,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 3,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 4,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
    {
      id: 1,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 100000,
      discount: 0.2,
    },

    {
      id: 2,
      title: "hot shit cho t đi sen",
      origin_price: 200000,
      discount: 0.3,
    },

    {
      id: 3,
      title: "Nhìn cái gì ........",
      origin_price: 300000,
      discount: 0.4,
    },
    {
      id: 4,
      title: "Đồ ăn cho lol mèo siêu ngon",
      origin_price: 400000,
      discount: 0.5,
    },
  ];
  return (
    <>
      <div className="product-list-container">
        <div
          className="add-product-btn"
          onClick={() => setOnAddProductForm(true)}
        >
          <Icon icon="carbon:add-alt" />
          <span>Thêm sản phẩm</span>
        </div>

        <div className="product-list">
          {list.map((item, idx) => (
            <ProductItem data={item} key={idx} />
          ))}
        </div>
      </div>

      {onAddProductForm && (
        <ProductForm closeForm={() => setOnAddProductForm(false)} />
      )}
    </>
  );
};
export default ProductList;
