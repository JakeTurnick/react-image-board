import "./img-form.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function ImgForm(props) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log("newImg", newImg)
        props.addImg(newImg);
        setName('')
        setUrl('')
    }

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleUrlInput = (e) => {
        setUrl(e.target.value)
    }

    const newImg = {
        id: nanoid(),
        name,
        url
    }

  return (
    <>
        <p id="toggle"></p>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Image name or description"
            name="name"
            id="name"
            value={name}
            onChange={handleNameInput}
            required
        ></input>

        <input type="url" placeholder="Image URL" id="url" name="url" value={url} onChange={handleUrlInput} required></input>
        <br />
        <button type="submit" >Add new Image</button>
        </form>
    </>
  );
}

export default ImgForm;
