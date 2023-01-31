import "./img-card.css"

function ImgCard(props) {

    return (
        <li>
            <div className="card-body">
                <img className="img" src={props.imgSrc} />
                <p className="img-caption">{props.imgName}</p>
            </div>
        </li>
    )
}

//key={img.id} imgSrc={img.url} imgName={img.name}/
export default ImgCard;