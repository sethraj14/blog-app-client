# Blog Frontend System

This frontend system is a web application for a blogging platform, built with React. It supports operations such as displaying blog posts and creating new ones.

## Features

- Display a list of blog posts.
- View individual blog posts.
- Create new blog posts through a form.
- Responsive design for various device sizes.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sethraj14/blog-app-client.git
   cd blog-app-client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env.local` file in the root directory with the following content (update values based on your environment, particularly the backend server URL):

   ```plaintext
   REACT_APP_API_URL=https://blog-app-server-hmmp.onrender.com/graphql
   ```

   This is where you'll specify the URL of your GraphQL backend.

4. Start the development server:

   ```bash
   npm start
   ```

   The application should now be running and accessible at `http://localhost:3000`.

## Usage

- **View Blog Posts**: Navigate to the home page to see a list of all blog posts.
- **Read a Blog Post**: Click on a blog post's "Read More" button to view the full content.
- **Create a Blog Post**: Navigate to the create post page (the route might be `/create` or accessible via a navigation menu) and fill out the form to add a new blog post.

## Deployment


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
