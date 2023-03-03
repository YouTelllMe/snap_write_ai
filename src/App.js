import TextArea from "./components/TextArea";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="flex w-[100vw] h-[100vh] items-center">
      <Upload></Upload>
      <div className="flex w-1/2 h-full bg-red-500 flex-col items-center justify-evenly">
        <TextArea></TextArea>
        <TextArea></TextArea>
      </div>
    </div>
  );
}

export default App;
