import express from "express";
import matriculaController from "./src/controllers/matricula-controller.js";
import bancoDeDadosMatricula from "./src/database/db-sigint-export.js";
//import bdm from "./src/database/db-sigint-export.js";
import cors from 'cors';

const app = express()
app.use(cors())

app.use(express.json())
matriculaController(app, bancoDeDadosMatricula)
export default app
