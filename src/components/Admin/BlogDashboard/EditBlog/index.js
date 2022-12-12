import { useState } from "react";
import { Icon } from "@iconify/react";
import FormEditBlog from "./FormEditBlog";
export default function EditBlog({ needUpdate, idBlog }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Icon
        icon="akar-icons:edit"
        className="edit-blog"
        onClick={() => setVisible(true)}
      />
      {visible && (
        <FormEditBlog
          idBlog={idBlog}
          onClose={() => setVisible(false)}
          submitSuccess={() => needUpdate()}
        />
      )}
    </>
  );
}
