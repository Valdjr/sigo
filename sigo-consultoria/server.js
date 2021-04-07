const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const consultorias = [
	{
		codigo: '1',
		empresa: 'Avalanche Consultoria',
		objetivo: 'Garantir a segurança dos colaborades.',
		plano: [
			{
				data: '20/10/2021',
				norma: 'NR3',
				acao: 'Inicio das votações para da CIPA, votação e escolha dos mais votados.'
			},
			{
				data: '20/12/2021',
				norma: 'NR3',
				acao: 'Treinamento com o time de colaboradores e gestão.'
			}
		]
	},
	{
		codigo: '2',
		empresa: 'Snowball Consultoria',
		objetivo: 'Garantir a segurança dos colaborades.',
		plano: [
			{
				data: '20/10/2021',
				norma: 'NR5',
				acao: 'Inicio das votações para da CIPA, votação e escolha dos mais votados.'
			},
			{
				data: '20/12/2021',
				norma: 'NR5',
				acao: 'Treinamento com o time de colaboradores e gestão.'
			}
		]
	}
]

app.post('/:codigo', (req, res) => {
	const codigo = req.params.codigo;
	const consultoria = consultorias.filter(c => c.codigo == codigo )[0]
	const plano = req.body;
	if (plano.data && plano.norma && plano.acao) {
		consultoria.plano.push(plano)
		return res.json({error: false});
	}
	return res.status(400).json({error: true});
});

app.get('/', (req, res) => {
	return res.json(consultorias);
});

app.get('/:codigo', (req, res) => {
	const codigo = req.params.codigo;
	const consultoria = consultorias.filter(c => c.codigo == codigo )
	return res.json(consultoria[0]);
});

app.listen(3002, () => console.log('3002 SIGO - CONSULTORIAS RODANDO!'))