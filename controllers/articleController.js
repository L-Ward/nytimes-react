const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Article.find()
        .then(dbModel => res.json(dbModel));
    },
    create: function(req, res) {
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel));
    },
    remove: function(req, res) {
        console.log(req.body);
        db.Article
        .findOneAndDelete({pkey: req.body.pkey})
        .then(dbModel => res.json(dbModel))
    }
}