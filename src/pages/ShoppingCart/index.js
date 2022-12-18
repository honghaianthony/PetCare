import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./ShoppingCart.css";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import { Icon } from "@iconify/react";
import CardProductDetail from "../../components/CardProductDetail";
import { getMyCart } from "../../apis/cartApi";

const ShoppingCart = () => {
    const navigate = useNavigate();
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
        {
            id: 5,
            name: "hạt thức ăn cho mèo",
            price: 150,
            sale: 10,
            rate: 5,
            numOfProductsSold: "171",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            categoryId: 1,
        },
        {
            id: 6,
            name: "hạt thức ăn cho mèo",
            price: 150,
            sale: 10,
            rate: 5,
            numOfProductsSold: "171",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            categoryId: 1,
        },
        {
            id: 7,
            name: "hạt thức ăn cho mèo",
            price: 150,
            sale: 10,
            rate: 5,
            numOfProductsSold: "171",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            categoryId: 1,
        },
        {
            productId: "8",
            name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            price: 500,
            sale: 10,
            numOfProductsInStock: 427,
            numOfProductsInCart: 1,
        },
        {
            productId: "9",
            name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            price: 500,
            sale: 10,
            numOfProductsInStock: 427,
            numOfProductsInCart: 1,
        },
        {
            productId: "10",
            name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            price: 500,
            sale: 10,
            numOfProductsInStock: 427,
            numOfProductsInCart: 1,
        },
        {
            productId: "11",
            name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            price: 500,
            sale: 10,
            numOfProductsInStock: 427,
            numOfProductsInCart: 1,
        },
        {
            productId: "12",
            name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
            img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
            price: 500,
            sale: 10,
            numOfProductsInStock: 427,
            numOfProductsInCart: 1,
        },
    ];
    useEffect(() => {
        async function fetchData() {
            const res = await getMyCart();
            setData(res);
            setStateSelect(Array(res.length).fill(false));
        }
        fetchData();
    }, []);

    const [chooseAll, setChooseAll] = useState(false);
    const [sumPrice, setSumPrice] = useState(0);
    const [stateSelect, setStateSelect] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        let sumTemp = 0;
        for (let i = 0; i < stateSelect.length; ++i)
            if (stateSelect[i])
                sumTemp +=
                    (data[i].price * (100 - data[i].sale) * data[i].amount) /
                    100;
        setSumPrice(sumTemp);

        for (let i = 0; i < stateSelect.length; ++i)
            if (!stateSelect[i]) {
                setChooseAll(false);
                return;
            }
        setChooseAll(true);
    }, [stateSelect, data]);

    return (
        <MainLayout>
            <SEO
                title="Giỏ hàng"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <div className="ShoppingCartHead">
                <div>
                    <div className="ShoppingCartHead-Icon">
                        <Icon icon="bi:bag-heart-fill" fontSize="32px" />
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
                                onClick={() => {
                                    let temp = [];
                                    for (let i = 0; i < stateSelect.length; ++i)
                                        if (chooseAll) temp.push(false);
                                        else temp.push(true);
                                    setStateSelect(temp);
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
                        {data.length === 0 ? (
                            <h2 style={{ textAlign: "center" }}>
                                Giỏ hàng của bạn trống
                            </h2>
                        ) : (
                            data.map((item, index) => {
                                return (
                                    <ShoppingCartItem
                                        key={index}
                                        id={item._id}
                                        name={item.name}
                                        img={item.img}
                                        price={
                                            item.price -
                                            (item.price * item.sale) / 100
                                        }
                                        numOfProductsInStock={999999999999}
                                        numOfProductsInCart={item.amount}
                                        valueCheck={stateSelect[index]}
                                        onSelect={() => {
                                            const temp = [...stateSelect];
                                            temp[index] = !temp[index];
                                            setStateSelect(temp);
                                        }}
                                        onAmountChange={(value) => {
                                            const temp = [...data];
                                            temp[index].amount = value;
                                            setData(temp);
                                        }}
                                        onDelete={(id) => {
                                            let tempData = [],
                                                tempStateSelect = [];
                                            for (
                                                let i = 0;
                                                i < stateSelect.length;
                                                ++i
                                            ) {
                                                if (data[i]._id !== id) {
                                                    tempData.push(data[i]);
                                                    tempStateSelect.push(
                                                        stateSelect[i]
                                                    );
                                                }
                                            }
                                            setData(tempData);
                                            setStateSelect(tempStateSelect);
                                        }}
                                    />
                                );
                            })
                        )}
                        {}
                    </div>
                    <div className="ShoppingCart-SumContainer">
                        <div className="ShoppingCart-Sum">
                            <div>
                                <input
                                    type="checkbox"
                                    id="ShoppingCart-CheckboxAll2"
                                    className="ShoppingCart-Checkbox"
                                    checked={chooseAll}
                                    onClick={() => {
                                        let temp = [];
                                        for (
                                            let i = 0;
                                            i < stateSelect.length;
                                            ++i
                                        )
                                            if (chooseAll) temp.push(false);
                                            else temp.push(true);
                                        setStateSelect(temp);
                                    }}
                                />
                                <span>Chọn tất cả</span>
                            </div>
                            <div>
                                <div>
                                    <span>Tổng thanh toán: </span>
                                    <span className="ShoppingCart-Sum-Price">
                                        {sumPrice.toLocaleString()}đ
                                    </span>
                                </div>
                                <button
                                    className="ShoppingCart-ButtonBuy"
                                    onClick={() => {
                                        const productList = [];
                                        for (
                                            let i = 0;
                                            i < stateSelect.length;
                                            ++i
                                        ) {
                                            if (stateSelect[i])
                                                productList.push({
                                                    _id: data[i]._id,
                                                    productId:
                                                        data[i].productId,
                                                    amount: data[i].amount,
                                                    name: data[i].name,
                                                    img: data[i].img,
                                                    price:
                                                        (data[i].price *
                                                            (100 -
                                                                data[i].sale)) /
                                                        100,
                                                });
                                        }
                                        if (productList.length !== 0) {
                                            sessionStorage.setItem(
                                                "productList",
                                                JSON.stringify(productList)
                                            );
                                            navigate("/payment");
                                        }
                                    }}
                                >
                                    Mua ngay
                                </button>
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
                                        numOfProductsSold={
                                            item.numOfProductsSold
                                        }
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
