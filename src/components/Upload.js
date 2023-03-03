import { FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState } from "react";

function Upload() {
  const [image, setImage] = useState();

  function imageOnChange() {
    const fileBtn = document.getElementById("file");
    if (fileBtn.files.length) {
      setImage(fileBtn.files[fileBtn.files.length - 1]);
    }
  }

  function imageUpload() {
    const fileBtn = document.getElementById("file");
    fileBtn.click();
  }

  function imageRead() {
    if (image) {
      var reader = new FileReader();
      reader.onload = (e) => {
        var displayImage = document.createElement("img");
        displayImage.src = e.target.result;
        var current = document.getElementById("image");
        if (current) {
          current.remove();
        }
        displayImage.id = "image";
        displayImage.style["maxWidth"] = "100%";
        displayImage.style["maxHeight"] = "100%";
        document.getElementById("upload").appendChild(displayImage);
      };
      reader.readAsDataURL(image);
    }
  }

  return (
    <div className="w-1/2 text-center">
      <input
        type="file"
        id="file"
        accept="image/*"
        onChange={imageOnChange}
        hidden="hidden"
      ></input>

      <button
        id="upload"
        className="
        rounded-xl
        shadow-[0_0_20px_rgba(0,0,0,0.3)]
        text-[rgba(0,0,0,0.5)]
        h-[24em]
        w-[24em]
        text-center
      "
        onClick={imageUpload}
      >
        {image ? (
          imageRead()
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
