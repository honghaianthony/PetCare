import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import ProductItem from "./ProductItem";
import ProductForm from "../ProductForm";

const ProductList = () => {
  const [data, setData] = useState([
    {
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo lớn.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_name:
        "Súp thưởng cho mèo Shizuka - Catfood - Petsnack 15gr/1 gói",
      product_price: 189000,
      product_stock: 27,
    },
    {
      product_name: "Thức ăn cho mèo Minino 1.3kg",
      product_price: 179000,
      product_stock: 12,
    },
    {
      product_name: "😻Đồ ăn cho mèo 😻 Súp thưởng shizuka , súp thưởng giá rẻ",
      product_price: 188000,
      product_stock: 20,
    },
    {
      product_name: "Thức ăn cao cấp cho mèo trưởng thành",
      product_price: 162000,
      product_stock: 11,
    },
    {
      product_name:
        "Thức Ăn Hạt Khô Đồ Ăn Cho Mèo APro IQ Formula 500g - iPet Shop",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo lớn.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_name:
        "Xúc Xích Cho Chó Mèo - Đồ ăn Thú Cưng Giàu Dinh Dưỡng - Hàng chuẩn Date mới Thơm ngon",
      product_price: 1900,
      product_stock: 207,
    },
    {
      product_name:
        "Pate cho mèo Wanpy đồ ăn cho mèo giúp tăng cân tăng cường ăn uống Surica WP01 (95gr)",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_name:
        "ĐỒ ĂN ĐÔNG KHÔ/sấy khô 660g ( hàng loại 1) hỗn hợp các loại dinh dưỡng cho mèo / chó",
      product_price: 111000,
      product_stock: 0,
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  return (
    <>
      <div className="product-list-container">
        <div className="heading">
          <h3>99 sản phẩm</h3>
          <button onClick={() => setShowAdd(true)}>Thêm sản phẩm mới</button>
        </div>
        <div className="product-list">
          <div className="product-list-table-container">
            <table>
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span> Giá </span>
                      {sort === "price-up" ? (
                        <Icon
                          icon="ant-design:caret-up-filled"
                          onClick={() => setSort("price-down")}
                        />
                      ) : sort === "price-down" ? (
                        <Icon
                          icon="ant-design:caret-down-outlined"
                          onClick={() => setSort("")}
                        />
                      ) : (
                        <Icon
                          icon="bxs:sort-alt"
                          style={{ color: "gray" }}
                          onClick={() => setSort("price-up")}
                        />
                      )}
                    </div>
                  </th>
                  <th>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Kho hàng</span>
                      {sort === "stock-up" ? (
                        <Icon
                          icon="ant-design:caret-up-filled"
                          onClick={() => setSort("stock-down")}
                        />
                      ) : sort === "stock-down" ? (
                        <Icon
                          icon="ant-design:caret-down-outlined"
                          onClick={() => setSort("")}
                        />
                      ) : (
                        <Icon
                          icon="bxs:sort-alt"
                          style={{ color: "gray" }}
                          onClick={() => setSort("stock-up")}
                        />
                      )}
                    </div>
                  </th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .sort((a, b) => {
                    if (sort === "price-up")
                      return a.product_price > b.product_price ? 1 : -1;
                    if (sort === "price-down")
                      return a.product_price < b.product_price ? 1 : -1;
                    if (sort === "stock-up")
                      return a.product_stock > b.product_stock ? 1 : -1;
                    if (sort === "stock-down")
                      return a.product_stock < b.product_stock ? 1 : -1;
                    return true;
                  })
                  .map((item, index) =>
                    index >= (page - 1) * 6 && index < page * 6 ? (
                      <ProductItem data={item} key={index} />
                    ) : (
                      ""
                    )
                  )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "8px 0px",
            }}
          >
            <Pagination
              total={(data.length + 5) / 6}
              initialPage={1}
              onChange={(number) => setPage(number)}
            />
          </div>
        </div>
      </div>
      {showAdd && (
        <ProductForm
          closeForm={() => setShowAdd(false)}
          addProduct={(a) => setData([...data, a])}
        />
      )}
    </>
  );
};

export default ProductList;
