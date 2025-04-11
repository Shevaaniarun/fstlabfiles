const http = require('http');
const querystring = require('querystring');

// HTML content for the login form (embedded directly in the JS)
const loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login</title>
</head>
<body>

    <h2>Student Login</h2>

    <form action="/login" method="POST">
        <label for="regnum">Registration Number:</label><br>
        <input type="text" id="regnum" name="regnum" required><br><br>

        <label for="subcode">Subject Code:</label><br>
        <input type="text" id="subcode" name="subcode" required><br><br>

        <input type="submit" value="Login">
    </form>

</body>
</html>
`;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');

    // Serve the HTML page (GET request)
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end(loginPage);
    }
    // Handle form submission (POST request)
    else if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        // Collect the POST data (form submission)
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            // Parse the form data
            const data = querystring.parse(body);
            const { regnum, subcode } = data;

            // Generate hall and seat numbers
            const hallNum = `Hall-${Math.floor(Math.random() * 10) + 1}`;  // Random hall number between Hall-1 and Hall-10
            const seatNum = `Seat-${Math.floor(Math.random() * 100) + 1}`;  // Random seat number between Seat-1 and Seat-100

            // Create the response JSON object
            const responseJson = {
                hallNum: hallNum,
                seatNum: seatNum
            };

            // Send the JSON response to the client
            res.statusCode = 200;
            res.end(JSON.stringify(responseJson));
        });
    } else {
        // Handle 404 - Not Found for other routes
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
