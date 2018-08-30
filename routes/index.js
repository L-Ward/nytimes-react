const path = require("path");
const router = require("express").Router();

const articleController = require('../controllers/articleController')

// Saved Routes
router.route('/saved')
.get(articleController.findAll)
.post(articleController.create)
.delete(articleController.remove)

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;