#  React CRUD Users App

This is a **React application** that integrates with the **Reqres API** to perform **user authentication, list users, edit, delete, and paginate users**.

## Features

 **User Authentication** – Login using the Reqres API
 **List Users** – Fetch and display paginated users  
 **Edit Users** – Update user details  
 **Delete Users** – Remove users from the list  
 **Pagination** – Navigate between pages  

## Tech Stack

- **React** – Frontend framework  
- **Axios** – API requests  
- **React Context API** – Global state management  
- **Tailwind CSS** – Styling  
- **React Router** – Navigation  

## Installation & Setup

### Clone the Repository

git clone https://github.com/praveenrapuru/react-crud-users.git
cd react-crud-users

### Install Dependencies

npm install

### Start the Development Server

npm start   

Open `http://localhost:3000` in your browser.

##  Project Structure
react-crud-users/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── EditUser.js
│   │   ├── LoginPage.js
│   │   ├── Pagination.js
│   │   ├── UserContext.js
│   │   ├── UserList.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js


## API Endpoints Used

| Functionality  |  Method  | Endpoint 
|----------------|----------|----------
| Login          | `POST`   | `/api/login` 
| Fetch Users    | `GET`    | `/api/users`
| Update User    | `PUT`    | `/api/users/{id}` 
| Delete User    | `DELETE` | `/api/users`