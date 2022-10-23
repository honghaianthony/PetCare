import "./ProductList.css";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const list = [
    {
      id: 1,
      title:
        "Đồ ăn cho lol mèo siêu ngon, siêu thơm, siêu siêu gì đó bla bla bla bla bla bla bla",
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
    <div className="product-list-container">
      <h1 className="title">Danh sách sản phẩm</h1>
      <div className="product-list">
        {list.map((item, idx) => (
          <ProductItem data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
