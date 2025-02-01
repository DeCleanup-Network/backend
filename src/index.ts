import express from 'express';
import dotenv from 'dotenv';
import { create, IPFSHTTPClient } from 'ipfs-http-client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize IPFS client
const ipfs: IPFSHTTPClient = create({
  url: process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001',
});

app.post('/leaderboard', (req, res) => {
  res.status(200).json({ message: 'Leaderboard Endpoint!' });
});

app.get('/ipfs', (req, res) => {
  res.status(200).json({ message: 'IPFS Endpoint!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
