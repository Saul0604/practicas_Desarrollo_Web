const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let productos = [
        {
            nombre: "producto1",
            precio: 200,
        },
        {
            nombre: "producto2",
            precio: 300
        },
        {
            nombre: "producto3",
            precio: 400
        }
    ];

    let htmlContent = '<table border="1" width="100%">'

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                let htmlContent = '<table border="1" width="100%">'

                data.forEach((producto,indice) => {
                    htmlContent += `<tr>
                                        <td>${producto.title}</td>
                                        <td>${producto.price}</td>
                                    </tr>`;
                });
                res.send(htmlContent);

            })

    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});