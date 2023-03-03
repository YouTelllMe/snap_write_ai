import { useState, useEffect } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function onTextChange(e) {
    setText(e.target.value);
    window.localStorage.setItem("text" + props.id, e.target.value);
  }

  useEffect(() => {
    const prev =
      window.localStorage.getItem("text" + props.id) ||
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.\n\nA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing\n\nA paragraph is a series of sentences that are organized";
    setText(prev);
  }, []);

  return (
    <div className="max-h-[50vh] w-[35em] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <p className="rounded-t-lg p-3 shadow-[0_10px_10px_rgba(224,231,34,0.5)] mb-1">
        Text Box
      </p>
      <textarea
        className="m-0 border-0 w-full resize-none h-52 px-4 py-1 outline-none"
        onChange={(e) => onTextChange(e)}
        value={text}
      ></textarea>
      <div className="rounded-b-lg border-[1px] h-12"></div>
    </div>
  );
}

export default TextArea;
