import { Router, Application } from 'express';
import AverageController from '../controllers/averageController';

const router = Router();
const averageController = new AverageController();

export function setAverageRoutes(app: Application) {
    app.use('/average', router);
    router.post('/', averageController.calculateAverage.bind(averageController));
}