const router = require("express").Router();
const user = require("../controllers/user.controllers");



router.post("/registrarusuario", user.registrarUsuario);

router.post("/loguear", user.loguear);

router.post("/testafinidaduser", user.testAfinidadUser)

router.post("/registrarcoliving", user.registrarColiving)

router.post("/busquedacoliving", user.busquedaColiving)

router.post("/busquedausuario", user.busquedaUsuario)



module.exports = router;