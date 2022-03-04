const router = require("express").Router();
const user = require("../controllers/user.controllers");



router.post("/register", user.register)


module.exports = router;