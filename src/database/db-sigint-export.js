import sqlite3 from 'sqlite3'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + 'bancoDeDadosMatricula.db'
const bdm = new sqlite3.Database(filePath);

process.on('SIGINT', ()=> 
    bdm.close(()=>{
        console.log('BDM fechado!');
        process.exit(0);
    })
);

export default bdm