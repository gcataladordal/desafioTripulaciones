const router = require("express").Router();
const user = require("../controllers/user.controllers");
const verificarToken = require("../middlewares/verificarToken")


router.post("/registrarusuario", user.registrarUsuario);

router.post("/loguear", user.loguear);

router.get("/obtieneinfo", verificarToken, user.obtenerInfoUser )


router.post("/testafinidaduser", user.testAfinidadUser)

router.post("/registrarcoliving", user.registrarColiving)

router.post("/busquedacoliving", user.busquedaColiving)

router.post("/busquedausuario", user.busquedaUsuario)

router.get("/busquserscomp", user.busquedaUsuariosCompatibles)

router.get("/infocompatibledb", verificarToken, user.busquedaCompatiblesDb)

router.post("/prueba", user.prueba)

module.exports = router;