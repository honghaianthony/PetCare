import ProductDetailStar from "../ProductReviewStar";
import "./ProductDetailReview.css";

function ProductDetailReview(props) {
  return (
    <div className="ProductDetailReview">
      <div className="ProductDetailReview-img">
        <img src={props.img} alt="avatar" />
      </div>
      <div className="ProductDetailReview-content">
        <p>{props.name}</p>
        <ProductDetailStar rate={props.rate} />
        <p style={{ color: "#767676", fontSize: "14px" }}>{props.time}</p>
        <p>{props.review}</p>
      </div>
    </div>
  );
}

export default ProductDetailReview;
