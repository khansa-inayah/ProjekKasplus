function isValidInputTransaksi(data) {
  return data.tanggal && data.nominal && data.tipe;
}
module.exports = { isValidInputTransaksi };