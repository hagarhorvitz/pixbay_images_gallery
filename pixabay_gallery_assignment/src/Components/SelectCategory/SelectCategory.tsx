import { useDispatch, useSelector } from "react-redux";
import css from "./SelectCategory.module.css";
import { AppDispatch, AppState, imagesActions } from "../../Redux/State";

const categories = [
    'backgrounds',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
];

export function SelectCategory(): JSX.Element {

    const dispatch: AppDispatch = useDispatch();
    const currentCategory = useSelector((state: AppState) => state.images.category);

    function handleCategoryChange(newCategory: string) {
        dispatch(imagesActions.setCategory(newCategory));
    };

    return (
        <div className={css.SelectCategory}>
            <label htmlFor="category_select">Select Category: </label>
            <select
                id="category_select"
                value={currentCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}
