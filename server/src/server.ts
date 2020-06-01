import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuarios');

    res.json([
        'Hello NLW',
        'Hello Coder!'
    ]);
});

app.listen(3333);