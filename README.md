# Pixabay Gallery Project

## Overview
The **Pixabay Gallery Project** is a full-stack application built to demonstrate the integration of a Node.js server with a React TypeScript front-end. The application fetches images from the Pixabay API and provides features such as pagination, category filtering, and detailed image viewing.

## Project Structure
### Server: `pixabay_my_server`
The back-end is built using **Node.js** and **Express.js** to serve as the middle layer between the front-end and the Pixabay API.

#### Features:
- **Fetch Images**: Retrieves images from Pixabay based on a specified category.
- **Pagination**: Provides a paginated API endpoint to serve images in chunks of 9.
- **Sorting**: Sorts images by ID or date.
- **Error Handling**: Includes middleware for centralized error management.

#### Key Routes:
- `/api/images/all`: Fetch all images for a default or specified category.
- `/api/images/paginate`: Fetch a paginated set of images.
- `/api/images/sort`: Fetch sorted images based on ID or date.

#### Packages Used:
- `express`: For creating the RESTful API.
- `axios`: For making HTTP requests to the Pixabay API.
- `dotenv`: For managing environment variables securely.
- `cors`: For enabling Cross-Origin Resource Sharing.

#### How to Run the Server:
1. Navigate to the server directory:
   ```bash
   cd pixabay_my_server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Pixabay API key:
   ```env
   PIXABAY_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   node app.js
   ```
5. The server runs on `http://localhost:5000` by default.

### Front-End: `pixabay_gallery_assignment`
The front-end is built with **React** and **TypeScript**, providing a responsive and interactive gallery interface.

#### Features:
- **Image Display**: Shows a grid of images fetched from the server.
- **Pagination Controls**: Navigate through images using `Prev` and `Next` buttons.
- **Category Selector**: Allows users to select image categories dynamically.
- **Image Details**: Displays detailed information for each image in a modal.

#### Key Components:
- `ImagesGallery`: Manages the main gallery view and integrates pagination controls.
- `SelectCategory`: Dropdown for selecting image categories.
- `ImagesDisplay`: Displays individual images and handles modal toggling for details.
- `ImageDetailsCard`: Shows detailed metadata about an image.

#### Packages Used:
- `react`: Core React library.
- `react-dom`: Rendering React components to the DOM.
- `react-redux`: State management with Redux.
- `@reduxjs/toolkit`: Simplifies Redux setup and development.
- `axios`: For making API requests to the server.
- `react-router-dom`: For handling routing.
- `typescript`: Adds static typing to JavaScript.

#### Styling:
CSS Modules are used for component-specific styling to ensure modular and reusable styles.

#### How to Run the Front-End:
1. Navigate to the front-end directory:
   ```bash
   cd pixabay_gallery_assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The application runs on `http://localhost:3000` by default.

## Functionality Workflow
1. **Fetch Images**: The server fetches data from Pixabay's API based on the selected category and page.
2. **Pagination**: The front-end triggers API calls to fetch the next or previous page of images.
3. **Category Selection**: Users select a category, which triggers a new API call to fetch relevant images.
4. **Image Details**: Clicking on an image opens a modal with additional details like views, downloads, and likes.

## Future Enhancements
- Add search functionality to find images based on custom keywords.
- Implement user authentication for a personalized experience.
- Enable caching on the server for faster responses.
- Sort by id or date

## License
This project is for educational purposes only and follows the terms provided by the course.
