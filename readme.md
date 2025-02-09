# My Library

## Table of Contents

- [Project Overview](#project-overview)
- [What the Project Does](#what-the-project-does)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup Steps](#setup-steps)
    - [Frontend](#frontend-setup)
    - [Backend](#backend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

**My Library** is a full-stack web application that allows users to search for books, add them to their personal library, and manage their reading lists across different shelves: `To Read`, `Reading`, and `Completed`. The application offers a seamless user experience with responsive design, ensuring accessibility across various devices.

---

## What the Project Does

**My Library** empowers users to:

- **Search for Books:** Utilize the Google Books API to find books by title, author, or ISBN.
- **Manage Personal Library:** Add books to specific shelves (`To Read`, `Reading`, `Completed`) to organize reading lists.
- **Update Book Status:** Move books between shelves to reflect their current reading status.
- **Remove Books:** Eliminate books from their library when desired.
- **Persistent Storage:** Maintain the state of the library across sessions using `localStorage` and backend database synchronization.
- **Responsive Design:** Access and manage the library effortlessly on desktops, tablets, and mobile devices.

---

## Features

- **Search Books:** Powerful search functionality that queries the Google Books API, allowing users to discover new titles and authors.
- **User Authentication:** Secure registration and login processes to protect user data and library contents.
- **Manage Shelves:** Easily categorize books into `To Read`, `Reading`, or `Completed` shelves.
- **Update Book Status:** Drag and drop or use action buttons to move books between different shelves.
- **Remove Books:** Swiftly remove books from the library to keep it organized.
- **Responsive Design:** Ensures the application looks and functions flawlessly on all screen sizes.
- **Persistent Storage:** Utilizes `localStorage` for immediate data persistence and synchronizes with the backend for long-term storage.
- **Modal Functionality:** Interactive modals for assigning books to shelves, enhancing user experience.

---

## Technologies Used

### Frontend

- **HTML5 & CSS3:** Structure and styling of the web pages.
- **JavaScript (ES6):** Dynamic functionality and DOM manipulation.
- **Font Awesome:** Iconography for enhanced UI elements.
- **Axios:** HTTP client for making API requests.
- **Google Fonts:** Custom fonts for improved typography.
- **Responsive Design Techniques:** Ensuring compatibility across devices.

### Backend

- **Node.js:** JavaScript runtime environment for building the server.
- **Express.js:** Web framework for creating API endpoints.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM for MongoDB to manage data models.
- **JSON Web Tokens (JWT):** Authentication mechanism to secure API endpoints.
- **Cors:** Middleware to enable Cross-Origin Resource Sharing.
- **Nodemon:** Development utility for automatically restarting the server.

---

## Folder Structure

### Frontend
