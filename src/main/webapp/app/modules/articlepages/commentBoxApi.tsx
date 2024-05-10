const PostComments = async (articleID: number, userID: number, commentTEXT: String) => {
  const url = 'http://localhost:8080/api/comments';

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTM3OTA2NCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjkyNjY0fQ.-w86FAcW_chUq4tqsEj1ZjQAAFGRcU2N015EvkJ8R0L4ndd75yky0XLq32j9e-CEWM6_nuBAjvH0Kqy7NzsTpg';

  const requestBody = JSON.stringify({
    commentText: commentTEXT,
    likes: articleID,
    user_id: userID,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(articleID);
    console.log(userID);
    console.log(commentTEXT);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default PostComments;
