const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// TODO
// criar uma rota para criar uma norma, validando os dados e salvando no banco de dados.
// listagem de normas
// visualizar pdf na nuvem e link externo, código, titulo, organismo, data de publicação, data de inicio, data de atualização, data de cadastro, em vigor,
// area de negocio, departamento, pessoas interessadas e objetivo

/**
 * NR3 - https://sit.trabalho.gov.br/portal/images/SST/SST_normas_regulamentadoras/NR-03-atualizada-2019.pdf
 * NR5 - https://sit.trabalho.gov.br/portal/images/SST/SST_normas_regulamentadoras/NR-05.pdf
 * nr6 - https://sit.trabalho.gov.br/portal/images/SST/SST_normas_regulamentadoras/NR-06.pdf
 */

const normas = [
	{
		codigo: 'NR3',
		titulo: 'NR3 - COntrole de segurança interna',
		link: 'https://sit.trabalho.gov.br/portal/images/SST/SST_normas_regulamentadoras/NR-03-atualizada-2019.pdf',
		organismo: 'Federal',
		dataPublicacao: '01/03/2020',
		dataAtualizacao: '20/03/2020',
		emVigor: true,
		departamento: 'Segurança',
		objetivo: 'Garantir a segurança dos colaboradores.'
	},
	{
		codigo: 'NR5',
		titulo: 'NR5 - COntrole de segurança interna',
		link: 'https://sit.trabalho.gov.br/portal/images/SST/SST_normas_regulamentadoras/NR-05.pdf',
		organismo: 'Federal',
		dataPublicacao: '01/03/2020',
		dataAtualizacao: '20/03/2020',
		emVigor: true,
		departamento: 'Segurança',
		objetivo: 'Garantir a segurança dos colaboradores.'
	}
]

app.get('/', (req, res) => {
	return res.json(normas);
});

app.get('/:codigo', (req, res) => {
	const codigo = req.params.codigo;
	const norma = normas.filter(n => n.codigo == codigo )
	return res.json(norma[0]);
});

app.listen(3003, () => console.log('3003 SIGO - NORMAS RODANDO!'))