const { exec } = require('child_process');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(express.json());
app.use(cors());

app.post('/execute', (req, res) => {
  const { command } = req.body;

  exec(command, (error, stdout, stderr) => {
    const output = stdout || stderr;
    res.status(200).json({ output });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});