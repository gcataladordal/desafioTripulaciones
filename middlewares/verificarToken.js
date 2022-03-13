const jwt = require("jsonwebtoken");
const SECRET = "D3s4F10gRuP0uN0"

const verificarToken = (req, res, next) => {

    const token = req.headers["authorization"];

    if (!token) {
        res.json({status:false})
    } else {

        const separarToken = token.split(" ")[1];

        const descodificado = jwt.verify(separarToken, SECRET)

        req.idUsuario = descodificado.id;
        req.token = separarToken;

        next();

    }


}

module.exports = verificarToken