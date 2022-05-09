import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import router from "./routes/index.js";

const app = express();//Cria o servidor
app.use(cors());
app.use(json());

app.use(router);

app.listen(5000, () => {
    const serverOn = chalk.hex("#F76916");//LARANJA
    console.log(serverOn.bold("Servidor em pé na porta 5000"));
});