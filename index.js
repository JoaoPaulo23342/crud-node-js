import express from 'express';
import bodyParser from "body-parser";

const app = express();

import usersRoutes from "./routes/UsuariosRoutes.js";
app.use(bodyParser.json());

app.use("/profissionais", usersRoutes);


app.get("/", (req, res) => {
    res.send("Bem vindo a nossa API de disponibilidade de profissionais da saúde")
})

app.listen(3000, () => console.log("servidors executando na porta 3000"));



