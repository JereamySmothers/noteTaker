// npm package and local dependency
const router = require("express").Router();
const fs = require("fs");
const note = require("../db/note");

// empty array to store notes
const notes = [];

// acquire notes via .json and return data
router.get();

// acquiring notes by id when requested
router.get();

// post or update notes
router.post();

// deletes note by id when requested
router.delete();

module.exports = router;