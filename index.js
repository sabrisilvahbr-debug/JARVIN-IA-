const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { email: "admin@jarvin.ai", password: "123456", ativo: true }
];

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ success: false });
  }

  res.json({ success: true });
});

// ANALISE
app.get("/analyze", (req, res) => {
  res.json({
    signal: "COMPRA",
    probability: 82,
    risk: "MÉDIO",
    analysis: "Tendência de alta confirmada"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando");
});
