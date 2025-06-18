import { Request, Response } from 'express';

export default class AverageController {
    calculateAverage(req: Request, res: Response) {
        const numbers: number[] = req.body.numbers;

        if (!Array.isArray(numbers) || numbers.length === 0) {
            return res.status(400).json({ error: 'Please provide a non-empty array of numbers.' });
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;

        res.json({ average });
    }
}