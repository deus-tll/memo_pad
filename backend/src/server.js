import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";
import notesRouter from "./routers/notes.js"
import rateLimiter from "./middleware/rateLimiter.js";
import apiErrorHandler from "./middleware/apiErrorHandler.js";

const PORT = process.env.PORT || 3001;
const __dirname = path.resolve();

const app = express();

// Middleware
if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);
app.use(apiErrorHandler);

// Routes
app.use("/api/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// Connection to the database and server launch
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});