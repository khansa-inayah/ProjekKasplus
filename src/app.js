const express = require('express');
const cors = require('cors');

const transaksiRoutes = require('./routes/transaksiRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', transaksiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});