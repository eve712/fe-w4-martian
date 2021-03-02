const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.use(express.static('public'))

// url routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
}); 