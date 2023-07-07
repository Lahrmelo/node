// const http = require('http')
// const PORT = 5000

// Atividade 1:
// const server = http.createServer((req, res)=>{
//     res.write('Olá, Mundo!')
//     res.end()
// })

// ---------------------------------------------------------------------------------------------
// Atividade 2: 
// const server = http.createServer((req, res)=>{
//         if(req.url === '/home'){
//             res.writeHead(200 , {'Content-Type':'text/plan'})
//             res.write('Bem-vindo à página inicial!')
//             res.end()
//         } else if(req.url === '/about'){
//             res.writeHead(200 , {'Content-Type':'text/plan'})
//             res.write('Sobre nós: somos uma empresa dedicada a...')
//             res.end()
//         }
//     })

// -------------------------------------------------------

// server.listen(PORT, ()=>{
//     console.log(`Servidor rodando na porta ${PORT}✌️`)
// })