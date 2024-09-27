import { createClerkClient } from '@clerk/backend';
import db from './db';


async function fixLogin(username: string, newId: string) {
    const [result] = await db.query(
        "UPDATE User SET id = ? WHERE username = ?",
        [newId, username]
    );
    return result;
}


const clerkClient = createClerkClient({ secretKey: 'sk_live_NGR2OA2IqwOcceZBfwlP90oMCEfrqlV7XYbuzjccVp' });

async function fetchUserList() {
    try {
        const response = await clerkClient.users.getUserList({ limit: 200, });

        // Map to extract only username and id
        const filteredUsers = response.data.map(user => ({
            id: user.id,
            username: user.username ?? ''
        }));

        filteredUsers.forEach(user => fixLogin(user.username, user.id));
    } catch (error) {
        console.error('Error fetching user list:', error);
    }
}

fetchUserList();
