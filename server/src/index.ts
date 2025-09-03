import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
