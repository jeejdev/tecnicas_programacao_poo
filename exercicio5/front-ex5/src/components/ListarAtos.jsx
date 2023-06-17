import React, { useState, useEffect } from 'react';
import { Navbar } from "./Navbar";

const HistoricoListagem = () => {
    const [historicoSelecionado, setHistoricoSelecionado] = useState('');

    const [historicoProdutos, setHistoricoProdutos] = useState([]);
    const [historicoServicos, setHistoricoServicos] = useState([]);
    const [historicoPets, setHistoricoPets] = useState([]);

    const [clientes, setClientes] = useState({});
    const [produtos, setProdutos] = useState({});
    const [servicos, setServicos] = useState({});
    const [pets, setPets] = useState({});

    useEffect(() => {
        if (historicoSelecionado === 'Histórico Produtos') {
            fetchHistoricoProdutos();
        } else if (historicoSelecionado === 'Histórico Serviços') {
            fetchHistoricoServicos();
        } else {
            fetchHistoricoPets();
        }
    }, [historicoSelecionado]);

    useEffect(() => {
        fetchClientes();
        fetchProdutos();
        fetchPets();
        fetchServicos();
    }, []);

    const handleInputChange = (event) => {
        setHistoricoSelecionado(event.target.value);
    };

    const fetchHistoricoProdutos = async () => {
        try {
            const response = await fetch('http://localhost:3000/purchase/listar');
            const data = await response.json();
            setHistoricoProdutos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchHistoricoServicos = async () => {
        try {
            const response = await fetch('http://localhost:3000/reqservice/listar');
            const data = await response.json();
            setHistoricoServicos(data);
            console.log(historicoServicos)
            console.log(clientes)
            console.log(servicos)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchHistoricoPets = async () => {
        try {
            const response = await fetch('http://localhost:3000/tutor/listar');
            const data = await response.json();
            setHistoricoPets(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:3000/user/listar');
            const data = await response.json();
            const clientesMap = {};

            data.forEach((cliente) => {
                clientesMap[cliente.id] = cliente.nome;
            });

            setClientes(clientesMap);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProdutos = async () => {
        try {
            const response = await fetch('http://localhost:3000/product/listar');
            const data = await response.json();
            const produtosMap = {};

            data.forEach((produto) => {
                produtosMap[produto.id] = produto.nome;
            });

            setProdutos(produtosMap);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchServicos = async () => {
        try {
            const response = await fetch('http://localhost:3000/service/listar');
            const data = await response.json();
            const servicesMap = {};

            data.forEach((service) => {
                servicesMap[service.id] = service.nome;
            });

            setServicos(servicesMap);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPets = async () => {
        try {
            const response = await fetch('http://localhost:3000/pet/listar');
            const data = await response.json();
            const petsMap = {};

            data.forEach((pet) => {
                petsMap[pet.id] = pet.nome;
            });

            setPets(petsMap);
        } catch (error) {
            console.error(error);
        }
    };

    const renderListagem = () => {
        switch (historicoSelecionado) {
            case 'Histórico Produtos':
                if (historicoProdutos.length === 0) {
                    return <p className="mt-4">Sem histórico de produtos</p>;
                }

                return (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-center border-b">Cliente</th>
                                <th className="py-2 px-4 text-center border-b">Produto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoProdutos.map((produto) => (
                                <tr key={produto.id}>
                                    <td className="py-2 px-4 text-center border-b">{clientes[clientes.id_usuario]}</td>
                                    <td className="py-2 px-4 text-center border-b">{produtos[produtos.id_produto]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );

            case 'Histórico Serviços':
                if (historicoServicos.length === 0) {
                    return <p className="mt-4">Sem histórico de serviços</p>;
                }

                return (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Cliente</th>
                                <th className="py-2 px-4 border-b">Serviço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoServicos.map((servico) => (
                                <tr key={servico.id}>
                                    <td className="py-2 px-4 text-center border-b">{clientes[clientes.id_usuario]}</td>
                                    <td className="py-2 px-4 text-center border-b">{servicos[servicos.id_servico]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );

            case 'Histórico de Pets':

                if (historicoPets.length === 0) {
                    return <p className="mt-4">Sem histórico de pets</p>;
                }

                return (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Cliente</th>
                                <th className="py-2 px-4 border-b">Pet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoPets.map((pet) => (
                                <tr key={pet.id}>
                                    <td className="py-2 px-4 text-center border-b">{clientes[clientes.id_usuario]}</td>
                                    <td className="py-2 px-4 text-center border-b">{pets[pets.id_usuario]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );

            default:
                return null;
        }
    };


    return (
        <div>
            <Navbar />
            <select
                value={historicoSelecionado}
                onChange={handleInputChange}
                className="py-2 px-4 mt-5 border border-gray-300 rounded-md"
            >
                <option value="">Selecione o Histórico</option>
                <option value="Histórico Produtos">Histórico Produtos</option>
                <option value="Histórico Serviços">Histórico Serviços</option>
                <option value="Histórico de Pets">Histórico de Pets</option>
            </select>

            {renderListagem()}
        </div>
    );
};

export default HistoricoListagem;
