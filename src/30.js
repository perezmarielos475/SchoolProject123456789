// Replace with your actual API URL or configuration
const axios = require('axios');

async function fetchSchoolProjectData() {
  const response = await axios.get('https://schoolapi.example.com/api/school/projects');
  if (response.data.success) {
    return response.data.data;
  } else {
    throw new Error(`Failed to load school projects. Status code: ${response.data.status}`);
  }
}

fetchSchoolProjectData().then(data => console.log(data));
