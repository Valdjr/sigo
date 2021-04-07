const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// TODO
// criar uma rota de login, que verificar no banco de dados
// se os dados são verdadeiros => retorna erro = false
// se os dados são falsos => retornar erro = true

app.post('/', (req, res) => {
	const {email, senha} = req.body;
	if (email && senha) {
		return res.json({error: false}).send();
	}
	return res.json({token: 'teste123'}).send();

})

app.listen(3001, () => console.log('3001 SIGO - AUTH RODANDO!'))