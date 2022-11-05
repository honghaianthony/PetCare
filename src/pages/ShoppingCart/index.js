import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./ShoppingCart.css";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import { Icon } from "@iconify/react";
import CardProductDetail from "../../components/CardProductDetail";

const ShoppingCart = () => {
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
  const product = [
    {
      id: 1,
      name: "hạt thức ăn cho mèo",
      price: 100,
      sale: 0,
      rate: 5,
      numOfProductsSold: "171",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo ",
      price: 200,
      sale: 0,
      rate: 5,
      numOfProductsSold: "171",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
    {
      id: 3,
      name: "hạt thức ăn cho mèo",
      price: 150,
      sale: 10,
      rate: 5,
      numOfProductsSold: "171",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
    {
      id: 4,
      name: "hạt thức ăn cho mèo",
      price: 150,
      sale: 10,
      rate: 5,
      numOfProductsSold: "171",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
  ];
  const [chooseAll, setChooseAll] = useState(false);
  const [sumPrice, setSumPrice] = useState(0);
  const arr1 = Array(item.length).fill(false);
  const [listC, setListC] = useState([...arr1]);
  const [manageItem, setManageItem] = useState([...item]);

  return (
    <MainLayout>
      <div className="ShoppingCartHead">
        <div>
          <div className="ShoppingCartHead-Icon">
            <Icon icon="bi:bag-heart-fill" color="#ec87c0" fontSize="32px" />
          </div>
          <div className="ShoppingCartHead-Content">
            <h3>Giỏ hàng</h3>
          </div>
        </div>
      </div>
      <div className="ShoppingCart">
        <div className="ShoppingCart-One">
          <div className="ShoppingCart-Head">
            <div className="ShoppingCart-Long">
              <input
                type="checkbox"
                id="ShoppingCart-CheckboxAll"
                className="ShoppingCart-Checkbox"
                checked={chooseAll}
                onChange={() => {
                  let temp = !chooseAll;
                  if (temp === false) {
                    setChooseAll(temp);
                    setSumPrice(0);
                  } else {
                    setChooseAll(temp);
                    let s = 0;
                    for (let i = 0; i < manageItem.length; ++i) {
                      s +=
                        manageItem[i].numOfProductsInCart *
                        (1 - manageItem[i].sale / 100) *
                        manageItem[i].price;
                    }
                    setSumPrice(s);
                  }
                  let arrTemp = Array(item.length).fill(temp);
                  setListC([...arrTemp]);
                }}
              />
              <span>Sản phẩm</span>
            </div>
            <span className="ShoppingCart-Long120">Giá</span>
            <span className="ShoppingCart-Long120">Số lượng</span>
            <span className="ShoppingCart-Long120">Thành tiền</span>
            <span>Xóa</span>
          </div>
          <div className="ShoppingCart-Body">
            {manageItem.map((item, index) => {
              return (
                <ShoppingCartItem
                  key={index}
                  name={item.name}
                  img={item.img}
                  price={item.price - (item.price * item.sale) / 100}
                  numOfProductsInStock={item.numOfProductsInStock}
                  numOfProductsInCart={item.numOfProductsInCart}
                  handleChange={(checked, num) => {
                    const arrTemp1 = [...listC];
                    arrTemp1[index] = checked;

                    const arrTemp2 = [...manageItem];
                    arrTemp2[index].numOfProductsInCart = num;
                    setManageItem([...arrTemp2]);

                    setListC(arrTemp1);
                    let i = 0;
                    for (; i < arrTemp1.length; i++) {
                      if (arrTemp1[i] === false) {
                        setChooseAll(false);
                        console.log("ok sai");
                        break;
                      }
                    }
                    console.log(i);
                    if (i === arrTemp1.length) {
                      setChooseAll(true);
                      console.log("ok đúng");
                    }

                    let s = 0;
                    for (let i = 0; i < arrTemp1.length; ++i) {
                      if (arrTemp1[i] === true) {
                        s +=
                          manageItem[i].numOfProductsInCart *
                          (manageItem[i].price -
                            (manageItem[i].price * manageItem[i].sale) / 100);
                      }
                    }
                    setSumPrice(s);
                  }}
                  valueCheck={listC[index]}
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
                  checked={chooseAll}
                  onChange={() => {
                    let temp = !chooseAll;
                    if (temp === false) {
                      setChooseAll(temp);
                      setSumPrice(0);
                    } else {
                      setChooseAll(temp);
                      let s = 0;
                      for (let i = 0; i < manageItem.length; ++i) {
                        s +=
                          manageItem[i].numOfProductsInCart *
                          (1 - manageItem[i].sale / 100) *
                          manageItem[i].price;
                      }
                      setSumPrice(s);
                    }
                    let arrTemp = Array(item.length).fill(temp);
                    setListC([...arrTemp]);
                  }}
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
        <div className="ShoppingCart-Other">
          <h3>Sản phẩm khác</h3>
          <div className="ShoppingCart_display">
            {product.map((item, index) => {
              if (index < 4)
                return (
                  <CardProductDetail
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    sale={item.sale}
                    rate={item.rate}
                    img={item.img}
                    numOfProductsSold={item.numOfProductsSold}
                  />
                );
              return <></>;
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShoppingCart;
