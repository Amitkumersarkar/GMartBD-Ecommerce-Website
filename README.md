G-MartBD

G-MartBD is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a modern, responsive platform for online shopping with features like product listing, cart management, order placement, and payment integration.

Live Host Linke : https://g-martbd.vercel.app/
Backend Host Link : https://g-mart-bd-server.vercel.app/

Features

User authentication and authorization (login/signup)

Product listing with filtering, sorting, and category search

Add to cart, wishlist, and checkout functionality

Cash-on-Delivery (COD) and Stripe payment integration

Address management for users

Interactive UI with React, Tailwind CSS, and DaisyUI,PrebuiltUI

Toast notifications for success/error messages using react-hot-toast and react-toastify

Responsive design for desktop and mobile

Tech Stack
Frontend

React.js (v19) – Component-based UI

React Router Dom – Client-side routing

Tailwind CSS + DaisyUI + PrebuiltUI– Styling and UI components

Axios – HTTP requests

React Hot Toast / React Toastify – Notifications

LocalForage – Local storage management

SweetAlert2 – Alerts and confirmations

Stripe.js – Payment integration

Backend

Node.js & Express.js – Server-side framework

MongoDB & Mongoose – Database and ODM

Cloudinary – Image storage and management

JWT (jsonwebtoken) – Authentication

Bcrypt.js – Password hashing

Stripe – Payment processing

Multer – File uploads

CORS & Cookie-parser – Middleware for API requests

Project Structure
Frontend (g-martbd)
g-martbd/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ context/
│  ├─ pages/
│  └─ App.jsx
├─ package.json
└─ vite.config.js
Backend (g-martbd-server)
g-martbd-server/
├─ controllers/
├─ middlewares/
├─ models/
├─ routes/
├─ server.js
└─ package.json
Installation
1. Clone the repository
git clone https://github.com/your-username/g-martbd.git
cd g-martbd
2. Frontend setup
cd g-martbd
npm install
npm run dev

Frontend runs on http://localhost:5173
 by default.

3. Backend setup
cd g-martbd-server
npm install
npm run server

Backend runs on http://localhost:3500
 by default.

Environment Variables

Create a .env file in the backend folder with the following keys:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

For the frontend, you can use:

VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=tk
Scripts
Frontend
npm run dev      # Start development server
npm run build    # Build production bundle
npm run preview  # Preview production build
npm run lint     # Run ESLint
Backend
npm run start    # Start server
npm run server   # Start server with nodemon
Future Improvements

Implement user reviews and ratings for products

Add advanced search and AI-based recommendations

Optimize performance with code splitting and caching

Deploy using Vercel (frontend) and Render/Heroku (backend)

---

Future Improvements

Implement user reviews and ratings for products

Add advanced search and AI-based recommendations

Optimize performance with code splitting and caching

Deploy using Vercel (frontend) and Render/Heroku (backend)

Author

Amit Sarkar – Full-stack developer

License

This project is licensed under the ISC License.
