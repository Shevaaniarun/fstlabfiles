import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get('/api/questions').then(res => {
      setQuestions(res.data);
      setAnswers(res.data.map(q => ({ selected: null, correct: q.correct })));
    });
  }, []);

  const handleSelect = (qIndex, optIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex].selected = optIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    axios.post('/api/submit', { answers }).then(res => {
      setScore(res.data.score);
      setSubmitted(true);
    });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Quiz App</h1>
      {!submitted ? (
        <>
          {questions.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '1rem' }}>
              <h3>{q.question}</h3>
              {q.options.map((opt, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input
                    type="radio"
                    name={`q-${idx}`}
                    onChange={() => handleSelect(idx, i)}
                    checked={answers[idx]?.selected === i}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button
  style={{
    display: 'block',
    backgroundColor: 'black',
    color: 'white',
  }}
  onClick={handleSubmit}
>
  Submit
</button>

        </>
      ) : (
        <center><h2 style={{ display: 'block' }}>Your Score: {score} / {questions.length}</h2></center>
      )}
    </div>
  );
}

export default App;
