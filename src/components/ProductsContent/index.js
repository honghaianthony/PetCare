import React from "react";
import { useState, useEffect } from "react";
import "./ProductsContent.css";
import { Icon } from "@iconify/react";
import "@fontsource/nunito"
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
  const productList = [
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
      rate: 1,
      numOfProductsSold: "151",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
    {
      id: 3,
      name: "hạt thức ăn cho mèo",
      price: 150,
      sale: 10,
      rate: 2,
      numOfProductsSold: "11",
      img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Bát ăn cho mèo",
      price: 150,
      sale: 10,
      rate: 5,
      numOfProductsSold: "170",
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
      numOfProductsSold: "168",
      img: "/assets/images/Products/Sua-tam-sos-cho-cho-meo-768x768.jpg",
      categoryId: 6,
    },
  ];
  const sortFunctions = {
    descRate: (a, b) => b.rate - a.rate,
    ascRate: (a, b) => a.rate - b.rate,
    descPrice: (a, b) => b.price - a.price,
    ascPrice: (a, b) => a.price - b.price,
    descNumberOfSold: (a, b) => b.numOfProductsSold - a.numOfProductsSold,
    ascNumberOfSold: (a, b) => a.numOfProductsSold - b.numOfProductsSold,
    default: (a, b) => a.id - b.id,
  };
  const [renderedProducts, setRenderedProducts] = React.useState(productList);
  const [filterList, setfilterList] = React.useState([1, 2, 3, 4, 5, 6]);
  const [sort, setSort] = React.useState("default");
  const handleSort = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "tăng":
        setSort("ascRate");
        break;
      case "giảm":
        setSort("descRate");
        break;
      case "giá tăng":
        setSort("ascPrice");
        break;
      case "giá giảm":
        setSort("descPrice");
        break;
      case "lượng mua giảm":
        setSort("descNumberOfSold");
        break;
      case "lượng mua tăng":
        setSort("ascNumberOfSold");
        break;
      default:
        setSort("default");
        break;
    }
  };
  const handleFilter = (e) => {
    if (e === "ALL") {
      // if all filter is selected, set filterList to empty array
      setfilterList(
        filterList.length === productName.length
          ? []
          : productName.map((item) => item.categoryId)
      );
      return;
    }
    setfilterList(
      filterList.includes(e)
        ? filterList.filter((item) => item !== e)
        : [...filterList, e]
    );
  };
  React.useEffect(() => {

    const filtered = productList.filter((item) =>
      filterList.includes(item.categoryId)
    );

    const sorted = filtered.sort(sortFunctions[sort]);
    setRenderedProducts(sorted);
  }, [filterList, sort]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="ProductsContent__container">
      <div className="ProductsContent__container_detail">
        <div className="ProductsContent_menu_container">
          <div className="ProductsContent_menu_">
            <h3 className="header_menu_product">Danh mục sản phẩm</h3>
            <div className="divide"></div>
            <div className="Menu_item_content_product">
              <div className="input_checkbox_menu">
                <input
                  type="checkbox"
                  id="myInput_menu"
                  className="checkbox__product_menu_checked"
                  checked={filterList.length === productName.length}
                  onChange={() => handleFilter("ALL")}
                />
              </div>
              <label htmlFor="myInput_menu"
                className={filterList.length === productName.length ? "label_menu_product_All_checked" : "label_menu_product_All_unchecked"}
              >
                Tất cả sản phẩm
              </label>
            </div>
            {productName.map((item, index) => (
              <div className="Menu_item_content_product" key={item.categoryId}>
                <div className="input_checkbox_menu">
                  <input
                    type="checkbox"
                    id={index}
                    className="checkbox__product_menu_checked"
                    // className={activeClassName?"checkbox__product_menu_checked":""}
                    checked={filterList.includes(item.categoryId)}
                    onChange={() => handleFilter(item.categoryId)}
                  />
                </div>
                <label htmlFor={index}
                  className="label_menu_product">
                  <Icon icon={item.icon}
                    // className="icon__menu__product_checked" 
                    className={filterList.includes(item.categoryId) ? "icon__menu__product_checked" : "icon__menu__product"}
                  />
                  <span
                    className={filterList.includes(item.categoryId) ? "label_menu_product_checked" : "label_menu_product_"}
                  >
                    {item.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="ProductsContent__detail_Item">
          <div className="Sort_product_item_container">
            <div className="Sort_product_item_container_">
              <select name="rate" id="rate" onChange={handleSort}>
                <option value="Đánh giá" className="option_sort">Đánh giá</option>
                <option value="tăng" className="option_sort">Đánh giá tăng</option>
                <option value="giảm" className="option_sort">Đánh giá giảm</option>
              </select>
            </div>
            <div className="Sort_product_item_container_">
              <select
                name="numOfProductsSold"
                id="numOfProductsSold"
                onChange={handleSort}
                className="option_sort"
              >
                <option value="Lượng mua" >
                  Lượng mua
                </option>
                <option value="lượng mua tăng" className="option_sort">Lượng mua tăng</option>
                <option value="lượng mua giảm" className="option_sort">Lượng mua giảm</option>
              </select>
            </div>
            <div className="Sort_product_item_container_">
              <select name="price" id="price" onChange={handleSort}>
                <option value="Giá" className="option_sort">
                  Giá
                </option>
                <option value="giá tăng" className="option_sort">Giá tăng</option>
                <option value="giá giảm" className="option_sort">Giá giảm</option>
              </select>
            </div>
          </div>
          {filterList.length === productName.length ? (
            <div className="Sort_product_item_left">
              <span className="Sort_product_item_left_text">Tất cả sản phẩm</span>
            </div>
          ) :
            (<div className="Sort_product_item_left">
              <span className="Sort_product_item_left_text">Sản phẩm</span>
            </div>)}

          <div className="CardProductDetail_display">
            {renderedProducts?.map((item, index) => {
              return (
                <CardProductDetail
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  sale={item.sale}
                  rate={item.rate}
                  img={item.img}
                  numOfProductsSold={item.numOfProductsSold}
                />
              );
            })}
          </div>
        </div>

      </div>
      {showTopBtn && <Icon icon="bi:arrow-up-circle" className="icon-position icon-style" onClick={goToTop}/>}
    </section>
  );
};

export default ProductsContent;
