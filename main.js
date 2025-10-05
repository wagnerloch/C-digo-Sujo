const fs = require('fs'); // Módulo File System do Node.js
const { getDados } = require('./dados.js');
const { processarEGerarRelatorios } = require('./processadorRelatorios.js');

function main() {
    console.log("Iniciando sistema de relatórios...");
    
    // 1. Carregar os dados
    const listaDeVendas = getDados();
    
    // 2. Gerar e exibir um relatório simples em HTML
    console.log("\n--- Gerando Relatório Simples em HTML ---");
    const relatorioHtmlSimples = processarEGerarRelatorios(listaDeVendas, 'simples', 'html');
    // Salvar em um arquivo para visualização
    try {
        fs.writeFileSync('relatorio_simples.html', relatorioHtmlSimples, 'utf-8');
        console.log("Relatório salvo em relatorio_simples.html");
    } catch (err) {
        console.error("Erro ao salvar arquivo HTML:", err);
    }

    // 3. Gerar e exibir um relatório detalhado em TXT
    console.log("\n--- Gerando Relatório Detalhado em TXT ---");
    const relatorioTxtDetalhado = processarEGerarRelatorios(listaDeVendas, 'detalhado', 'txt');
    console.log(relatorioTxtDetalhado);
    
    console.log("\nSistema finalizado.");
}

main();