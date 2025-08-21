import "dotenv/config";
import express from "express";

import connectDB from "./config/db.js";
import notesRouter from "./routers/notes.js"

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/notes", notesRouter);

// Connection to the database and server launch
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});