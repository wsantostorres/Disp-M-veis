// Importação
const express = require('express');
const AuthRoutes = require('./routes/AuthRoutes');
const { tokenValidated } = require('./auth');

// Configuração
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json())

// Main
app.use(AuthRoutes)

// Protegendo rotas com token
app.use('*', tokenValidated)

// rota privada teste
app.get('/private', (req, res) => {
    const user = req.user;
    return res.status(200).json({
        message: "OK",
        data: {
            userLogged: user
        }
    })
})

// Listen
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});