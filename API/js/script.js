const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='10-21-2025'&$top=1&$format=json";

fetch(url)
    .then(response => {
        if (!response.ok) throw new Error("Erro na requisição");
        return response.json();
    })
    .then(data => {
        console.log(data);
        const valorDolar = data.value[0].cotacaoCompra;
        document.getElementById("valor").textContent = `Dólar: R$ ${valorDolar}`;
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("valor").textContent = "Erro ao carregar a cotação";
    });