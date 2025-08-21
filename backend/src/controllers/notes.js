import Note from "../models/Note.js";

export const getNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // newest first

        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getNote = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await Note.findById(id);

        if (!note)
        {
            return res.status(404).json({ message: "Note not found" });    
        }

        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);

        res.status(201).json(note);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedNote)
        {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await Note.findByIdAndDelete(id);

        if (!note)
        {
            res.status(404).json({ message: "Note not found" })
        }

        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};