import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const postData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //pasar dato como texto
    });
    return response;
};

const data = {
    "title": "New Product Course 202",
    "price": 202,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));