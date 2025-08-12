
// function verificarToken(req, rest, next){
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split('')[1];

//     if (!token){
//         return rest.status(401).json({message: 'Acesso negado. Token não fornecido.'})
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return rest.status(403).json({message:'Token inválido ou expirado.'})
//         }
//         req.user = decoded;
//         next()
//     })
// }

// module.exports = middleware