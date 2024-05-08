const PostBookmarks = async (articleID: number, userID: number) => {
  const url = 'http://localhost:8080/api/bookmarks';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTI5MDY5NiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjA0Mjk2fQ.S-kZtQsfAR3KNL5ECpmT6Y08xf_kEfQPJ1JwiD4xGaJNPfu9pgjFoL_vXm_3AXuhXXUgi5nuUCrdUyoa_o56ig';

  const requestBody = JSON.stringify({
    articleId: articleID,
    userId: userID,
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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default PostBookmarks;
