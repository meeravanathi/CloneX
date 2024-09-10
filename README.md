# X-clone
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up, log in, and manage your account.
- **Tweet Management**: Create, edit, delete, and view tweets.
- **Follow System**: Follow and unfollow other users.
- **Real-time Updates**: See live updates on tweets and notifications.
- **Responsive Design**: Fully responsive UI for a seamless experience on all devices.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Deployment**: [Deployment details, if applicable]

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/x-twitter-clone.git
    cd x-twitter-clone
    ```

2. Navigate to the `backend` directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following environment variables:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

2. Start the frontend development server:
    ```bash
    npm start
    ```

The application should now be running at `http://localhost:3000` (for the frontend) and `http://localhost:5000` (for the backend).

## Usage

- **Register**: Create a new account or log in if you already have one.
- **Create Tweet**: Post new tweets and interact with others' tweets.
- **Follow Users**: Find and follow users to see their tweets in your timeline.
- **Notifications**: Stay updated with real-time notifications.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Tweets

- `GET /api/tweets` - Get all tweets
- `POST /api/tweets` - Create a new tweet
- `PUT /api/tweets/:id` - Edit a tweet
- `DELETE /api/tweets/:id` - Delete a tweet

### Users

- `GET /api/users/:id` - Get user profile
- `POST /api/users/follow/:id` - Follow a user
- `POST /api/users/unfollow/:id` - Unfollow a user

## Contributing

We welcome contributions to improve this project. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

ChatGP
## SIGNIN/SIGNUP PAGE
![Screenshot 2024-09-10 150805](https://github.com/user-attachments/assets/3114781e-6ac7-4b0a-8696-724ef8d47c75)

## EXPLORE PAGE
![Screenshot 2024-09-10 150651](https://github.com/user-attachments/assets/aa52acbc-d0e8-479c-b519-1046a48f7a3d)

## EDIT PROFILE
![Screenshot 2024-09-10 150839](https://github.com/user-attachments/assets/c205014c-dfdf-4f8a-8d04-9511e409aa3a)

## PROFILE PAGE
![Screenshot 2024-09-10 150745](https://github.com/user-attachments/assets/ac6c9f9c-8b27-4a05-8803-17060c6c67f4)
