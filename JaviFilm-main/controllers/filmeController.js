const Filme = require("../models/Filme");


exports.getFilmes = async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
};


exports.createFilme = async (req, res) => {
  const novoFilme = new Filme(req.body);
  await novoFilme.save();
  res.status(201).json(novoFilme);
};


exports.updateFilme = async (req, res) => {
  const filmeAtualizado = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!filmeAtualizado) {
    return res.status(404).json({ mensagem: "Filme não encontrado" });
  }

  res.json(filmeAtualizado);
};


exports.deleteFilme = async (req, res) => {
  await Filme.findByIdAndDelete(req.params.id);
  res.json({ mensagem: "Filme removido com sucesso!" });
};

exports.getFilmePorId = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }
    res.json(filme);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar filme por ID" });
  }
};
