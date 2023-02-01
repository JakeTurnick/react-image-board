import "./img-list.css";
import ImgBoard from "./img-board";

function ImgList(props) {
  const imgsHtml = props.img.map((img) => (
    <ImgBoard key={img.id} imgSrc={img.url} imgName={img.name} />
  ));

  return <ul>{imgsHtml}</ul>;
}

export default ImgList;
