const handleProfileGet = (db) => (req, res) => {
    const { id } = req.params;
    db.select('*')
        .from('users')
        .where('id', id)
        .then(user => {
            if (user.length > 0) {
                res.json(user[0]);
            } else {
                res.status(404).json("not found");
            }
        })
}

module.exports = {
    handleProfileGet
}