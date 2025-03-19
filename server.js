const express = require("express");
const path = require("path");
 
const app = express();
const PORT = 4500;
 
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