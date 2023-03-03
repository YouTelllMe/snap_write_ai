import { FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";

function Upload() {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(window.localStorage.getItem("image"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("image", image);
  }, [image]);

  function imageOnChange() {
    const fileBtn = document.getElementById("file");
    if (fileBtn.files.length) {
      var reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(fileBtn.files[fileBtn.files.length - 1]);
    }
  }

  function imageUpload() {
    const fileBtn = document.getElementById("file");
    fileBtn.click();
  }

  return (
    <div className="w-2/5 text-end">
      <input
        type="file"
        id="file"
        accept="image/png, image/jpeg"
        onChange={imageOnChange}
        hidden="hidden"
      ></input>

      <button
        id="upload"
        className="
        rounded-xl
        shadow-[0_0_20px_rgba(0,0,0,0.1)]
        text-[rgba(0,0,0,0.5)]
        h-[24em]
        w-[24em]
        text-center
      "
        onClick={imageUpload}
      >
        {image ? (
          <img
            alt="uploaded"
            src={image}
            className="max-h-[100%] max-w-[100%]"
          ></img>
        ) : (
          <>
            <IconContext.Provider
              value={{ size: "3em", className: "text-black m-auto mb-3" }}
            >
              <FiUpload />
            </IconContext.Provider>
            PNG, JPEG files only
          </>
        )}
      </button>
    </div>
  );
}

export default Upload;
