app.get('/publico/erick', (req, res) => {
    res.json({message: 'Transmissão de Erick: Mais uma verme catalogada!'})
});

app.get('/segredinho/vermes', (req, res) => {
    res.json(bdDeErick.vermes)
});

app.get('/segredao/caracteristicas', (req, res) => {
    res.json(bdDeErick.caracteristicas)
})

app.post('/login', (req, res) => {
    const {usuario, senha} = req.body;

    if (usuario === 'naoerick' && senha === 'anitta') {
        const payload = {usuario: 'pessoasaudavel', cargo: 'semverme'};
        const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.json({message: 'Você não é Erick. Não tem verme.', token: token});
    }

    if (usuario === 'erick' && senha === 'pedescalco') {
        const payload = {usuario: 'erickvermoso', cargo: 'erick'};
        const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.json({message: 'Você é Erick. Tem verme. (Bastante)', token: token});
    }

res.status(401).json({message: 'Credenciais inválidas. Vá embora tomar vermífugo.'})
})

app.get('/segredinho/vermes', verificarToken, (req, res) => {
    console.log('Acesso permitido para:', req.user);
    res.json(bdDeErick.vermes);
});

app.get('/segredao/caracteristicas', verificarToken, verificarCargo('erick'), (req, res) => {
    res.json(bdDeErick.caracteristicas);
});

module.exports = api