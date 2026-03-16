Atharv SecureTech Website

A full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) to showcase the services, research expertise, and leadership of Atharv SecureTech, a cybersecurity-focused organization.

The project includes a modern responsive frontend and a backend API that allows users to send inquiries through a contact form. The backend processes requests and sends email notifications using Nodemailer.

Features
Frontend

Responsive website built with React

Styled using Tailwind CSS

Single-page application design

Sections for:

About the organization

Services

Research & Expertise

Founders (LinkedIn integration)

Core Values

Contact Form

Interactive UI with hover effects and modern layout

Backend

Built using Node.js and Express

API endpoint to process contact form submissions

Email sending functionality using Nodemailer

Environment variable configuration using dotenv

Tech Stack
Frontend

React.js

Tailwind CSS

JavaScript (ES6)

Vite

Backend

Node.js

Express.js

Nodemailer

dotenv

CORS

Project Structure
AtharvSecureTech
│
├── client                 # React Frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   └── package.json
│
├── server                 # Node Backend
│   ├── controllers
│   ├── routes
│   ├── config
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── README.md
└── .gitignore
Environment Variables

This project uses environment variables for email configuration.

Create a .env file inside the server folder.

Example:

PORT=5000

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password

You can use .env.example as a reference.

⚠️ Never commit your .env file to GitHub.

Installation & Setup
1 Clone the repository
git clone https://github.com/yourusername/atharv-securetech.git
cd atharv-securetech
2 Install frontend dependencies
cd client
npm install

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173
3 Install backend dependencies

Open a new terminal:

cd server
npm install

Run backend:

node server.js

Backend runs on:

http://localhost:5000
Contact Form Workflow
User fills contact form
        ↓
React sends POST request
        ↓
Express backend API receives request
        ↓
Nodemailer sends email via SMTP
        ↓
Message arrives in organization inbox
Future Improvements

Planned enhancements include:

MongoDB integration for storing contact messages

Admin dashboard to view user inquiries

Spam protection (CAPTCHA)

Rate limiting for API security

Cloud deployment

Integration with scalable email services (SendGrid / AWS SES)

Security Note

Sensitive information such as email credentials is stored using environment variables and is not included in the repository.

Author

T. Sai Sathwik

BITS Pilani – Hyderabad Campus
MERN Stack Developer | Competitive Programmer
