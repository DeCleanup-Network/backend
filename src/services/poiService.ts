import type { Request, Response } from 'express';

export const getPOIs = (req:Request, res:Response) => {
    // Fetch POIs (dummy data for now)
    const pois = [
    ,  ];
    res.status(200).json(pois);
  };
  
  export const addPOI = (req:Request, res:Response) => {
    const { name, location } = req.body;
    // Save POI logic here
    res.status(201).json({ message: "POI added successfully", poi: { name, location } });
  };
  