import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3000;
const URL = "https://www.theatlantic.com/politics/archive/2024/04/donald-trump-court-contempt-juan-merchan/678242/";
app.use(cors());


function getArchiveBody(htmlString){
    const parser = new DOMParser();

    // Parse the HTML string into a DOM Document
    return parser.parseFromString(htmlString, 'text/html');

}

function fetchArchive(url){

    return fetch("http://archive.is/latest/"+url, {
        method: 'GET',
    })
        .then(resp=>resp.text());
        // .then(getArchiveBody);
}

app.get('/', async (req, res) => {
    let data = await fetchArchive(URL);
    console.log(data);

    res.send(data);

});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
