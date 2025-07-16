```markdown
# Authentication API

A robust Node.js authentication API built with Express, MongoDB, and Zod. It provides secure and validated endpoints for essential user management functionalities.

## Technologies Used

This API leverages Node.js with Express for efficient routing, MongoDB for flexible data storage, and Zod for robust schema validation. JSON Web Tokens (JWTs) are used to secure authenticated routes.

## Features

-   **Signup:** Validates user input with Zod and checks for existing users before registration.
-   **Sign-in:** Authenticates user credentials and generates a JWT upon successful login.
-   **Get Data:** A secured endpoint requiring a valid JWT to retrieve all user data from MongoDB.
-   **Reset Password:** Allows users to update their password after validating the new credentials.
-   **Input Validation:** All incoming data is rigorously validated using Zod schemas to ensure data integrity and security.

## Getting Started

1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Run the server: `node index.js`
```