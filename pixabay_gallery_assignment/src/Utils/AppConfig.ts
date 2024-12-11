class AppConfig {
    public readonly allImagesUrl = 'http://localhost:5000/api/images/all';
    public readonly paginateImagesUrl = 'http://localhost:5000/api/images/paginate';
    public readonly sortImagesUrl = 'http://localhost:5000/api/images/sort';
}

export const appConfig = new AppConfig();
