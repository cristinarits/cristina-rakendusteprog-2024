const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('root')
})

app.get('/about', (req, res) => {
    res.send('about')
})

const postMiddleware = (req, res, next) => {
    console.log("The response will be sent by the next function");
    next();
};

const postHandler = (req, res) => {
    res.send(req.params);
};

app.get("/posts/:postID", postMiddleware, postHandler);

app.get('/random.text', (req, res) => {
    res.send('random.text')
})

  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

app.get("/names", (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });