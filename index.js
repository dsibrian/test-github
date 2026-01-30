import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

const port = parseInt(process.env.PORT) || 8080;

app.listen(port);
