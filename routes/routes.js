const router = require("express").Router();
const user = require("../controllers/user.controllers");



router.post("/registrarusuario", user.registrarUsuario);

router.post("/loguear", user.loguear);

router.post("/testafinidaduser", user.testAfinidadUser)

router.post("/registrarcoliving", user.registrarColiving)

router.post("/formbusqueda", user.testAfinidadUser)



module.exports = router;