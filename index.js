const express = require('express');
const cors = require('cors'); 
const app = express();

const {problem_router} = require('./problem_router');

app.use(cors());

app.post('/problem', express.json(), (req, res) => {
    const input = req.body.input;
    const problemId = req.body.problemId;
    const result = problem_router[`${problemId}`](input);
    res.send(result);
});

app.get('/', express.json(), (req, res) => {
    res.send("Hello Nayak! - 2");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});