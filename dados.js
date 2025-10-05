// Este arquivo simula o acesso a uma fonte de dados (ex: banco de dados, API).

function getDados() {
    // Retorna um array de objetos representando as vendas.
    const dadosVendas = [
        { id: 1, cliente: 'Empresa A', produto: 'Produto 1', valor: 150.75, data: '2025-10-01', status: 'pago' },
        { id: 2, cliente: 'Empresa B', produto: 'Produto 2', valor: 99.90, data: '2025-10-01', status: 'pendente' },
        { id: 3, cliente: 'Empresa A', produto: 'Produto 2', valor: 105.00, data: '2025-10-02', status: 'pago' },
        { id: 4, cliente: 'Empresa C', produto: 'Produto 3', valor: 230.00, data: '2025-10-03', status: 'pago' },
        { id: 5, cliente: 'Empresa B', produto: 'Produto 1', valor: 150.75, data: '2025-10-04', status: 'cancelado' },
        { id: 6, cliente: 'Empresa A', produto: 'Produto 3', valor: 240.50, data: '2025-10-05', status: 'pago' },
    ];
    return dadosVendas;
}

module.exports = { getDados };