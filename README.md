# G-MartBD

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://reactjs.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-18.16-green?logo=node.js)](https://nodejs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-7.1.0-brightgreen?logo=mongodb)](https://www.mongodb.com/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-blue?logo=tailwind-css)](https://tailwindcss.com/)  
[![Stripe](https://img.shields.io/badge/Stripe-Payment-purple?logo=stripe)](https://stripe.com/)  

**G-MartBD** is a full-stack MERN e-commerce platform for online shopping. Users can browse products, manage carts, place orders, and make payments securely. The project features a modern responsive UI with advanced functionality for a complete shopping experience.

---

## 🌟 Features

- ✅ User authentication (signup/login) with JWT  
- ✅ Browse products by category, search, and sort  
- ✅ Add to cart and wishlist with persistent storage  
- ✅ Checkout with **Cash-on-Delivery** or **Stripe payments**  
- ✅ Address management for orders  
- ✅ Toast notifications for actions (success/error)  
- ✅ Responsive design for desktop and mobile  

---

## 🖥️ Screenshots

### Home Page
![Home Page]((https://i.ibb.co.com/SDFPbQL3/image.png))
![Home Page](https://i.ibb.co.com/C5SZJ14k/image.png)
![Home Page](https://i.ibb.co.com/Y4G2YfhF/image.png)
![Home Page](https://i.ibb.co.com/WpRnSDFr/image.png)

### Product Listing
![Product Listing](https://i.ibb.co.com/hFzJBZ78/image.png)

### Cart & Checkout
![Cart & Checkout](https://i.ibb.co.com/YBhZFpQM/image.png)

---

## 🔗 Live Demo

- **Frontend:** [https://your-frontend-demo.vercel.app]((https://g-martbd.vercel.app/))  
- **Backend:** [https://your-backend-demo.onrender.com](https://g-mart-bd-server.vercel.app/)

---

## ⚙️ Tech Stack

### Frontend

- **React.js (v19)** – Component-based UI  
- **Tailwind CSS & DaisyUI** – Styling and responsive components  
- **React Router DOM** – Client-side routing  
- **Axios** – HTTP requests  
- **LocalForage** – Local storage caching  
- **React Hot Toast & React Toastify** – Notifications  
- **SweetAlert2** – Alerts & confirmations  
- **Stripe.js** – Payment integration  

### Backend

- **Node.js & Express.js** – Server framework  
- **MongoDB & Mongoose** – Database & ODM  
- **Cloudinary** – Image storage and management  
- **JWT (jsonwebtoken)** – Authentication  
- **Bcrypt.js** – Password hashing  
- **Stripe** – Payment processing  
- **Multer** – File uploads  
- **CORS & Cookie-parser** – Middleware for API requests  

---

## 📂 Project Structure

### Frontend (`g-martbd`)

g-martbd/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/
│ ├─ context/
│ ├─ pages/
│ └─ App.jsx
├─ package.json
└─ vite.config.js


### Backend (`g-martbd-server`)

g-martbd-server/
├─ controllers/
├─ middlewares/
├─ models/
├─ routes/
├─ server.js
└─ package.json


---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/g-martbd.git

2. Frontend setup
cd g-martbd
npm install
npm run dev

3. Backend setup

cd g-martbd-server
npm install
npm run server

----

Backend runs at http://localhost:3500

🔐 Environment Variables
Backend .env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Frontend .env
VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=$
💻 Scripts
Frontend
npm run dev      # Start development server
npm run build    # Build production
npm run preview  # Preview production
npm run lint     # Lint code
Backend
npm run start    # Start server
npm run server   # Start server with nodemon

----


🔮 Future Improvements

⭐ User reviews & ratings for products

⭐ Advanced AI-based product recommendations

⭐ Performance optimization & caching

⭐ Deployment with Vercel (frontend) + Render/Heroku (backend)


----

📌 Author

Amit Sarkar – Full-stack developer

📄 License

This project is licensed under the ISC License.
