// data server
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

app.use(express.static("public"));
app.set("view engine", "ejs");

const passengers = [
    {
        name: "Joyce",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Brock",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Eve",
        flightNumber: 7859,
        time: "18h00",
    },
];

app.get('/', (request, response) => {

    const filePath = path.join(__dirname, "./views/print.ejs")
    ejs.renderFile(filePath, { passengers }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
    
        // enviar para o navegador
        return response.send(html)
    })
//    response.render("index")
})

app.listen(3000, () => console.log('The server is running on port 3000'))