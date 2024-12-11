import { ImagesResponse } from "./ImagesResponseType";

export interface ImagesState {
    images: ImagesResponse[];
    category: string;
    page: number;
    loading: boolean;
    error: string | null;
}
