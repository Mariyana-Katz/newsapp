const FetchArticles = async () => {
  const url = 'http://localhost:8080/api/articles';
  //INSERT TOKEN HERE BUT DONT FORGET TO REMOVE IT BEFORE MERGING
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTExMTE5MiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MDI0NzkyfQ.wm5mS1rw5twMVG8hT1XQ5Cw2v_C2WY0iuDpj66Wnp0ZyujlximtIKKsanh7u3AFs0Pt2NK_YqERedNBbFAyXHA';

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
