const FetchArticles = async () => {
  const url = 'http://localhost:8080/api/articles';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTM3NjYwNCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjkwMjA0fQ.M_577FcPGERl-261V71e3ZkxLrUa08Cr_HRQvvu65Qcf21AI3VV8bSe1p0EJekrX9_iVLJyaZQfYd6i9AVDtmQ';

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
