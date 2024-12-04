const multer = require('multer');
const path = require('path');

// Configuração do Multer para o upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Define a pasta onde o arquivo será armazenado
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Define o nome do arquivo (adiciona timestamp para evitar nomes duplicados)
  },
});

const upload = multer({ storage });

module.exports = upload;
