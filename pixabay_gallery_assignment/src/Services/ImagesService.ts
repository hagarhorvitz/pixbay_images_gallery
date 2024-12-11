import axios from 'axios';
import { ImagesResponse } from '../Types/ImagesResponseType';
import { appConfig } from '../Utils/AppConfig';

class ImagesService {
	public async fetchPaginateImages (category: string, page: number = 1): Promise<ImagesResponse[]> {
        const response = await axios.get(appConfig.paginateImagesUrl, {
            params: { category, page },
        });
        console.log("service paginate response.data: ", response.data);
        return response.data;
    };
    
    public async fetchSortedImages (category: string, sortBy: string, page: number = 1): Promise<ImagesResponse[]> {
        const response = await axios.get(appConfig.sortImagesUrl, {
            params: { category, sortBy, page },
        });
        console.log("service sort response.data: ", response.data);
        return response.data;
    };
}

export const imagesService = new ImagesService();
