import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;

    // Check credentials against environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.error('Admin credentials not configured in environment variables');
      return res.status(500).json({ message: 'Admin authentication not configured' });
    }

    // Verify credentials
    if (username === adminUsername && password === adminPassword) {
      // Generate JWT token
      const token = jwt.sign(
        { 
          username: username,
          role: 'admin',
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
        },
        process.env.JWT_SECRET
      );

      res.status(200).json({
        message: 'Login successful',
        token: token,
        user: { username: username, role: 'admin' }
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 