const FetchArticleLikes = async () => {
  const url = 'http://localhost:8080/api/likes'; //url address to access the api

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTY1MTAwNSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1NTY0NjA1fQ.YJZUU1VW275dhPzaicgzRLpaV9y63w24TKxX-PW4-nYex46FW0J2oN_50uie6h_h_v-57UJbHbyDpWHBKgh2JA';
  //used the above token to access the API
  //the code initiate a GET request to the specified URL with the token. Use Fetch() to make a HTTP request.
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //this check if the response is with OK status(200..)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //if the response is good this parse the response body as JSON using json().
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default FetchArticleLikes;
