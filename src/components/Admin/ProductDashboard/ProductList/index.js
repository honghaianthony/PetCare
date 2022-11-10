import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import ProductItem from "./ProductItem";
import ProductForm from "../ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { filterSort } from "../../../../redux/product.slice";

const ProductList = () => {
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const data = useSelector((state) => state.product.listProductTemp);
  return (
    <>
      <div className="product-list-container">
        <div className="heading">
          <h3>{data.length} sản phẩm</h3>
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
                          onClick={() => {
                            setSort("price-down");
                            dispatch(filterSort("price-down"));
                          }}
                        />
                      ) : sort === "price-down" ? (
                        <Icon
                          icon="ant-design:caret-down-outlined"
                          onClick={() => {
                            setSort("");
                            dispatch(filterSort(""));
                          }}
                        />
                      ) : (
                        <Icon
                          icon="bxs:sort-alt"
                          style={{ color: "gray" }}
                          onClick={() => {
                            setSort("price-up");
                            dispatch(filterSort("price-up"));
                          }}
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
                          onClick={() => {
                            setSort("stock-down");
                            dispatch(filterSort("stock-down"));
                          }}
                        />
                      ) : sort === "stock-down" ? (
                        <Icon
                          icon="ant-design:caret-down-outlined"
                          onClick={() => {
                            setSort("");
                            dispatch(filterSort(""));
                          }}
                        />
                      ) : (
                        <Icon
                          icon="bxs:sort-alt"
                          style={{ color: "gray" }}
                          onClick={() => {
                            setSort("stock-up");
                            dispatch(filterSort("stock-up"));
                          }}
                        />
                      )}
                    </div>
                  </th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) =>
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
      {showAdd && <ProductForm closeForm={() => setShowAdd(false)} />}
    </>
  );
};

export default ProductList;
