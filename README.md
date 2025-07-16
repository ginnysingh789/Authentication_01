```markdown
# Authentication API

This is a robust Node.js authentication API built using Express, MongoDB, and Zod. It provides essential features for secure user management, with all data inputs validated for integrity.

## Features

-   **User Signup:** Register new users with strong Zod validation, ensuring uniqueness and data integrity before storage.
-   **User Sign-in:** Authenticate user credentials and issue JSON Web Tokens (JWT) upon successful login for secure session management.
-   **Protected Data Access:** Retrieve all user data stored in MongoDB, accessible only via a valid JWT, demonstrating secured endpoint functionality.
-   **Password Reset:** Allows users to securely update their passwords, including validation of reset data using Zod.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB (via Mongoose ODM)
-   JSON Web Token (JWT)
-   Zod (for schema validation)

## Setup and Run

1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Ensure your MongoDB connection string is correctly configured in `db.js`.
4.  Start the server: `node index.js`

The API will be running on `http://localhost:3000`.
```