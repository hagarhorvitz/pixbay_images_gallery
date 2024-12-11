import { useEffect, useState } from "react";
import css from "./ImagesGallery.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, imagesActions, loadImages } from "../../Redux/State";
import { ImagesDisplay } from "../ImagesDisplay/ImagesDisplay";
import { SelectCategory } from "../SelectCategory/SelectCategory";

export function ImagesGallery(): JSX.Element {

    const dispatch: AppDispatch = useDispatch();
    const { images, category, page, loading } = useSelector((state: AppState) => state.images);
    console.log("page: ", page)
    // const [disable, setDisable] = useState(true);

    useEffect(() => {
        dispatch(loadImages({ category, page }));
    }, [category, page, dispatch]);

    if (loading) return <div className={css.Loading}>Loading Images...🔃</div>;

    return (
        <div className={css.ImagesGallery}>
            <SelectCategory />
            <div className={css.ControlsButtons}>
                <button 
                    className={css.PrevButton}
                    onClick={() => dispatch(imagesActions.handlePrevPage(page))} 
                    disabled={page === 1}>
                        Prev
                </button>
                <button 
                    className={css.NextButton}
                    onClick={() => dispatch(imagesActions.handleNextPage(page))}>
                        Next
                </button>
            </div>
            <div className={css.ImagesArray}>
                {
                    images.map((image) => (
                        <ImagesDisplay
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </div>
    );
}
