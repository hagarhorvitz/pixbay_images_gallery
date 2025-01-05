import { ImagesResponse } from "../../Types/ImagesResponseType";
import css from "./ImageDetailsCard.module.css";

interface ImageDetailsCardProps {
    image: ImagesResponse,
    onCloseFunction: ()=> void
}

export function ImageDetailsCard({image, onCloseFunction}:ImageDetailsCardProps): JSX.Element {
    return (
        <div className={css.ImageDetailsCard}>
                <img src={image?.webformatURL} alt={image?.tags}/>
                <div className={css.AllDetails}>
                    <h3>Image Id {image?.id}:</h3>
                    <p>Views: {image?.views}<br></br>
                    Downloads: {image?.downloads}<br></br>
                    Collections: {image?.collections}<br></br>
                    Likes: {image?.likes}<br></br>
                    Comments: {image?.comments}<br></br>
                    By User: {image?.user}</p>
                <button onClick={onCloseFunction} className={css.closeButton}>
                    Close
                </button>
            </div>
        </div>
    );
}
