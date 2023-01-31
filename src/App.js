import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ImgForm from "./components/img-form";
import ImgCard from "./components/img-card";

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
];

function App() {
  const [imgs, setImgs] = useState(INITIAL_IMGS);

  const imgsHtml = imgs.map(img => (
    <ImgCard key={img.id} imgSrc={img.url} imgName={img.name}/>
  ))

  const addImg = (newImg) => {
    setImgs([...imgs, newImg])
  }

  return (
    <div className="App">
      <header className="App-header">
        <ImgForm id="ImgForm" className="Img-Form" addImg={addImg}/>
      </header>
      <main>
        <ul>
          {imgsHtml}
        </ul>
      </main>
    </div>
  );
}

export default App;
