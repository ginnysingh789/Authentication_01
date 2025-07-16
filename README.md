# Authentication API

A robust Node.js authentication API. Built with Express, MongoDB, and Zod, it provides secure, validated endpoints for core user authentication and management.

## Features
-   **Signup:** Zod-validated user registration; checks for existing users.
-   **Sign In:** Authenticates credentials, generates JSON Web Tokens (JWT).
-   **Get Data:** JWT-protected endpoint to retrieve all user records.
-   **Reset Password:** Secure password updates, Zod-validated.
-   **Schema Validation:** Zod ensures data integrity across all inputs.

## Installation
1.  Clone the repository: `git clone <repository-url>`
2.  Navigate into the directory: `cd authentication-api`
3.  Install dependencies: `npm install`
4.  Configure `MONGO_URI` and `JWT_SECRET` environment variables.
5.  Start the server: `node index.js`

## Usage
**Sign Up:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "securepassword"}' http://localhost:3000/sign-up
```

**Sign In:**
```bash
curl -X GET -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "securepassword"}' http://localhost:3000/sign-in
```

**Get Data:**
```bash
curl -X GET -H "Authorization: Bearer <your-jwt-token>" http://localhost:3000/getData
```

**Reset Password:**
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"email": "user@example.com", "currentpassword": "oldpassword", "newpassword": "newsecurepassword"}' http://localhost:3000/rest-password
```

## Contributing
Fork the repository, create a feature branch, and submit pull requests.

## License
ISC License.