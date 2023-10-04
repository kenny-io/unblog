// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await fetch('https://graphql.unbody.io/', {
      method: 'POST',
      headers: {
          "Authorization": "Bearer TOKEN_FROM_DASHBOARD",
          "X-Project-Id": "ID_FROM_DASHBOARD"
      },
      body: JSON.stringify({
        query: `
           {
            Get {
              GoogleDoc {
                originalName
                text
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    console.log(data);

    // You can send the fetched data as the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return an error response to the client
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
