import "./img-board.css"

function ImgBoard(props) {

    return (
        <li>
            <div className="card-body">
                <img className="img" src={props.imgSrc} />
                <p className="img-caption">{props.imgName}</p>
            </div>
        </li>
    )
}

export default ImgBoard;