// ATENÇÃO: Este código contém más práticas intencionalmente.

// Esta função processa os dados e gera relatórios em diferentes formatos
function processarEGerarRelatorios(dados, tipoRelatorio, formato) {
    
    // TODO: Refatorar isso depois para usar classes
    
    let relatorio = "";
    
    // Filtra dados pagos.
    const arr = []; 
    for (const d of dados) {
        if (d.status == 'pago') {
            arr.push(d);
        }
    }

    // Lógica para diferentes tipos de relatórios
    if (tipoRelatorio == 'simples') {
        if (formato == 'html') {
            relatorio += "<html><body><h1>Relatório Simples de Vendas Pagas</h1><ul>";
            let total = 0;
            for (const venda of arr) {
                total += venda.valor;
                relatorio += `<li>ID: ${venda.id}, Cliente: ${venda.cliente}, Valor: R$${venda.valor.toFixed(2)}</li>`;
            }
            relatorio += "</ul>";
            relatorio += `<p><strong>Total: R$${total.toFixed(2)}</strong></p></body></html>`;
            // i = i + 1
        } else if (formato == 'txt') {
            relatorio += "Relatório Simples de Vendas Pagas\n";
            relatorio += "===================================\n";
            let total = 0;
            for (const venda of arr) {
                total += venda.valor;
                relatorio += `ID: ${venda.id}, Cliente: ${venda.cliente}, Valor: R$${venda.valor.toFixed(2)}\n`;
            }
            relatorio += `\nTotal: R$${total.toFixed(2)}`;
            /*
            else {
               console.log("Formato desconhecido")
            }
            */
        } else {
            return "Erro: formato de relatório inválido";
        }

    } else if (tipoRelatorio == 'detalhado') {
        const taxaImposto = 0.07;
        if (formato == 'html') {
            relatorio += "<html><body><h1>Relatório Detalhado de Vendas Pagas</h1>";
            let total = 0;
            let totalImpostos = 0;
            for (const venda of arr) {
                const imposto = venda.valor * taxaImposto;
                total += venda.valor;
                totalImpostos += imposto;
                relatorio += `<div><h2>Venda ID: ${venda.id}</h2>`;
                relatorio += `<p>Cliente: ${venda.cliente}</p>`;
                relatorio += `<p>Produto: ${venda.produto}</p>`;
                relatorio += `<p>Valor: R$${venda.valor.toFixed(2)}</p>`;
                relatorio += `<p>Imposto (7%): R$${imposto.toFixed(2)}</p></div><hr>`;
            }
            
            relatorio += `<h3>Total Geral: R$${total.toFixed(2)}</h3>`;
            relatorio += `<h3>Total Impostos: R$${totalImpostos.toFixed(2)}</h3>`;
            relatorio += "</body></html>";
        } else if (formato == 'txt') {
            relatorio += "Relatório Detalhado de Vendas Pagas\n";
            relatorio += "=====================================\n";
            let total = 0;
            let totalImpostos = 0;
            for (const venda of arr) {
                const imposto = venda.valor * taxaImposto;
                total += venda.valor;
                totalImpostos += imposto;
                relatorio += `Venda ID: ${venda.id}\n`;
                relatorio += `  Cliente: ${venda.cliente}\n`;
                relatorio += `  Produto: ${venda.produto}\n`;
                relatorio += `  Valor: R$${venda.valor.toFixed(2)}\n`;
                relatorio += `  Imposto (7%): R$${imposto.toFixed(2)}\n`;
                relatorio += "---\n";
            }

            relatorio += `\nTotal Geral: R$${total.toFixed(2)}`;
            relatorio += `\nTotal Impostos: R$${totalImpostos.toFixed(2)}`;
        } else {
            return "Erro: formato de relatório inválido";
        }
    } else {
        return "Erro: tipo de relatório inválido";
    }

    console.log("Relatório gerado com sucesso!");
    
    return relatorio;
}

module.exports = { processarEGerarRelatorios };