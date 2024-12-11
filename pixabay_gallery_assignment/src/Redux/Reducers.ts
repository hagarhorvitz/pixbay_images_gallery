import { PayloadAction } from '@reduxjs/toolkit';
import { ImagesState } from '../Types/ImagesStateType';


export function setCategory(currentState: ImagesState, action: PayloadAction<string>) {
    currentState.category = action.payload;
    currentState.page = 1; // Reset to first page when category changes
};
export function handlePrevPage(currentState: {page: number}, action: PayloadAction<number>){
    console.log("reducer prev page - action.payload: ", action.payload)
    if (action.payload > 1) {
        currentState.page = action.payload - 1;
        console.log("reducer prev page - currentState.page: ", currentState.page)
    }
};
export function handleNextPage(currentState: {page: number}, action: PayloadAction<number>) {
    console.log("reducer next page - action.payload: ", action.payload)
    currentState.page = action.payload + 1;
    console.log("reducer next page - currentState.page: ", currentState.page)
};