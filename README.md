🛒 G-MartBD | Full-Stack E-Commerce
G-MartBD is a high-performance e-commerce platform built on the MERN Stack . It offers a seamless shopping experience with real-time updates, secure payments, and a mobile-first responsive design.


---

🚀 Key Features
🔒 Secure Auth: Full User authentication and authorization (JWT-based).

🛍️ Smart Shopping: Product filtering, sorting, and category-based searching.

💳 Dual Payments: Integrated with Stripe for cards and Cash-on-Delivery (COD) .

📦 Order Management: Seamless checkout, wishlist, and user address management.

⚡ Modern UI: Built with React 19, Tailwind CSS, DaisyUI, and PrebuiltUI for a polished feel.

🔔 Real-time Feedback: Toast notifications and SweetAlert2 confirmations.

---

🛠️ Tech Stack
Frontend
Core: React.js (v19), React Router Dom

Styling: Tailwind CSS, DaisyUI, PrebuiltUI

State & Storage: LocalForage, Axios

UX: React Hot Toast, SweetAlert2

Payments: Stripe.js

Backend
Runtime: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Storage: Cloudinary (Image Management)

Security: JWT, Bcrypt.js, CORS, Cookie-parser

Utilities: Multer (File uploads)

---

G-MartBD/
├── client/ (Frontend)
│   ├── src/
│   │   ├── components/  # Reusable UI elements
│   │   ├── context/     # Global state management
│   │   ├── pages/       # Main view components
│   │   └── assets/      # Styles and images
│   └── vite.config.js
└── server/ (Backend)
    ├── controllers/     # Request logic
    ├── models/          # Database schemas
    ├── routes/          # API endpoints
    ├── middlewares/     # Auth & Error handling
    └── server.js        # Entry point

   ---

⚙️ Installation & Setup
Clone the Repository

git clone https://github.com/your-username/g-martbd.git
cd g-martbd

Backend Configuration

Navigate tog-martbd-server

Create a .envfile:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Run: npm installthennpm run server


Frontend Configuration

Navigate tog-martbd

Create a .envfile:

VITE_BACKEND_URL=http://localhost:3500
VITE_CURRENCY=tk

Run: npm installthennpm run dev

---

🔮 Future Roadmap
[ ] AI Search: Implement AI-based product recommendations.

[ ] Social Proof: Add user reviews, star ratings, and photo comments.

[ ] Performance: Introduce Redis caching and code-splitting for faster loads.

[ ] Admin Dashboard: Advanced analytics for sales and inventory.

---

👤 Author
Amit Sarkar

Full-stack Developer

GitHub : https://github.com/Amitkumersarkar|LinkedIn : https://www.linkedin.com/in/amit-sarkar-63504b252/

📄 License
This project is licensed under the ISC License .
