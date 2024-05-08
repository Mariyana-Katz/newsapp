const PostBookmarks = async (articleID: number, userID: number) => {
  const url = 'http://localhost:8080/api/bookmarks';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTE5ODIwMSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MTExODAxfQ.RHiUBcbIkIl6D3yMjRYXxt44c8JnzkvSK_2NnjveJwmyXosK_w3ek2DfiHvporh5FAROJehfAusWa8Jg5poDwg';

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
