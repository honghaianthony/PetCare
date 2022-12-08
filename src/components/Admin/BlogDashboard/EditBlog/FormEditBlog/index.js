import { useForm } from "react-hook-form";
import { useEffect, useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { uploadFile, deleteFile } from "../../../../../firebase/util";
import { CKEditor } from "ckeditor4-react";
export default function FormEditBlog({ onClose, submitSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [content, setContent] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return { title: "test" };
    }, [url]),
  });
  const onSubmit = (data) => {
    console.log({ content, coverImage: url, title: data.title });
    onClose();
    submitSuccess();
  };
  useEffect(() => {
    //call API
    const res = {
      selectedFile: "",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Nagoya_Castle%28Larger%29.jpg",
      content: "123121311231312",
    };
    //
    setUrl(res.url);
    setContent(res.content);
  }, []);
  useEffect(() => {
    if (selectedFile !== null)
      uploadFile(
        selectedFile,
        () => {},
        (url) => setUrl(url)
      );
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="add-blog-container">
      <div className="layer"></div>
      <div className="add-blog-form-container">
        <div className="heading">
          <h4 className="title">Chỉnh sửa blog</h4>
          <Icon
            icon="ci:close-big"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        <form className="blog-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="blog-img">
            <label>Ảnh nền</label>
            {url && (
              <div
                style={{
                  position: "relative",
                  width: "fit-content",
                }}
                className="input-img-result"
              >
                <img src={url} alt="" />
                <Icon
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "#ff0000",
                    fontSize: "2em",
                  }}
                  icon="mdi:close-circle"
                  onClick={() => {
                    deleteFile(url, () => {
                      setUrl(null);
                      setSelectedFile(null);
                    });
                  }}
                />
              </div>
            )}
            {!url && (
              <>
                <label
                  className="img-input-blog"
                  htmlFor="img-input-blog"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/petcare-ac6c0.appspot.com/o/images%2F1670408402420-791768-middle.png?alt=media&token=607b5d80-1a7a-464b-a10d-32ff8dd3be67"
                    alt=""
                  />
                </label>
                <input
                  style={{ display: "none" }}
                  id="img-input-blog"
                  type="file"
                  accept="image/*"
                  name="coverImage"
                  value={url ? "" : url}
                  onChangeCapture={onSelectFile}
                  {...register("coverImage")}
                />
              </>
            )}
          </div>
          <div className="blog-title">
            <label>Tiêu đề</label>
            <input
              {...register("title", { required: true })}
              className={errors.title ? "invalid" : ""}
            />
            {errors.title && (
              <p className="invalid">Trường dữ liệu không được để trống</p>
            )}
          </div>
          <div className="blog-content">
            <label>Nội dung</label>
            <CKEditor
              initData={content}
              config={{
                extraPlugins: `justify`,
              }}
              onChange={({ editor }) => {
                setContent(editor.getData());
              }}
            />
          </div>
          <div className="button-group">
            <input type="submit" value="Cập nhật" />
            <input
              type="submit"
              value="Hủy"
              onClick={() => {
                onClose();
              }}
              className="cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
