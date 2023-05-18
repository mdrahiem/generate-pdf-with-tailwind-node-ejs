const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

app.use(express.static("public"));
app.set("view engine", "ejs");

const pdfContent = {
    heading: "We cannot solve our problems with the same thinking we used when we created them.",
    name: "Albert Einstein",
    description: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
};

app.get('/', (_, response) => {

    const filePath = path.join(__dirname, "./views/index.ejs")
    ejs.renderFile(filePath, { pdfContent }, (err, html) => {
        if(err) {
            return response.send('Error while starting the server', err)
        }
        return response.send(html)
    })
})

app.listen(3000, () => console.log('The server is running on port 3000'))