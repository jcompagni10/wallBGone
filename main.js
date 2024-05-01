function removeScriptTags(htmlString) {
    // Create a new DOMParser instance
    const parser = new DOMParser();

    // Parse the HTML string into a DOM Document
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Find all script elements in the document
    const scripts = doc.getElementsByTagName('script');

    // Remove all script elements
    while (scripts.length > 0) {
        scripts[0].parentNode.removeChild(scripts[0]);
    }

    // Serialize the Document back into a string
    // Using XMLSerializer to convert the document to a string
    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
}


function getArchiveBody(htmlString){
        const parser = new DOMParser();

    // Parse the HTML string into a DOM Document
    return parser.parseFromString(htmlString, 'text/html');

}



function fetchArchive(url){

    return fetch("http://archive.is/latest/"+url, {
        method: 'GET',
    })
        .then(response.text())
        .then(getArchiveBody)
}



fetchArchive(location.href)
    .then(html=>document.doucmentElement = html)

// fetch(location.href, {
//     method: 'GET',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
//     }
// })
//     .then(response => response.text()) // Process the response as text
//     .then(html => {
//         let newHTML = removeScriptTags(html);
//         document.doucmentElement.innerHTML = newHTML;
//         console.log(newHTML);
//     } )
//     .catch(error => console.error('Error fetching the data:', error));
