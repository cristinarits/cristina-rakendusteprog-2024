const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const catsRoutes = require('./routes/cats.routes');
app.use('/cats', catsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});