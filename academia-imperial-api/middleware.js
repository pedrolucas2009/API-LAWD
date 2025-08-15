
function verificarToken(req, rest, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];

     if (!token){
         return rest.status(401).json({message: 'Acesso negado. Token não fornecido.'})
     }

     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
         if (err) {
             return rest.status(403).json({message:'Token inválido ou expirado.'})
        }
         req.user = decoded;
         next()
     })
     }

function verificarCargo(cargoExigido) {
    return (req, res, next) => {
        if (req.user && req.user.cargo === cargoExigido) {
            next(); //usuário é liberado a prosseguir porque tem o cargo exigido
        }
        else {
            res.status(403).json({message: 'Acesso negado. Cargo insuficiente.'});
        }
    };
}

 module.exports = middleware