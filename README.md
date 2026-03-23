# TSSec – Full Stack Security Web Application

TSSec is a full-stack web application with a cybersecurity-themed interface, built to demonstrate frontend–backend integration, user interaction, and data handling using the MERN stack.

---

## 🚀 Features

* Interactive system-style UI with animations and smooth navigation
* Contact form with backend API integration
* Email notifications using Nodemailer
* MongoDB database for storing user messages
* Admin dashboard to view and analyze user queries

---

## 🛠 Tech Stack

* **Frontend:** React, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Other:** Nodemailer

---

## 📁 Project Structure

```
TSSec/
│
├── client/        # React frontend
├── server/        # Node.js backend
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/SathwikGit/TSSec.git
cd TSSec
```

---

### 2. Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

Run backend:

```
npm start
```

---

### 3. Setup Frontend

```
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server port               |
| EMAIL_USER | Sender email              |
| EMAIL_PASS | Email app password        |
| MONGO_URL  | MongoDB connection string |

---

## 📌 Current Status

* Frontend fully implemented with custom UI
* Backend supports email + database integration
* Admin dashboard functional
* Running in development environment

---

## 🔮 Future Improvements

* Secure admin authentication
* Real-time dashboard updates
* Spam protection for contact form
* Deployment to cloud (AWS / Vercel / Render)

---

## 👤 Author

**T. Sai Sathwik**
BITS Pilani Hyderabad

---

## 📄 License

This project is for educational purposes.
