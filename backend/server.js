import express from 'express'
// import cors from 'cors'
import 'dotenv/config'
import bodyParser from 'body-parser'
import { loginUser, protectedRoute } from './controllers/userController'
import verifyJWT from './middleware/jwtToken'
import { db } from './dbConnection'

// Initialize express server
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Login route
app.post('/api/login', loginUser);

// Protected route
app.get('api/protected', verifyJWT, protectedRoute);

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});