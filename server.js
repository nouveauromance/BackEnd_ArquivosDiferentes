const express = require("express");
const path = require("path");
 
const app = express();
const PORT = 4800;
 
// servir arquivos estáticos (HTML)
app.use(express.static("public"));
 
// rotas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
 
app.get("/saibamais", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/saibamais.html'));
});
 
app.get("/imc", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "imc.html"));
});
 
app.get("/ppt", (req, res) => {
    res.sendFile(path.join(__dirname, "arquivos", "apresentacao.pptx"));
});
 
app.get("/json", (req, res) => {
    res.sendFile(path.join(__dirname, "arquivos", "dados.json"));
});
 
app.get("/livro", (req, res) => {
    res.sendFile(path.join(__dirname, "arquivos", "livro.pdf"));
});
 
// iniciar servidor
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// rota para calcular IMC
app.get('/imc', (req, res) => {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);
    
    if (!peso || !altura) {
        return res.status(400).json({ erro: 'Informe peso e altura na URL (ex: /imc?peso=70&altura=1.75)' });
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    res.json({ peso, altura, imc: imc.toFixed(2), classificacao });
});

// rota para calcular a média de notas
app.get('/notas', (req, res) => {
    const p1 = parseFloat(req.query.p1);
    const p2 = parseFloat(req.query.p2);
    
    if (!p1 || !p2) {
        return res.status(400).json({ erro: 'Informe p1 e p2 na URL (ex: /notas?p1=7&p2=8)' });
    }

    const media = (p1 + p2) / 2;
    const situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

    res.json({ p1, p2, media: media.toFixed(2), situacao });
});

// rota para conversão de real para dólar
app.get('/dolar', (req, res) => {
    const reais = parseFloat(req.query.r);
    const dolar = parseFloat(req.query.d);

    if (!reais || !dolar) {
        return res.status(400).json({ erro: 'Informe r (reais) e d (valor do dólar) na URL (ex: /dolar?r=100&d=5.20)' });
    }

    const convertido = reais / dolar;

    res.json({ reais, dolar, convertido: convertido.toFixed(2) });
});
