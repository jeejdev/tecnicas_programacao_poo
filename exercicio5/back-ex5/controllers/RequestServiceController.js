const SolicitacaoServico = require('../models/RequestService');
const Usuario = require('../models/User');
const Servico = require('../models/Service');
const SolicitacoesServicos = require('../models/RequestService');

// Função para cadastrar um serviço solicitado por um cliente
const cadastrarSolicitacao = async (req, res) => {
    try {
        const { id_usuario, id_servico } = req.body;
        console.log('Chegou isso aqui:', id_usuario + '-' + id_servico)
        // Verificar se o usuário existe
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Verificar se o serviço existe
        const servico = await Servico.findByPk(id_servico);
        if (!servico) {
            return res.status(404).json({ message: 'Serviço não encontrado.' });
        }

        // Cadastrar a solicitação de serviço
        const solicitacao = await SolicitacaoServico.create({
            id_usuario,
            id_servico,
        });

        res.status(201).json(solicitacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar a solicitação de serviço.' });
    }
};

// Função para excluir uma solicitação de serviço
const excluirSolicitacao = async (req, res) => {
    try {
        const { id_solicitacao } = req.params;

        // Verificar se a solicitação de serviço existe
        const solicitacao = await SolicitacaoServico.findByPk(id_solicitacao);
        if (!solicitacao) {
            return res.status(404).json({ message: 'Solicitação de serviço não encontrada.' });
        }

        // Alterar o status do serviço para false
        await solicitacao.update({ status: false });

        res.status(200).json({ message: 'Solicitação de serviço excluída com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao excluir a solicitação de serviço.' });
    }
};

// Função para listar os serviços
const listarSolicitacoes = async (req, res) => {
    try {
        const servicos = await SolicitacoesServicos.findAll();
        res.status(200).json(servicos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao listar os serviços.' });
    }
};

module.exports = {
    cadastrarSolicitacao,
    excluirSolicitacao,
    listarSolicitacoes,
};