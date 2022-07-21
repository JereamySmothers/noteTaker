class note {
    constructor(title, body) {
        this.title = title;
        this.body = body;

        note.lastId;
        this.id = note.lastId;
    }
}

// Auto-increment
note.lastId = 0;

module.exports = note;