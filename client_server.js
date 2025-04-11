const studentData = {
    registerNumber: "123456",
    subjectCode: "CS101"
};
const express = require("express");
const app = express();
app.use(express.json());

app.post("/student", (req, res) => {
    const { registerNumber, subjectCode } = req.body;

    const hallNumber = `H-${Math.floor(Math.random() * 10) + 1}`;
    const seatNumber = `S-${Math.floor(Math.random() * 50) + 1}`;

    res.json({ registerNumber, subjectCode, hallNumber, seatNumber });
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
