import React from "react";
import "./ProductSkeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton({ cards }) {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className="product-card-skeleton" key={i}>
                <div className="product-card-skeleton-top">
                    <Skeleton height={250} />
                </div>
                <div className="product-card-skeleton-bottom">
                    <Skeleton count={4} />
                </div>
            </div>
        ));
}

export default ProductSkeleton;
