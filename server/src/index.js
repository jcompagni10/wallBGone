import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { parse } from 'node-html-parser';


const app = express();
const PORT = 3000;
const URL = "https://www.theatlantic.com/politics/archive/2024/04/donald-trump-court-contempt-juan-merchan/678242/";
app.use(cors());


function getArchiveBody(htmlString){
    const html = parse(htmlString);

    let innerContent = html.getElementById("CONTENT");
    let newHTML = html.querySelector("body").set_content(innerContent);


    return newHTML.toString();



}

function fetchArchive(url){

    console.log(`fetching: ${url}`);

    return fetch("http://archive.is/latest/"+url, {
        method: 'GET',
    })
        .then(resp=>resp.text())
        .then(getArchiveBody);
}

app.get('/', async (req, res) => {
    console.log(`query: ${JSON.stringify(req.query)}`);
    let data = await fetchArchive(req.query.url);

    res.send(data);

});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
