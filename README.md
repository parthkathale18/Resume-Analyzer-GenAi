🚀 Project Title

AI-Powered Job Preparation Platform (Full Stack Gen AI Application)

📌 Overview

This project is a production-ready full stack web application designed to help users prepare for job interviews using AI-driven insights.

It allows users to:

Upload resumes

Analyze job descriptions

Identify skill gaps

Generate AI-based interview questions

Create ATS-optimized resumes in PDF format

The application simulates a real-world SaaS product combining Full Stack Development + Generative AI integration.

🎯 Key Features
🔐 Authentication & Security

User Registration & Login using JWT

Secure routes with authentication middleware

Token Blacklisting for logout security (prevents reuse of tokens)

📄 Resume Processing

Upload resume files using Multer

Extract skills and relevant data

Store structured data in MongoDB

🤖 AI Integration (Gemini API)

Analyze resume + job description

Detect missing skills (Skill Gap Analysis)

Generate:

Interview Questions

Interview Feedback Reports

ATS-Optimized Resume Content

📊 Interview Reports System

Create AI-generated interview reports

Save reports in database

Fetch:

Single report

All reports

Recent reports

📑 Resume PDF Generation

Convert AI-generated resume into PDF

Use Puppeteer to render HTML → PDF

Ensures ATS-friendly formatting

⚡ Frontend Experience

Built with React + Vite

Protected routes

Context API for state management

Custom hooks for clean logic (useAuth, useInterview)

🛠 Tech Stack
Frontend

React.js (Vite)

React Router

Axios

Context API

Backend

Node.js

Express.js

Database

MongoDB Atlas

Mongoose

Authentication

JWT (JSON Web Tokens)

Token Blacklisting

AI

Gemini API (Google)

File Handling

Multer (for uploads)

PDF Generation

Puppeteer

🏗 Architecture

The application follows a layered architecture:

Routes Layer
Handles API endpoints

Controller Layer
Contains request/response logic

Service Layer
Business logic + AI integration

Model Layer
MongoDB schemas using Mongoose

🔄 Workflow (End-to-End Flow)
🧑‍💻 User Flow

User registers/logs in

JWT token is generated and stored

User uploads resume

Resume is parsed and stored

User provides job description

AI processes:

Resume + JD

Generates skill gap analysis

AI generates:

Interview questions

Feedback report

User can:

View reports

Generate ATS resume

Download PDF

⚙️ Backend Flow

Request hits route

Auth middleware validates JWT

Controller handles request

Service layer:

Calls Gemini API

Processes response

Data stored in MongoDB

Response sent to frontend

📄 PDF Generation Flow

AI generates resume content

HTML template is created

Puppeteer renders HTML

PDF is generated and returned

🔐 Token Blacklisting Logic

On logout:

Token is stored in blacklist collection

Middleware checks:

If token exists in blacklist → reject request

This prevents reuse of logged-out tokens (important for security).

🧠 Key Learnings

Real-world full stack architecture

Secure authentication flow with JWT

Handling AI APIs in production

File upload & parsing

Designing scalable backend structure

Generating PDFs dynamically using Puppeteer

Managing global state in React

Writing reusable custom hooks

⚠️ Challenges Faced

Handling async AI responses properly

Structuring AI output using schemas (Zod)

Managing authentication state across frontend

Ensing PDF generation works reliably

Handling large resume files

📈 Future Improvements

Add real-time interview simulation (voice-based)

Use WebSockets for live feedback

Add job recommendations

Improve AI accuracy with fine-tuning

Add user dashboard analytics

💡 Conclusion

This project demonstrates the integration of:

Full Stack Development

Secure Authentication

AI-powered features

Real-world product thinking

It reflects the ability to build scalable, production-ready applications with modern technologies.

🧑‍🏫 Credits

Instructor: Ankur Prajapati
Project Source: GitHub Repository

🗣 How to Explain in Interview (Short Version)

If interviewer asks, say this:

“I built a full stack AI-based job preparation platform where users can upload resumes, analyze job descriptions, and get AI-generated interview questions and ATS resumes. I implemented JWT authentication with token blacklisting, integrated Gemini AI for skill gap analysis, and used Puppeteer for PDF generation. The app follows a layered architecture and simulates a real-world SaaS product.”
