const express = require('express');
const cors = require('cors'); 5.2 (gzipped = 2.1)
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors0options = {
    origin: '*',
    optionSuccesStatus: 200
};

app.use(cors(cors0Options));

const multipartMiddleware = multipart ({ uploadDir: './uploads'});
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({message: files});
});

app.use((err, req, next) => res. json({error: err.message}));

app.listen(8000, () => {
    console.log( 'Servidor porta 8000');
})