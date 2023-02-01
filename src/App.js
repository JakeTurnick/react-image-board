import "./App.css";
import { useState } from "react";
import ImgForm from "./components/img-form";
import ImgList from "./components/img-list";

const INITIAL_IMGS = [
  {
    id: 1,
    name: "cat",
    url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "bird",
    url: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Peepy",
    url: "https://cdn.shopify.com/s/files/1/2597/3774/products/itemlabel-cow-peepy-site-1.jpg?v=1620839788&width=1920",
  },
];

function App() {
  //App state
  const [imgs, setImgs] = useState(INITIAL_IMGS);

  const addImg = (newImg) => {
    setImgs([...imgs, newImg])
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* form is passed setImgs as prop */}
        <ImgForm addImg={addImg}/>
      </header>
      <main>
        {/* list is passed img state */}
        <ImgList img={imgs}/>
      </main>
    </div>
  );
};

export default App;