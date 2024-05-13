//function for posting the likes
const PostLikes = async (articleID: number, userID: number, likeCOUNT: number) => {
  const url = 'http://localhost:8080/api/likes';

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTY1MTAwNSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1NTY0NjA1fQ.YJZUU1VW275dhPzaicgzRLpaV9y63w24TKxX-PW4-nYex46FW0J2oN_50uie6h_h_v-57UJbHbyDpWHBKgh2JA';
  //requestbody use stringify method to convert js value to json string
  const requestBody = JSON.stringify({
    articleId: articleID,
    userId: userID,
    likeCount: likeCOUNT,
  });

  //use fetch() to post the request
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
    console.log(likeCOUNT);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default PostLikes;
