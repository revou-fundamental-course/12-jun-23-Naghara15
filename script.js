
// fungsi untuk mengkonversi suhu
function convert(satuan, suhu) { 
  // jika satuan yang dipilih adalah celsius maka memakai rumus celsius ke fahrenheit. else maka memakai rumus fahrenheit ke celsius 
  if (satuan == 'celsius') {
    const rumus = `${suhu} * (9 / 5) + 32`;
    const celsius = (suhu * 9 / 5) + 32;
    return { celsius, rumus };
  } else {
    const rumus = `(${suhu} - 32) * 5 / 9`;
    const fahrenheit = (suhu - 32) * 5 / 9;
    return {fahrenheit, rumus};
  }
}

// event ketika form di submit
document.querySelector('#form-suhu').addEventListener('submit', function (e) {
  e.preventDefault();
  const suhu = e.target.suhu.value;
  const satuan = e.target.satuan.value;

  const hasil = convert(satuan, suhu);
  
  console.log(hasil);
  if (satuan == 'celsius') {
    document.getElementById('hasil').value = hasil.celsius;
    document.getElementById('rumus').value = hasil.rumus;
  } else {
    document.getElementById('hasil').value = hasil.fahrenheit;
    document.getElementById('rumus').value = hasil.rumus;
  }
});
