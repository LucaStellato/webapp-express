function notFound(res) {
    res.status(404)
    res.json({
        error: 'page not found',
        message: 'page not found'
    })
}
module.exports = notFound