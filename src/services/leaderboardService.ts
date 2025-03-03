import type { Request, Response } from 'express';

export const getLeaderboard = (req:Request, res:Response) => {
    const leaderboard = [
      { user: "Alice", points: 200 },
      { user: "Bob", points: 150 }
    ];
    res.status(200).json(leaderboard);
  };
  