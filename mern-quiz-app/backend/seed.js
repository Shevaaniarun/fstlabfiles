const mongoose = require('mongoose');
const Question = require('./models/Question');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quizapp')
  .then(() => {
    console.log('MongoDB connected!');
    return seedData();
  })
  .catch(err => console.error('MongoDB connection error:', err));

async function seedData() {
  await Question.deleteMany(); // Clear previous data

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
      correct: 1
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3
    },
    {
      question: "Who is the founder of Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      correct: 1
    }
  ];

  await Question.insertMany(questions);
  console.log("✅ Quiz questions seeded!");
  mongoose.disconnect();
}
