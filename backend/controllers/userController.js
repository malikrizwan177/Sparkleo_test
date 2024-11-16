import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { db } from '../dbConnection.js';

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Query user by email
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        const user = results[0];

        // Compare password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

         res.json({ token });
    });
}

const protectedRoute = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token required.' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        await res.json({ message: 'Welcome to the protected route!', user });
    });
}

export { loginUser, protectedRoute }