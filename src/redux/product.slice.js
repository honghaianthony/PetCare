import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listProduct: [
    {
      product_id: "1",
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo lớn.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_id: "2",
      product_name:
        "Súp thưởng cho mèo Shizuka - Catfood - Petsnack 15gr/1 gói",
      product_price: 189000,
      product_stock: 27,
    },
    {
      product_id: "3",
      product_name: "Thức ăn cho mèo Minino 1.3kg",
      product_price: 179000,
      product_stock: 12,
    },
    {
      product_id: "4",
      product_name: "😻Đồ ăn cho mèo 😻 Súp thưởng shizuka , súp thưởng giá rẻ",
      product_price: 188000,
      product_stock: 20,
    },
    {
      product_id: "5",
      product_name: "Thức ăn cao cấp cho mèo trưởng thành",
      product_price: 162000,
      product_stock: 11,
    },
    {
      product_id: "6",
      product_name:
        "Thức Ăn Hạt Khô Đồ Ăn Cho Mèo APro IQ Formula 500g - iPet Shop",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_id: "7",
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo non.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_id: "8",
      product_name:
        "Xúc Xích Cho Chó Mèo - Đồ ăn Thú Cưng Giàu Dinh Dưỡng - Hàng chuẩn Date mới Thơm ngon",
      product_price: 1900,
      product_stock: 207,
    },
    {
      product_id: "9",
      product_name:
        "Pate cho mèo Wanpy đồ ăn cho mèo giúp tăng cân tăng cường ăn uống Surica WP01 (95gr)",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_id: "10",
      product_name:
        "ĐỒ ĂN ĐÔNG KHÔ/sấy khô 660g ( hàng loại 1) hỗn hợp các loại dinh dưỡng cho mèo / chó",
      product_price: 111000,
      product_stock: 0,
    },
  ],
  listProductTemp: [
    {
      product_id: "1",
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo lớn.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_id: "2",
      product_name:
        "Súp thưởng cho mèo Shizuka - Catfood - Petsnack 15gr/1 gói",
      product_price: 189000,
      product_stock: 27,
    },
    {
      product_id: "3",
      product_name: "Thức ăn cho mèo Minino 1.3kg",
      product_price: 179000,
      product_stock: 12,
    },
    {
      product_id: "4",
      product_name: "😻Đồ ăn cho mèo 😻 Súp thưởng shizuka , súp thưởng giá rẻ",
      product_price: 188000,
      product_stock: 20,
    },
    {
      product_id: "5",
      product_name: "Thức ăn cao cấp cho mèo trưởng thành",
      product_price: 162000,
      product_stock: 11,
    },
    {
      product_id: "6",
      product_name:
        "Thức Ăn Hạt Khô Đồ Ăn Cho Mèo APro IQ Formula 500g - iPet Shop",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_id: "7",
      product_name:
        "Hạt cho mèo Reflex Plus cao cấp | Túi 1.5KG | Thức ăn khô dinh dưỡng dành cho mèo non.",
      product_price: 199000,
      product_stock: 20,
    },
    {
      product_id: "8",
      product_name:
        "Xúc Xích Cho Chó Mèo - Đồ ăn Thú Cưng Giàu Dinh Dưỡng - Hàng chuẩn Date mới Thơm ngon",
      product_price: 1900,
      product_stock: 207,
    },
    {
      product_id: "9",
      product_name:
        "Pate cho mèo Wanpy đồ ăn cho mèo giúp tăng cân tăng cường ăn uống Surica WP01 (95gr)",
      product_price: 199000,
      product_stock: 0,
    },
    {
      product_id: "10",
      product_name:
        "ĐỒ ĂN ĐÔNG KHÔ/sấy khô 660g ( hàng loại 1) hỗn hợp các loại dinh dưỡng cho mèo / chó",
      product_price: 111000,
      product_stock: 0,
    },
  ],
  sort: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      var data = [...state.listProductTemp, action.payload];
      if (state.sort !== "")
        data = data.sort((a, b) => {
          if (state.sort === "price-up")
            return a.product_price > b.product_price ? 1 : -1;
          if (state.sort === "price-down")
            return a.product_price < b.product_price ? 1 : -1;
          if (state.sort === "stock-up")
            return a.product_stock > b.product_stock ? 1 : -1;
          if (state.sort === "stock-down")
            return a.product_stock < b.product_stock ? 1 : -1;
          return a.product_id > b.product_id ? 1 : -1;
        });
      state.listProduct = [...state.listProduct, action.payload];
      state.listProductTemp = [...data];
    },
    removeProduct(state, action) {
      state.listProduct = state.listProduct.filter(
        (item) => item.product_id !== action.payload
      );
      state.listProductTemp = state.listProductTemp.filter(
        (item) => item.product_id !== action.payload
      );
    },
    filterSort(state, action) {
      state.sort = action.payload;
      state.listProductTemp = state.listProductTemp.sort((a, b) => {
        if (action.payload === "price-up")
          return a.product_price > b.product_price ? 1 : -1;
        if (action.payload === "price-down")
          return a.product_price < b.product_price ? 1 : -1;
        if (action.payload === "stock-up")
          return a.product_stock > b.product_stock ? 1 : -1;
        if (action.payload === "stock-down")
          return a.product_stock < b.product_stock ? 1 : -1;
        return a.product_id > b.product_id ? 1 : -1;
      });
    },
    filterValue(state, action) {
      var data = [...state.listProduct];
      if (action.payload.product_name !== "")
        data = data.filter((item) =>
          item.product_name.includes(action.payload.product_name)
        );
      if (action.payload.product_min_price !== 0)
        data = data.filter(
          (item) => item.product_price >= action.payload.product_min_price
        );
      if (action.payload.product_max_price !== 0)
        data = data.filter(
          (item) => item.product_price <= action.payload.product_max_price
        );
      if (action.payload.product_state !== "all")
        data =
          action.payload.product_state === "stock"
            ? data.filter((item) => item.product_stock !== 0)
            : data.filter((item) => item.product_stock === 0);

      if (state.sort !== "")
        data = data.sort((a, b) => {
          if (state.sort === "price-up")
            return a.product_price > b.product_price ? 1 : -1;
          if (state.sort === "price-down")
            return a.product_price < b.product_price ? 1 : -1;
          if (state.sort === "stock-up")
            return a.product_stock > b.product_stock ? 1 : -1;
          if (state.sort === "stock-down")
            return a.product_stock < b.product_stock ? 1 : -1;
          return a.product_id > b.product_id ? 1 : -1;
        });
      state.listProductTemp = [...data];
    },
  },
});

export const { addProduct, removeProduct, filterSort, filterValue } =
  productSlice.actions;
export default productSlice.reducer;
