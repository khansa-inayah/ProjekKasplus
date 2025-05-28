const { isValidInputTransaksi } = require('../utils/validation');
// const { db } = require('../firebase/firebase'); // Untuk Firestore

exports.tambahTransaksi = async (req, res) => {
  const data = req.body;
  if (!isValidInputTransaksi(data)) {
    return res.status(400).json({ success: false, message: 'Input tidak valid' });
  }
  // Simpan ke Firestore (contoh dummy)
  // await db.collection('Transaksi').add(data);
  res.json({ success: true, message: 'Transaksi berhasil disimpan (dummy)' });
};