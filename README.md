# Support Ticket App

A full-stack support ticket application (MERN) that allows users to create, view, and manage support tickets. Built with React, Redux, Node.js, and MongoDB, this app provides a seamless experience for users and admins to handle support requests efficiently.

## Features

- **User Authentication:** Register and log in securely with JSON Web Tokens (JWT).
- **Create Support Tickets:** Users can create new support tickets by specifying product details and issue descriptions.
- **View and Manage Tickets:** View all support tickets, with options for CRUD operations.
- **Admin Dashboard:** Admin users can manage user tickets, respond to issues, and close tickets.

# Usage

### User Registration and Login

- Register a new account or log in with an existing account.

### Creating a Ticket

- Submit a support request by providing the product details and a description of the issue.

### Viewing Tickets

- Access all tickets associated with the logged-in user.

### Admin Actions

- Admin users can view, update, or close tickets.

# Technologies Used

- **Frontend:** React, Redux, React-Router, Redux-Toolkit
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

![Screenshot 2024-11-12 125119](https://github.com/user-attachments/assets/0d63d302-09a5-4629-8148-b26e7838734e)
![Screenshot 2024-11-12 125127](https://github.com/user-attachments/assets/01c3c92b-edeb-42f4-a550-256dc3a8d9b9)
![Screenshot 2024-11-12 125137](https://github.com/user-attachments/assets/55ae6c4b-cedc-4525-8e33-2723f837f5d3)
![Screenshot 2024-11-12 125146](https://github.com/user-attachments/assets/0ec7070d-4c4e-4bde-91e8-199f7de34cc0)
![Screenshot 2024-11-12 125154](https://github.com/user-attachments/assets/71239692-ff16-4ff1-a9b1-f944b0ee963f)


# API Endpoints

- **POST** `/api/users` - Register a new user
- **POST** `/api/users/login` - Authenticate and log in a user
- **GET** `/api/tickets` - Retrieve all tickets for a user
- **POST** `/api/tickets` - Create a new ticket
- **GET** `/api/tickets/:id` - Retrieve a specific ticket by ID
- **PUT** `/api/tickets/:id` - Update a ticket by ID
- **DELETE** `/api/tickets/:id` - Delete a ticket by ID
