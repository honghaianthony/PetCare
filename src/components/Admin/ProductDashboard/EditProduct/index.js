import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import EditProductForm from "./EditProductForm";

const EditProduct = ({ needUpdate, idProduct }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Icon
        icon="akar-icons:edit"
        className="edit-product"
        onClick={() => setVisible(true)}
      />
      {visible && (
        <EditProductForm
          idProduct={idProduct}
          onClose={() => setVisible(false)}
          submitSuccess={() => needUpdate()}
        />
      )}
    </>
  );
};
export default EditProduct;
