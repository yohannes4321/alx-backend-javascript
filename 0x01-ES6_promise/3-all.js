import { uploadPhoto, createUser } from "./utils.js"; // Corrected import statements

export default function handleProfileSignup() {
    return new Promise((resolve, reject) => {
        Promise.all([uploadPhoto(), createUser()])
            .then(([photoResponse, userResponse]) => { // Destructuring the responses
                 // Assuming photoResponse has a body property
                const {firstName,lastName}=userResponse;
                console.log(`${photoResponse.body} ${firstName} ${lastName}`) // Assuming userResponse has a body property

                // Resolving the promise with a combined result if needed
                resolve({ status: 200, photo: photoResponse.body, user: userResponse.body });
            })
            .catch(() => {
                console.log("Signup system offline");
                reject(new Error("Signup system offline")); // Rejecting the promise on error
            });
    });
}
