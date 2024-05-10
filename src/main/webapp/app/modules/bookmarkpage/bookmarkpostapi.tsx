const PostBookmarks = async (articleID: number, userID: number) => {
  const url = 'http://localhost:8080/api/bookmarks';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTI4Njk4MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MjAwNTgwfQ.ut_iUaGPOYWn-UIQKvkb5JgZNqpIhOPkhQZCph5yKWJi3gi0VJXrxhMranhbg3q5_beZZOjRrnEWUnE6KdrECw';

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
