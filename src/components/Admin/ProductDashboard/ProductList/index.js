import React, { useState } from "react";
import { Icon } from "@iconify/react";

import ProductItem from "./ProductItem";
import AddProduct from "../AddProduct";

const ProductList = ({ data, needUpdateData }) => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    return (
        <>
            <div className="product-list-container">
                <div className="heading">
                    {data && (
                        <>
                            <h3>{data.length} sản phẩm</h3>
                            <AddProduct needUpdate={() => needUpdateData()} />
                        </>
                    )}
                </div>
                <div className="product-list">
                    <div className="product-list-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span> Giá </span>
                                            {sort === "price-up" ? (
                                                <Icon
                                                    icon="ant-design:caret-up-filled"
                                                    onClick={() => {
                                                        setSort("price-down");
                                                    }}
                                                />
                                            ) : sort === "price-down" ? (
                                                <Icon
                                                    icon="ant-design:caret-down-outlined"
                                                    onClick={() => {
                                                        setSort("");
                                                    }}
                                                />
                                            ) : (
                                                <Icon
                                                    icon="bxs:sort-alt"
                                                    style={{ color: "gray" }}
                                                    onClick={() => {
                                                        setSort("price-up");
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </th>
                                    <th>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span>Kho hàng</span>
                                            {sort === "stock-up" ? (
                                                <Icon
                                                    icon="ant-design:caret-up-filled"
                                                    onClick={() => {
                                                        setSort("stock-down");
                                                    }}
                                                />
                                            ) : sort === "stock-down" ? (
                                                <Icon
                                                    icon="ant-design:caret-down-outlined"
                                                    onClick={() => {
                                                        setSort("");
                                                    }}
                                                />
                                            ) : (
                                                <Icon
                                                    icon="bxs:sort-alt"
                                                    style={{ color: "gray" }}
                                                    onClick={() => {
                                                        setSort("stock-up");
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.map((item, index) => (
                                        <ProductItem
                                            data={item}
                                            key={item.product._id}
                                            needUpdate={() => needUpdateData()}
                                        />
                                    ))}
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
                        {/* <Pagination
              total={(data.length + 5) / 6}
              initialPage={1}
              onChange={(number) => setPage(number)}
            /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
