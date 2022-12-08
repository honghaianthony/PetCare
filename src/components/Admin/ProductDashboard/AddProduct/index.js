import "./ProductForm.css";
import { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";

const AddProduct = ({ needUpdate }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>Thêm sản phẩm</button>
      {visible && (
        <AddProductForm
          onClose={() => setVisible(false)}
          submitSuccess={() => needUpdate()}
        />
      )}
    </>
  );
};
export default AddProduct;
