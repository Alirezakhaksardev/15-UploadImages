import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowData() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/upload-data").then((res) => {
      setImages(res.data);
    });
  }, []);

  return (
    <div className="show-data mt-5">
      <div className="container">
        <div className="button">
          <Link to={"/"} className="btn btn-success">آپلود عکس</Link>
        </div>
        <div className="row">
          {images &&
            images.map((image) => (
              <div className="col-lg-3 mt-4" key={image.id}>
                <img
                  src={`http://127.0.0.1:8000/back/images/${image.image}`}
                  className="w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
