import app from './app';
import dotenv from 'dotenv';
import http from 'http';
// Load environment variables
dotenv.config();

// Set port
const PORT = process.env.PORT || 8000;

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
}); 