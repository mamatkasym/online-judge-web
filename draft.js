const fs = require('fs');
const axios = require("axios")
const util = require("util");

let content;

axios.get('http://127.0.0.1:8000/api/problems/')
    .then(res => {
        content = res.data;
    })
    .then(() => {
        console.log(content);
        fs.writeFile('./src/data/problems.json', JSON.stringify(content, null, 4), err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    });


