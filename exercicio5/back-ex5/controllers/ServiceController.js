const Service = require("../models/Service");

module.exports = class ServiceController {
    static async cadastrarService(req, res) {
        const data = req.body;
        console.log('Data', data)
        const service = {
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao,
            duracao: data.duracao,
            status: data.status,
        };

        try {
            const criar = await Service.create(service);
            console.log("Callback da Criação de Serviço", criar);
            return res
                .json({ message: "Sucesso ao criar serviço!", status: 201 })
                .status(201);
        } catch (error) {
            console.log(error);
            return res
                .json({ message: "Erro ao criar serviço!", status: 500 })
                .status(500);
        }
    }

    static async listarServices(req, res) {
        try {
            const services = await Service.findAll();
            return res.json(services).status(200);
        } catch (error) {
            console.log(error);
            return res.json(error).status(500);
        }
    }

    static async procurarService(req, res) {
        const idService = req.params.id;

        try {
            const service = await Service.findByPk(idService);
            return res.json(service);
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    static async atualizarService(req, res) {
        const idService = req.params.id;
        const data = req.body;
        console.log('Data', data)
        if (!data.nome) {
            return res
                .json({ message: "Por favor, adicione um nome!", status: 500 })
                .status(500);
        } else if (!data.preco) {
            return res
                .json({ message: "Por favor, adicione um preço!", status: 500 })
                .status(500);
        } else if (!data.descricao) {
            return res
                .json({ message: "Por favor, adicione uma descrição!", status: 500 })
                .status(500);
        } else if (!data.status) {
            return res
                .json({ message: "Por favor, adicione o status do serviço!", status: 500 })
                .status(500);
        }

        try {
            await Service.update(
                {
                    nome: data.nome,
                    preco: data.preco,
                    descricao: data.descricao,
                    status: data.status,
                },
                {
                    where: {
                        id_servico: idService,
                    },
                }
            );
            return res
                .json({ message: "Serviço atualizado com sucesso!" })
                .status(200);
        } catch (error) {
            console.log(error);
            return res
                .json({ message: "Erro ao atualizar o serviço!", error })
                .status(500);
        }
    }

    static async alterarStatusService(req, res) {
        const idService = req.params.id;

        try {
            const service = await Service.findByPk(idService);

            if (!service) {
                return res
                    .json({ message: "Serviço não encontrado!", status: 404 })
                    .status(404);
            }

            const novoStatus = !service.status;

            await Service.update(
                {
                    status: novoStatus,
                },
                {
                    where: {
                        id_servico: idService,
                    },
                }
            );

            console.log("Status do serviço alterado com sucesso!");
            return res
                .json({ message: "Status do serviço alterado com sucesso!", status: 200 })
                .status(200);
        } catch (error) {
            console.log(error);
            return res
                .json({ message: "Erro ao alterar o status do serviço!", status: 500 })
                .status(500);
        }
    }
};
