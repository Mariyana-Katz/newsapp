const GetComments = async (articleID: number) => {
  const url = `http://localhost:8080/api/comments/getComments?articleId=${articleID}`;

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTM3OTA2NCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjkyNjY0fQ.-w86FAcW_chUq4tqsEj1ZjQAAFGRcU2N015EvkJ8R0L4ndd75yky0XLq32j9e-CEWM6_nuBAjvH0Kqy7NzsTpg';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default GetComments;
