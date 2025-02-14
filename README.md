# MERN-CRUD - kashifyh@gmail.com
**MERN Stack CRUD project **
Backend (Node.js + Express + MongoDB)
Initialize the Backend:

Create a directory for the backend, e.g., mern-backend.
Run npm init -y to initialize the Node.js project.
Install the necessary dependencies:
bash
Copy
npm install express mongoose cors dotenv
Setup MongoDB (MongoDB Atlas or Local MongoDB):

Create a MongoDB Atlas account if you don't already have one and set up a new cluster.
Get your MongoDB connection string.
Create Server and CRUD Routes:

Create a server.js file for the main entry point of the backend.
Create a models folder and a Project.js model.
Create a routes folder and a projects.js file to handle CRUD routes.
server.js (Backend entry point):


**Frontend (React)**
Create React App:

Inside the root directory, create a folder for the frontend (e.g., mern-frontend).
Initialize a React app using create-react-app:
bash
Copy
npx create-react-app mern-frontend
Install Axios (for making HTTP requests):

Install Axios in the frontend app:
bash
Copy
npm install axios
Create CRUD Components:

Create components for listing projects, creating a new project, editing a project, and deleting a project.
