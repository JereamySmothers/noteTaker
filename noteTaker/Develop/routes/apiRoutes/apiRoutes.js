// npm package and local dependency
const router = require("express").Router();
const fs = require("fs");
const note = require("../../db/note");

// empty array to store notes
let notes = [];

// acquire notes via .json and return data
router.get("/notes", (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw (err);
        notes = JSON.parse(data);
        return res.json(notes);
    });
});

// acquiring notes by id when requested
router.get("/notes/:id", (req, res) => {
    const id = req.params.id;
    fs.readFileSync('./db/db.json', (err, data) => {
        if (err) throw (err);
        notes = JSON.parse(data);
    });

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id = id) {
            return res.json(notes[i]);
        };
    };
});

// post or update notes
router.post("/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw (err);
        notes = JSON.parse(data);


        // let newNotes;
        // if (req.body.id === -1) {
        let id = notes.length + 1;
        let newNotes = { title: req.body.title, text: req.body.text, id: id };
        notes.push(newNotes);
        // } else {
        //     let newNotes = req.body;
        //     for (let i = 0; i < notes.length; i++) {
        //         if (newNotes.id === notes[i].id) {
        //             notes.splice(i, 1, newNotes);
        //         };
        //     };
        // };

        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw (err);
        });

        res.json(notes);
    });
});

// deletes note by id when requested
router.delete("/notes/:id", (req, res) => {
    let id = parseInt(req.params.id);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw (err);
        notes = JSON.parse(data);
        console.log(notes);

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes.splice(i, 1);
            };
        };

        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw (err);
        });

        res.json(notes);
    });
});

module.exports = router;