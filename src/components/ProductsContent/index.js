import React from "react";
import { useState, useEffect } from "react";
import "./ProductsContent.css";
import { Icon } from "@iconify/react";
import CardProductDetail from "../CardProductDetail";
const ProductsContent = () => {
  const productName = [
    {
      categoryId: 1,
      icon: "game-icons:canned-fish",
      label: "Thức ăn",
    },
    {
      categoryId: 2,
      icon: "fluent-emoji-high-contrast:womans-clothes",
      label: "Quần áo - phụ kiện",
    },
    {
      categoryId: 3,
      icon: "bxs:tennis-ball",
      label: "Đồ chơi",
    },
    {
      categoryId: 4,
      icon: "bi:house-door-fill",
      label: "Nhà - lồng",
    },
    {
      categoryId: 5,
      icon: "game-icons:opened-food-can",
      label: "Dụng cụ ăn uống",
    },
    {
      categoryId: 6,
      icon: "el:broom",
      label: "Dụng cụ vệ sinh",
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
      name: "Bát ăn cho mèo",
      price: 150,
      sale: 10,
      rate: 5,
      numOfProductsSold: "171",
      img: "/assets/images/Products/f400153586950c6a6dea89764c6a664d.jpg",
      categoryId: 5,
      category: "Thức ăn",
    },
    {
      id: 5,
      name: "Sữa tắm cho mèo",
      price: 150,
      sale: 10,
      rate: 4,
      numOfProductsSold: "171",
      img: "/assets/images/Products/Sua-tam-sos-cho-cho-meo-768x768.jpg",
      categoryId: 6,
    },
  ];
  const [activeFilter, setActiveFilter] = useState([]);
  const [active, setActive] = useState(true);

  const onFilterChange = (filter) => {
    if (filter === "ALL") {
      if (activeFilter.length === productName.length) {
        return;
      } else {
        setActive(!active);
        // setActiveFilter(productName.map((filter) => filter.categoryId=productName.categoryId));
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        setActiveFilter(newFilter);
      } else {
        setActive(false);
        setActiveFilter([...activeFilter, filter]);
      }
    }
  };
  let filteredList;

  if (
    activeFilter.length === 0 ||
    activeFilter.length === productName.length ||
    active
  ) {
    filteredList = product;
  } else {
    filteredList = product.filter((item) =>
      activeFilter.includes(item.categoryId)
    );
  }
  const [sortRate, setSortRate] = useState("Đánh giá");
  // const [sortNumOfProductsSold, setSortNumOfProductsSold] =
  //   useState("Lượng mua");
  // const [sortPrice, setSortPrice] = useState("Giá");
  // const changeRate = () => {};
  // console.log(filteredList)
  // let sortRateProduct=filteredList;
  // console.log(sortRateProduct)
  // useEffect(() => {
  //   if (sortRate === "Đánh giá") {
  //     return;
  //   } else {
  //     if (sortRate === "Tăng") {
        
  //     } else {

  //     }
  //   }
  // }, [sortRate]);
  return (
    <section className="ProductsContent__container">
      <div className="ProductsContent__container_detail">
        <div className="ProductsContent_menu_container">
          <h3 className="header_menu_product">Danh mục sản phẩm</h3>
          <div className="divide"></div>
          <div className="Menu_item_content_product">
            <input
              type="checkbox"
              id="myInput_menu"
              defaultChecked
              className="checkbox__product_menu"
              checked={active}
              onChange={() => onFilterChange("ALL")}
            />
            <label htmlFor="myInput_menu" className="all_product_check">
              Tất cả sản phẩm
            </label>
          </div>
          {productName.map((item, index) => (
            <div className="Menu_item_content_product" key={item.categoryId}>
              <input
                type="checkbox"
                id={index}
                className="checkbox__product_menu"
                checked={active || activeFilter.includes(item.categoryId)}
                onChange={() => onFilterChange(item.categoryId)}
              />
              <label htmlFor={index} className="label_menu_product">
                <Icon icon={item.icon} className="icon__menu__product" />
                <span>{item.label}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="ProductsContent__detail_Item">
          <div className="Sort_product_item_container">
            <div className="Sort_product_item_container_">
              <select
                name="rate"
                id="rate"
                defaultValue={"Đánh giá"}
                value={sortRate}
              >
                <option value="Đánh giá" disabled>
                  Đánh giá
                </option>
                <option value="tăng">tăng</option>
                <option value="giảm">giảm</option>
              </select>
            </div>
            <div className="Sort_product_item_container_">
              <select
                name="numOfProductsSold"
                id="numOfProductsSold"
                defaultValue={"Lượng mua"}
              >
                <option value="Lượng mua" disabled>
                  Lượng mua
                </option>
                <option value="tăng">tăng</option>
                <option value="giảm">giảm</option>
              </select>
            </div>
            <div className="Sort_product_item_container_">
              <select name="price" id="price" defaultValue={"Giá"}>
                <option value="Giá" disabled>
                  Giá
                </option>
                <option value="tăng">tăng</option>
                <option value="giảm">giảm</option>
              </select>
            </div>
          </div>
          {/* <div className="Name_ProductsContent__detail_Item">
            <h3 className="Name_ProductsContent__detail_Item_header">
              Thức ăn
            </h3>
          </div> */}
          {/* <div className="Name_ProductsContent__detail_Item">
            {filteredList.map((item,index)=>{
              <h3 className="Name_ProductsContent__detail_Item_header">
              {item.name}
            </h3>
            })}
          </div> */}
          <div className="CardProductDetail_display">
            {filteredList.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsContent;
