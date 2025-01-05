import { createSlice, createAsyncThunk, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { ImagesResponse } from '../Types/ImagesResponseType';
import { ImagesState } from '../Types/ImagesStateType';
import { imagesService } from '../Services/ImagesService';
import { handleNextPage, handlePrevPage, setCategory } from './Reducers';

export type AppState = {
    images: ImagesState
};

const initialState: ImagesState = {
    images: [],
    category: 'nature',
    page: 1,
    loading: false,
    error: null,
};

// Thunk for loading images
export const loadImages = createAsyncThunk(
    'images/loadImages',// 'images' is the slice name, and 'loadImages' is the action name
    async ({ category, page }: { category: string; page: number }) => {
        const paginateImages = await imagesService.fetchPaginateImages(category, page);
        console.log("Thunk paginateImages: ", paginateImages);
        return paginateImages;
    }
);

const imagesSlice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: {setCategory, handleNextPage, handlePrevPage},
    extraReducers: (builder) => {
        builder
            .addCase(loadImages.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadImages.fulfilled, (state, action: PayloadAction<ImagesResponse[]>) => {
                state.images = action.payload;
                state.loading = false;
            })
            .addCase(loadImages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error loading images';
            });
    },
});

export const imagesActions = imagesSlice.actions; 

export const store = configureStore<AppState>({
    reducer: {
        images: imagesSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;

