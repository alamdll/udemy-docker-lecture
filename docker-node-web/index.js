const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Jancok');
});

app.listen(8080, () => {
    console.log("Listening port 8080")
})