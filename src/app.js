import { Express } from "express";
import matriculaController from "./controllers/matricula-controller.js";
import generalMiddeleware from "./middleware/genera-middleware";
import bancodedadosmatricula from "./database/db-sigint-export.js";
import bdm from "./database/db-sigint-export.js";
import cors from 'cors';

app.use(cors())
const app = express()
app.use(express.json())
generalMiddeleware(app)
matriculaController(app, bdm)
export default app
