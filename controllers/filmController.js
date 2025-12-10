const connection = require('../database/connection');

function index(req, res) {
    const sql = 'SELECT * FROM movies';
    if (err) return res.status(500).json({ error: 'database failed' })
    res.json(results)
}

function show(req, res) {
    c
}


module.exports = { index }