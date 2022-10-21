import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./ShoppingCart.css";
import ShoppingCartItem from "../../components/ShoppingCartItem";

const ShoppingCart = () => {
  const [chooseAll, setChooseAll] = useState(false);
  const [sumPrice, setSumPrice] = useState(0);

  const callPrice = (price) => {
    let s = sumPrice + price;
    setSumPrice(s);
  };
  const item = [
    {
      productId: "1",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "2",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "3",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "4",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "5",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "6",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
    {
      productId: "7",
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      price: 500,
      sale: 10,
      numOfProductsInStock: 427,
      numOfProductsInCart: 1,
    },
  ];
  return (
    <MainLayout>
      <div className="ShoppingCart">
        <div className="ShoppingCart-One">
          <div className="ShoppingCart-Head">
            <div className="ShoppingCart-Long">
              <input
                type="checkbox"
                id="ShoppingCart-CheckboxAll"
                className="ShoppingCart-Checkbox"
                value={chooseAll}
                onClick={() => setChooseAll(!chooseAll)}
              />
              <span>Sản phẩm</span>
            </div>
            <span className="ShoppingCart-Long120">Giá</span>
            <span className="ShoppingCart-Long120">Số lượng</span>
            <span className="ShoppingCart-Long120">Thành tiền</span>
            <span>Xóa</span>
          </div>
          <div className="ShoppingCart-Body">
            {item.map((item, index) => {
              return (
                <ShoppingCartItem
                  key={index}
                  name={item.name}
                  img={item.img}
                  price={item.price - (item.price * item.sale) / 100}
                  numOfProductsInStock={item.numOfProductsInStock}
                  numOfProductsInCart={item.numOfProductsInCart}
                  callPrice={callPrice}
                />
              );
            })}
          </div>
          <div className="ShoppingCart-SumContainer">
            <div className="ShoppingCart-Sum">
              <div>
                <input
                  type="checkbox"
                  id="ShoppingCart-CheckboxAll2"
                  className="ShoppingCart-Checkbox"
                  value={chooseAll}
                  onClick={() => setChooseAll(!chooseAll)}
                />
                <span>Chọn tất cả</span>
              </div>
              <div>
                <div>
                  <span>Tổng thanh toán: </span>
                  <span className="ShoppingCart-Sum-Price">{sumPrice}đ</span>
                </div>
                <button className="ShoppingCart-ButtonBuy">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShoppingCart;
