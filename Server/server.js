const express = require('express');
const cors = require('cors');
const Details = require('./Details');
const app = express();
const port = 5000 || process.env.PORT; //.env used to store password


app.use(cors());//cross origin resourses sharing policy

app.get('/', (req, res) => {
    res.json(Details).status(200);
    res.end();
});

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})