const fs = require('fs');
const path = require('path');
const upload = require('./middleware/multerConfig'); // Aqui é onde você configura o multer para upload
const authMiddleware = require('./middleware/auth.middleware'); // Importa o middleware de autenticação

const setupImageRoutes = (app) => {
  // Rota para fazer o upload de imagens (Protegida)
  app.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
    res.status(201).send({ file: req.file });
  });

  // Rota para buscar uma imagem específica pelo nome do arquivo (Protegida)
  app.get('/file/:filename', authMiddleware, async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      if (!file) return res.status(404).send('Arquivo não encontrado');

      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Rota para listar todas as imagens no banco de dados (Protegida)
  app.get('/files', authMiddleware, async (req, res) => {
    try {
      const files = await gfs.files.find().toArray();
      res.status(200).send(files);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Rota para ler imagens de uma pasta local e fazer o upload (Protegida)
  app.post('/upload-folder', authMiddleware, async (req, res) => {
    const folderPath = path.join(__dirname, 'uploads');//busca as imagens da pasta uploads

    try {
      const files = fs.readdirSync(folderPath);
      for (const file of files) {
        const filePath = path.join(folderPath, file);

        const readStream = fs.createReadStream(filePath);
        const writeStream = gfs.createWriteStream({
          filename: file,
          bucketName: 'uploads',
        });

        readStream.pipe(writeStream);
      }

      res.status(201).send('Imagens enviadas para o MongoDB com sucesso');
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
};


module.exports = { setupImageRoutes };
