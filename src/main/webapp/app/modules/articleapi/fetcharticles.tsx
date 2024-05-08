const FetchArticles = async () => {
  const url = 'http://localhost:8080/api/articles';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTI3NzIwMiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MTkwODAyfQ.JITAeb4e00zpQ2e_jR-ZZYSO6LIb0PJzx63zHAV3lE7XJqCKJu5zhR4XhRAWPlZ6jOotmYBgU9jdpdx7y0JsHw';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default FetchArticles;
