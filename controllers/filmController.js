const connection = require('../database/connection');

function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'database failed' })
        res.json(results)
    })
}

function show(req, res) {
    const id = req.params.id;
    const sql = 'SELECT * FROM movies WHERE id=?';
    const reviewSql = 'SELECT * FROM reviews WHERE movie_id=?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'failed' });
        if (results.length === 0) return res.status(404).json({ error: 'movie not found' });
        const movie = results[0];
        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'failed' });
            movie.reviews = reviewResults;
            res.json(movie);
        });
    });
}

const storeReview = (res, req) => {
    const movieId = Number(req.params.id)
    const { name, vote, text } = req.body
    const query = "INSERT INTO reviews (movie_id, name, rating, text) VALUES (?,?,?,?)"
    console.log(movieId, name, text, rating)
    connection.query(sql, [movieId, name, text, rating], (err, reaults) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.status(201).json({ message: "review create" })
    })
}

module.exports = { index, show };