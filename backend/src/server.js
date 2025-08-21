import "dotenv/config";
import express from "express";

import connectDB from "./config/db.js";
import notesRouter from "./routers/notes.js"
import rateLimiter from "./middleware/rateLimiter.js";
import apiErrorHandler from "./middleware/apiErrorHandler.js";

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);
app.use(apiErrorHandler);

// Routes
app.use("/api/notes", notesRouter);

// Connection to the database and server launch
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});