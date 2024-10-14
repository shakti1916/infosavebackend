# API Project using Express and MongoDB

This is a basic API built using Express.js that saves user data (email, contact, and message) to a MongoDB database. It uses Mongoose as the ORM for database operations and handles POST requests for data saving.

## Features

- Save user data (email, contact, and message) to MongoDB
- Basic input validation for required fields
- Error handling for missing data
- Cross-Origin Resource Sharing (CORS) enabled

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM library for MongoDB
- **dotenv**: For environment variables
- **cors**: For handling cross-origin requests

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12+)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install

PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database-name
npm start


