const http = require("http");

const data = JSON.stringify({
    registerNumber: "123456",
    subjectCode: "CS101"
});

// Create the options object for the HTTP request
const options = {
    hostname: 'localhost',  // Server address
    port: 5050,             // Port where the server is running
    path: '/student',       // API endpoint
    method: 'POST',         // HTTP method
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

// Make the HTTP request
const req = http.request(options, (res) => {
    let responseData = '';

    // Listen for data in the response
    res.on('data', (chunk) => {
        responseData += chunk;
    });

    // When the response is complete, print the response body
    res.on('end', () => {
        console.log('Response from server:', JSON.parse(responseData));
    });
});

// Handle errors in the request
req.on('error', (error) => {
    console.error(`Error in request: ${error.message}`);
});

// Send the JSON data to the server
req.write(data);

// End the request
req.end();
