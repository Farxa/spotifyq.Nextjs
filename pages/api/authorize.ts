// pages/api/authorize.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { CLIENT_ID, REDIRECT_URI } = process.env;

    // Generate a random state value and store it securely (for CSRF protection).
    const state = generateRandomString(16);

    // Define the requested scopes.
    const scopes = [
        "streaming",
        "playlist-modify-public",
        "ugc-image-upload",
        "user-read-email",
        "user-read-private",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-modify-playback-state",
    ];

    // Join the scopes into a space-separated string.
    const scope = scopes.join(' ');

    // Redirect the user to the Spotify authorization URL.
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}`;
    res.redirect(authUrl);
}

// Generate a random string of a specified length.
function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
