
const http = require('http');

const PORT = 8080;

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/dados') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': 'https://fuzzy-acorn-x5j4q776xp4726v9-3000.app.github.dev'
    });

    res.end(JSON.stringify({
      matricula: '2026108321',
      status: 'dados_sensiveis'
    }));

    return;
  }

  res.writeHead(404, {
    'Content-Type': 'application/json; charset=utf-8'
  });

  res.end(JSON.stringify({
    erro: 'Nao encontrado'
  }));
}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
});
