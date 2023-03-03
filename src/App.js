import TextArea from "./components/TextArea";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="flex w-[100vw] h-[100vh] items-center">
      <Upload></Upload>
      <div className="flex w-3/5 h-full flex-col items-center justify-evenly">
        <TextArea id="1"></TextArea>
        <TextArea id="2"></TextArea>
      </div>
    </div>
  );
}

export default App;
