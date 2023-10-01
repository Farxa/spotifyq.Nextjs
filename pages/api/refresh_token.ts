import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { CLIENT_ID, CLIENT_SECRET } = process.env;
    const { refresh_token } = req.query;

    // Make a POST request to Spotify's token endpoint to refresh the token.
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token as string,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(response.status).end();
    }
}
