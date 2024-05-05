const FetchArticles = async () => {
  const url = 'http://localhost:8080/api/articles';
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTAwMzUwNSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE0OTE3MTA1fQ.2UbR7nGjrsl9Z8ClbvywBbfzORBT-KOJWdvFRe1o_89B6PZOX9El_tpF_1bZc_c7SFfR-tkU0YUT8KgAPWtlxQ';

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
