const express = require('express');
const app = express();
app.use(express.static('dist'));

// Add your routes here

app.listen(3000);
console.log('Server is running on http://localhost:3000');
