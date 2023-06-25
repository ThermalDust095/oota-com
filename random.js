import fetch from 'node-fetch';


async function search(query) {
    const apiKey = 'AIzaSyCQeVcSq1gTf33vlrYKNPQyweT89adjsEc'; // Replace with your API key
    const endpoint = 'https://cloudsearch.googleapis.com/v1/query/search';
  
    const requestData = {
      query: query,
      // Add any additional parameters or options as needed
    };
  
    try {
      const response = await fetch(`${endpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to perform search');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  // Example usage
  const searchQuery = 'example query';
  search(searchQuery)
    .then(result => {
      console.log(result);
      // Process and display the search results as needed
    })
    .catch(error => {
      console.error(error);
    });
  
  
  
  