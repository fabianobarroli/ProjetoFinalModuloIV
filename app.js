import { Express } from "express";
import matriculaController from "./src/controllers/matricula-controller.js";
import generalMiddeleware from "./src/middleware/genera-middleware";
import bancodedadosmatricula from "./src/database/db-sigint-export.js";
import bdm from "./src/database/db-sigint-export.js";
import cors from 'cors';

app.use(cors())
const app = express()
app.use(express.json())
generalMiddeleware(app)
matriculaController(app, bdm)
export default app
