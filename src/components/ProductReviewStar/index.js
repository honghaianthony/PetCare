import { Icon } from "@iconify/react";
import "./ProductDetailStar.css";

function ProductDetailStar(props) {
  if (props.rate === 5)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
      </div>
    );
  if (props.rate > 4.4)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:half-star-solid" />
      </div>
    );
  if (props.rate >= 4)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate > 3.4)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:half-star-solid" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate >= 3)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate > 2.4)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:half-star-solid" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate >= 2)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate >= 1.4)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:half-star-solid" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
      </div>
    );
  if (props.rate >= 1)
    return (
      <div className="ProductDetailStar">
        <Icon icon="clarity:star-solid" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
        <Icon icon="clarity:star-line" />
      </div>
    );
}

export default ProductDetailStar;
