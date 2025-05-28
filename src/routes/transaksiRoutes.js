const express = require('express');
const router = express.Router();
const { tambahTransaksi } = require('../controllers/transaksiController');

router.post('/transaksi', tambahTransaksi);

module.exports = router;