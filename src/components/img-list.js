import "./img-list.css";
import ImgCard from "./img-card";

function ImgList(props) {
  console.log('props', props)
  const imgsHtml = props.img.map((img) => (
    <ImgCard key={img.id} imgSrc={img.url} imgName={img.name} />
  ));
  console.log('imgsHtml', imgsHtml)

  return <ul>{imgsHtml}</ul>;
}

export default ImgList;
