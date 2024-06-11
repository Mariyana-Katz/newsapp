//function for posting the likes
const PostLikes = async (articleID: number, userID: number, likeCOUNT: number) => {
  const url = 'http://localhost:8080/api/likes';

  //retrieves the authentication token stored in the session storage,
  //removes the leading and trailing characters(quotes) from the token string,
  // and assigns the result to a variable.
  const token =
    sessionStorage.getItem('jhi-authenticationToken')?.substring(1, sessionStorage.getItem('jhi-authenticationToken').length - 1) || '';

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
        // Bearer  type of access token that grants access to resources when included in an HTTP request.
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
