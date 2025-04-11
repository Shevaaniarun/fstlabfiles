const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quizapp');

const Question = require('./models/Question');

app.get('/api/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.post('/api/submit', (req, res) => {
  const { answers } = req.body;
  let score = 0;

  answers.forEach(ans => {
    if (ans.selected === ans.correct) {
      score++;
    }
  });

  res.json({ score });
});

app.listen(5000, () => console.log('Server running on port 5000'));
