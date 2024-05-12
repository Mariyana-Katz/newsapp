const UpdateLikes = async (id: number, likeCOUNT: number) => {
  const url = 'http://localhost:8080/api/likes/' + id;

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTUyODg3NywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1NDQyNDc3fQ.0mc7DgbphlXRWC5-ypwGSFPjGn1-d5K4t9vHKPFIFxtiUCc6YzVirjUcu0cRrHTgYDT1OxJNU8RR7_cfjhs5Qw';
  //'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNTQ1NTQzOCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE1MzY5MDM4fQ.lf_hGWSbz41XGX1NxWwAJVANuVbyczC3w3scufclM6EmgUNV1qi2GMRkwqE05euHU06KwskuC6nCuJRwU1SmSA';

  const requestBody = JSON.stringify({
    id: id,
    likeCount: likeCOUNT,
  });

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(likeCOUNT);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export default UpdateLikes;
