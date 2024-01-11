import React, { useState } from "react";
import Progress from "./Progress";
import { Link } from "react-router-dom";

import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("انتخاب عکس");
  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://127.0.0.1:8000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (processEvent) => {
          setUploadPrecentage(Math.round((processEvent.loaded * 100) / processEvent.total));
          setTimeout(() => setUploadPrecentage(0), 10000);
        },
      })
      .then((res) => setMessage(res.data.message))
      .catch();
  };

  return (
    <>
      {message && (
        <div className="alert mt-3 alert-success">
          {" "}
          <p>{message}</p>{" "}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="customFile" className="custom-file-label mb-2">
            {fileName}
          </label>
          <input type="file" className="form-control" name="image" id="customFile" onChange={(e) => handleChange(e)} />
          <Progress uploadPrecentage={uploadPrecentage} />
        </div>
        <input type="submit" className="btn btn-primary mt-5" value="ارسال عکس" />
      </form>

      <div className="gallery-image text-center mt-5">
        <Link to={"/gallery"} className="btn btn-success w-25 mt-3">
          نمایش تصاویر
        </Link>
      </div>
    </>
  );
}

export default FileUpload;
