# MemoPad: Simple Notes Application

**MemoPad** is a full-stack web application designed for quickly creating, viewing, updating, and deleting notes. It features a robust backend built with Node.js/Express and MongoDB, and a modern, responsive frontend built with React.

A key feature is the **Rate Limiting** protection implemented using Upstash Redis, ensuring the API remains stable under heavy load.

---

## 🚀 Live Demo

Experience the deployed version of the application:

➡️ **[https://memo-pad.onrender.com/](https://memo-pad.onrender.com/)**

---

## ✨ Features

* **CRUD Operations:** Full functionality to Create, Read, Update, and Delete notes.
* **MongoDB Persistence:** Notes are stored securely using Mongoose and MongoDB.
* **Rate Limiting:** Protects the API from abuse using **Upstash Redis** (Sliding Window algorithm).
* **Responsive UI:** Built with React, Tailwind CSS, and DaisyUI for a smooth experience on all devices.
* **Modern Stack:** Node.js, Express, React, and Vite.

---

## 📦 Project Structure

The project is a standard Monorepo structure containing separate directories for the backend API and the frontend application.

```
memo_pad/
├── backend/            # Node.js/Express API (Port 3001)
├── frontend/           # React/Vite Application (Port 5173)
├── .env                # Global environment configuration
└── package.json        # Root script runner for build/start
```

---

## ⚙️ Local Setup and Installation

### Prerequisites

You need the following installed on your machine or accessible online:

1.  **Node.js** (v18+) and **npm**
2.  A **MongoDB** database (Local instance or Atlas URI)
3.  A **dedicated Upstash Redis instance** (required for rate limiting functionality, as it uses the Upstash REST API).

### Step 1: Clone the Repository

```bash
git clone https://github.com/deus-tll/memo_pad.git
cd memo_pad
```

### Step 2: Configure Environment Variables

Create a file named **.env** inside the **backend/** directory and fill it with your credentials:

```bash
# Backend Configuration
PORT=3001
MONGO_URI=<Your_MongoDB_Connection_String>

# Upstash Rate Limiting Configuration
UPSTASH_REDIS_REST_URL=<Your_Upstash_Redis_URL>
UPSTASH_REDIS_REST_TOKEN=<Your_Upstash_Redis_Token>
RATE_LIMIT_KEY=my-rate-limit
RATE_LIMIT_AMOUNT_OF_REQUESTS=100
RATE_LIMIT_AMOUNT_OF_SECONDS=60 s

NODE_ENV=development
```

### Step 3: Install Dependencies

Run the following command from the root directory. This script installs dependencies for both **backend** and **frontend**.

```bash
npm run devBuild
```

### Step 4: Run the Application

Start the backend server and the frontend development server:

```bash
# Start Backend in development mode (using nodemon)
npm run dev --prefix backend

# In a separate terminal, start Frontend development server (using vite)
npm run dev --prefix frontend
```
The application will be available at **http://localhost:5173/**.

---


## 🛠️ Build and Production

To build the application for production deployment (e.g., on Render, as configured):

### Step 1: Run the build script from the root:

```bash
npm run build
```

This command installs dependencies and creates the optimized frontend build (**frontend/dist**).

### Step 2: Run the production server:

```bash
npm start
```

This command executes **npm run start --prefix backend**, which in turn starts the Express server using **node src/server.js**. The Express server is configured to serve the static assets from the **frontend/dist** directory in production mode.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m "feat: Add new feature"`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## 📄 License

Distributed under the **ISC License**.