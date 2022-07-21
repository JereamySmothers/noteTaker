// npm packages
const path = require("path");
const router = require("express").Router();

// connects to index
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// connects to notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;