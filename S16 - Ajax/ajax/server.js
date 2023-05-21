const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))   // pasta atual serve os arquivos estaticos
app.use(bodyParser.urlencoded({ extended: true}))   //obedece requisições do tipo submit formulário e transforma em objeto
app.use(bodyParser.json())  //aplica nas requisições JSON, transformando-as em objeto

//  app.get('/teste', (req, res) => res.send('Ok')) respondera a requisições do tipo GET quando o caminho for ./teste  

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file,callback){
        callback(null,'./upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') //imput da requisição no html

app.post('/upload', (req,res) =>{
    upload(req, res, err =>{
        if (err){ return res.end("Ocorreu um erro")}
        res.end('Concluido com sucesso')
    })
}) 

app.listen(8080,() => console.log("Executando..."))