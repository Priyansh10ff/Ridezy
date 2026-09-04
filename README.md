# 🚗 Ridezy

A full-stack ride-booking platform built with React, Node.js, Express, and MongoDB.

## Tech Stack

* React
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Axios

## Features

* User authentication
* Secure password hashing
* JWT authentication with HTTP-only cookies
* Protected & guest routes
* Ride booking
* User dashboard
* Driver management
* Location-based services

## Setup

```bash
git clone <repository-url>
cd Ridezy

# Backend
cd backend
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the backend:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## License

MIT
