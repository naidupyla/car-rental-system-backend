# car-rental-system-backend



---

### **Backend (car-rental-system-backend) - README.md**
```markdown
# Car Rental System - Backend

This is the backend API for the Car Rental System, built with **Node.js** and **Express.js**. It provides RESTful APIs for managing users, cars, and bookings, and integrates with MongoDB for data storage.

## Features
- **Authentication**:
  - JWT-based authentication for secure login and registration.
- **User Management**:
  - Role-based access control (Admin and Client).
- **Car Management**:
  - Admin can add, update, and delete car listings.
- **Rental Management**:
  - Clients can book cars, and Admin can approve or reject bookings.

## Technology Stack
- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Stripe (if applicable)

## Prerequisites
- Node.js (>= 14.x)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

## Getting Started
### Clone the Repository
```bash
git clone https://github.com/naidupyla/car-rental-system-backend.git
cd car-rental-system-backend

## Start the server 
npm start

The server will start on http://localhost:5000.

API Endpoints***************************************************************
Authentication
POST /api/auth/register - Register a new user.
POST /api/auth/login - User login.
Cars ###############################################################
GET /api/cars - Get all available cars.
POST /api/cars - Add a new car (Admin only).
PUT /api/cars/:id - Update car details (Admin only).
DELETE /api/cars/:id - Delete a car (Admin only).
####Rentals#############################################################
POST /api/rentals - Book a car.
GET /api/rentals - Get all bookings (Admin only).
PUT /api/rentals/:id/approve - Approve a booking (Admin only).
Project Structure#############################################################
plaintext
Copy code
src/
├── models/           # MongoDB models (e.g., User, Car, Rental)
├── routes/           # Express routes
├── controllers/      # Route handlers
├── middleware/       # Authentication and error handling
└── server.js         # Entry point of the application
