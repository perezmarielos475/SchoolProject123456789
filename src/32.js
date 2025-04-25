// Node.js code example for interacting with a web server

// Replace 'http://localhost:8080' or your desired API URL with your actual API endpoint
const axios = require('axios');

async function getBooks() {
  try {
    const response = await axios.get('http://localhost:8080/books');
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch books. Error: ${error.message}`);
    throw error;
  }
}

getBooks().then(result => {
  // Process the fetched data
  if (Array.isArray(result)) {
    result.forEach(book => {
      console.log(`Book Name: ${book.name} - Author: ${book.author}`);
    });
  } else {
    console.log("No books found.");
  }
});
