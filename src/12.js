const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // Months start from 0
  const currentDay = now.getDate();
  const greeting = `Good ${currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : 'evening'},`;
  res.send(`${greeting} Today is ${currentMonth}/${currentDay}/${currentYear}.`);
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
