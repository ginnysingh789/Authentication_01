# Authentication API

This project is a Node.js authentication API built with Express, MongoDB, and Zod. It offers essential authentication features including -

## Features

- **Signup:**  
  - Validates user input using Zod.
  - Checks if the user already exists before registering.
  
- **Sign in:**  
  - Authenticates user credentials.
  - Generates a JSON Web Token (JWT) upon successful authentication.
  
- **Get Data:**  
  - Secured endpoint that verifies the JWT token.
  - Retrieves and displays all user data stored in MongoDB.
  
- **Reset Password:**  
  - Validates reset data with Zod.
  - Resets the user's password if the user exists.
  
- **Schema Validation:**  
  - All input is validated using Zod to ensure data integrity.
  
- **Express Routes:**  
  - Uses Express for HTTPS routes to handle authentication operations.



