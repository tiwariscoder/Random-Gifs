import Random from "./components/Random"
import Tag from "./components/Tag"
function App() {
  return (
    <div className="relative w-full h-screen overflow-y-auto flex flex-col background items-center hide-scrollbar">
      <h1 className="absolute w-11/12 bg-white text-center mt-[40px] px-10 py-2 text-3xl font-bold rounded-md">RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[120px] mb-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
