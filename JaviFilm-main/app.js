const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const filmeRoutes = require("./routes/filmeRoutes");

const app = express();
const PORT = 5000;

// Conexão com MongoDB Atlas
mongoose
  .connect("mongodb+srv://admin:admin123@cluster0.trl4qcx.mongodb.net/javifilms?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas com prefixo /api
app.use("/api/filmes", filmeRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
