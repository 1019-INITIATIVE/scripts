// import { createClerkClient } from '@clerk/backend'
// import * as data from './users.json'

// const clerkClient = createClerkClient({ secretKey: 'sk_test_mLpROLaBjEcaV1GNWBVG8DDL5jG6pYiIfIy12xcYse' })


// // const response = await clerkClient.users.getUserList()




// // const response = await clerkClient.users.createUser({
// //     firstName: 'Test',
// //     lastName: 'User',
// //     emailAddress: ['testclerk123@gmail.com'],
// //     password: 'password',
// // })



import { createClerkClient } from '@clerk/backend';
import * as data from './users.json';

const clerkClient = createClerkClient({ secretKey: 'sk_live_NGR2OA2IqwOcceZBfwlP90oMCEfrqlV7XYbuzjccVp' });

async function createUsers() {
    try {
        for (const user of data.users) {

            if (user.email) {
                try {
                    const response = await clerkClient.users.createUser({
                        username: user.username,
                        emailAddress: [user.email],
                        password: '#1MasterCode',
                    });
                    console.log(response);
                } catch (error) {
                    continue;
                }
            }
        }
    } catch (error) {
        console.error('Error creating user:', error);

    }
}

createUsers();
