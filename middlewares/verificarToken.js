const jwt = require("jsonwebtoken");
const SECRET = "D3s4F10gRuP0uN0"

const verificarToken = (req, res, next) => {

    const token = req.headers["authorization"];

    if (!token) {
        res.json({ auth: false })
    } else {

        const separarToken = token.split(" ")[1];

        jwt.verify(separarToken, SECRET, function (err, descodificado) {
            if (err) {
                return res.json({ auth: false });
            } else {
                req.idUsuario = descodificado.id;
                req.token = separarToken;

                next();
            }
        })
    
    }


}
module.exports = verificarToken