const FetchBookmarks = async () => {
  const url = 'http://localhost:8080/api/bookmarks';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTI4NjMwNCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MTk5OTA0fQ.SRMRn1CrhQeBM9ACa_5w2E-LP6AUxDbWW4CZz0UYQV69Ois5qdkxIhNZJCxRxViVLKw5JQ09defNzAxKdnoCPA';

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

export default FetchBookmarks;
