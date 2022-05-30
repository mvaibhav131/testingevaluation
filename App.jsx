import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import Pagination from "./Components/Pagination";
// import { Pagination } from "./Components/Pagination";

function App() {
  return (
    <div className="container">
      <Input size={4} />

      <Image />

      
      <Pagination selected={10}/>
    </div>
  );
}

export default App;
