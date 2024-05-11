import { useSelector } from 'react-redux';

const PostBookmarks = async (articleID: number, userID: number) => {
  const url = 'http://localhost:8080/api/bookmarks';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING

  const requestBody = JSON.stringify({
    articleId: articleID,
    userId: userID,
  });

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTUyOTY0MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1NDQzMjQwfQ.isR4u3ZyuXfbNj7GGHmBFfSMJAcx6CHp-Y_MUDbQVbchoKLEDFxR2YVkf8Ag_bya7PY4j2vi8nFvi1BL0aYkZw';
  console.log(token);

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
