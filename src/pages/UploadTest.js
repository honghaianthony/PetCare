import React, { useState } from "react";
import { uploadFile, deleteFile } from "../firebase/util";

function UploadTest() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleDelete = () => {
        deleteFile(
            url,
            () => {
                alert("Xóa thành công");
            },
            (error) => {
                alert(error);
            }
        );
    };
    const handleUpload = async () => {
        uploadFile(
            image,
            (progress) => {
                setProgress(progress);
            },
            (url) => {
                setUrl(url);
            }
        );
    };
    return (
        <div>
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" accept="image/*" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <button onClick={handleDelete}>Delete</button>
            <br />
            <a href={url}>{url}</a>
            <br />
            <img src={url || "http://via.placeholder.com/300"} alt="firebase" />
        </div>
    );
}

export default UploadTest;
