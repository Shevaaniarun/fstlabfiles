const express = require("express");
const app = express();
app.use(express.json());

app.post("/student", (req, res) => {
    const { registerNumber, subjectCode } = req.body;

    // Generate random hall and seat numbers
    const hallNumber = `H-${Math.floor(Math.random() * 10) + 1}`;
    const seatNumber = `S-${Math.floor(Math.random() * 50) + 1}`;

    // Respond with the data received and the generated values
    res.json({ registerNumber, subjectCode, hallNumber, seatNumber });
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
