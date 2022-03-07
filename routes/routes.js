const router = require("express").Router();
const user = require("../controllers/user.controllers");



router.post("/registrar", user.registrar);

router.post("/loguear", user.loguear);



module.exports = router;