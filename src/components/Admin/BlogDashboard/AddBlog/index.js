import FormAddBlog from "./FormAddBlog";
import { useState } from "react";

export default function AddBlog({ needUpdate }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>Thêm blog</button>
      {visible && (
        <FormAddBlog
          onClose={() => setVisible(false)}
          submitSuccess={() => needUpdate()}
        />
      )}
    </>
  );
}
