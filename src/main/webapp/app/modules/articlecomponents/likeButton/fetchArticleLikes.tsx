const FetchArticleLikes = async () => {
  const url = 'http://localhost:8080/api/likes';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTQ4MTY1NCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1Mzk1MjU0fQ.xOlB1dGXztkGjiaMvZFwJdpDkiv3j2ogmP7GJff3Nz3jpZ-oHBUnSNfTO5MMLeisBpi4AQ4ECORnpDjynxQcEQ';

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

export default FetchArticleLikes;
