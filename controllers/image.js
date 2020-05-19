const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '005d53714a0242d4bf0c9d0ac680e03c'
});

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
}

const handleImage = (db) => (req, res) => {
    const { id } = req.body;
    db('users')
        .where({id: id})
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json("unable to update"))
}


module.exports = {
    handleImage,
    handleApiCall
}