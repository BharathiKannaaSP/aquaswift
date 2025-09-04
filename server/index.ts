import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import authRoutes from './routes/authRoutes.ts';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8002;

app.use(express.json());

// Checker endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || 'Something went wrong!',
    status: error.status,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
