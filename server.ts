import express from 'express';
import { setAverageRoutes } from './routes/averageRoutes';

const app = express();
const port = 3000;

app.use(express.json());

setAverageRoutes(app);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});