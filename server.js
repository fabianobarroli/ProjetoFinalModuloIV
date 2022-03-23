import app from './app.js';
import { Express } from 'express';

const app = express()
const port  = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('<h1>Para maiores informaões acesse <a>https://github.com/fabianobarroli/ProjetoFinalModuloIV</a> </h1>')
})

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})