import { useState } from "react";
import { ImagesResponse } from "../../Types/ImagesResponseType";
import css from "./ImagesDisplay.module.css";
import { ImageDetailsCard } from "../ImageDetailsCard/ImageDetailsCard";

export function ImagesDisplay(imageProps:ImagesResponse): JSX.Element {

    const [clickedImage, setClickedImage] = useState<boolean>(false);

    const handleCloseDetails = () => {
        setClickedImage(false); 
    };

    return (
        <div className={css.ImagesDisplay}>
            {
                clickedImage && (
                    <ImageDetailsCard
                    key={imageProps.id}
                    image={imageProps}
                    onCloseFunction={handleCloseDetails}/>
                )
            }
            {
                !clickedImage && (
                    <img 
                    src={imageProps.webformatURL} 
                    alt={imageProps.tags} 
                    onClick={()=>setClickedImage(true)}
                    // style={{display:clickedImage?'none':'block'}}
                    />
                )
            }

        </div>
    );
}
