import express from 'express';
import cors from 'cors';
import app from express();

app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });